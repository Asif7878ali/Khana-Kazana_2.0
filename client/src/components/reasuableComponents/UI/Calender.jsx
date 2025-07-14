import React, { useState, useRef, useEffect } from "react";
import Icons from "@/utils/Icons";
import { weekdays } from "@/utils/constaint";
import { ErrorsMessage } from "../Errors";


const Calendar = ({ name, value, onChange, max, min, placeholder = "Select Date" , error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    if (value) {
      const [year, month, day] = value.split("-").map(Number);
      return new Date(year, month - 1, day); // Local date
    }
    const today = new Date();
    const minDate = min ? new Date(min) : null;
    const defaultDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return minDate && defaultDate < minDate ? minDate : defaultDate;
  });
  const calendarRef = useRef(null);
  const triggerRef = useRef(null);
  const [position, setPosition] = useState("bottom");

  // Generate days for the current month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const maxDate = max ? new Date(max) : new Date();
  const minDate = min ? new Date(min) : null;

  // Generate year range (80 years up to current year, respecting min/max)
  const currentYear = new Date().getFullYear(); // 2025
  const minYear = minDate ? minDate.getFullYear() : currentYear - 80;
  const maxYear = maxDate ? Math.min(maxDate.getFullYear(), currentYear) : currentYear;
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i);

  // Format date as YYYY-MM-DD in local timezone
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Generate calendar grid
  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isSelected = value && value === formatDate(date);
      const isDisabled = (minDate && date < minDate) || (maxDate && date > maxDate);
      days.push(
        <button
          key={day}
          type="button"
          disabled={isDisabled}
          onClick={() => handleDateSelect(date)}
          className={`h-10 w-10 flex items-center justify-center rounded-full ${
            isSelected
              ? "bg-rose-500 text-white"
              : isDisabled
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-rose-100"
          }`}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    if ((minDate && date < minDate) || (maxDate && date > maxDate)) {
      return;
    }
    const formattedDate = formatDate(date);
    onChange({ target: { name, value: formattedDate } });
    setIsOpen(false);
  };

  // Navigate to previous/next month
  const changeMonth = (delta) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1);
    if (minDate && newDate < new Date(minDate.getFullYear(), minDate.getMonth(), 1)) {
      return;
    }
    if (maxDate && newDate > new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)) {
      return;
    }
    setCurrentDate(newDate);
  };

  // Handle year selection
  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    const newDate = new Date(newYear, currentDate.getMonth(), currentDate.getDate());
    if (minDate && newDate < minDate) {
      newDate.setFullYear(minDate.getFullYear());
      newDate.setMonth(minDate.getMonth());
    }
    if (maxDate && newDate > maxDate) {
      newDate.setFullYear(maxDate.getFullYear());
      newDate.setMonth(maxDate.getMonth());
    }
    setCurrentDate(newDate);
  };

  // Position calendar based on screen space
  useEffect(() => {
    if (isOpen && calendarRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const calendarHeight = 300;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      if (spaceBelow < calendarHeight && spaceAbove > spaceBelow) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }
  }, [isOpen]);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative">
        <div
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          className={`flex items-center w-full p-2 pr-10 border  rounded-md  cursor-pointer
              ${error ? 'border-red-500 focus:ring-red-500 bg-red-50/50' : 'bg-white border-gray-300 focus:outline-none focus:ring focus:ring-gray-500'}
          `}
          role="button"
          aria-label="Select date"
          aria-describedby="calendar-icon"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(true);
            }
          }}
        >
          <span className={`${error ? 'text-red-900' : 'text-gray-900'} `}>{value ? formatDate(value) : placeholder}</span>
        </div>
        <input
          type="hidden"
          name={name}
          value={value || ""}
        />
        <span
          className="absolute right-2 top-5 -translate-y-1/2 cursor-pointer"
          id="calendar-icon"
          onClick={() => setIsOpen(true)}
        >
          <Icons.Calender className={`size-5 ${error ? 'text-red-700' : 'text-gray-700'} `} />
        </span>

         {error && <ErrorsMessage error={error} />}
      </div>
      {isOpen && (
        <div
          ref={calendarRef}
          className={`absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg w-72 p-4 ${
            position === "top" ? "bottom-[100%] mb-2" : "top-[100%] mt-2"
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              className="p-1 hover:bg-rose-100 rounded"
            >
              <Icons.CheronLeft className='size-5 text-gray-700'/>
            </button>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">
                {currentDate.toLocaleString("default", { month: "long" })}
              </span>
              <select
                value={currentDate.getFullYear()}
                onChange={handleYearChange}
                className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-500"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              className="p-1 hover:bg-rose-100 rounded"
            >
                <Icons.CheronRight className='size-5 text-gray-700'/>
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {weekdays.map((day) => (
              <div key={day} className="font-medium text-sm">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;