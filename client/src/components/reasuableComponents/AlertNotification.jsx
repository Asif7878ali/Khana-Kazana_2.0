import Icons from "@/utils/Icons";
import { useState, useEffect } from "react";

const AlertNotification = ({
  message,
  severity = "info",
  position = "top-right",
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Wait for fade-out animation
  };

  const getSeverityStyles = (type) => {
    switch (type) {
      case "success":
        return {
          border: "border-l-green-500",
          bg: "bg-green-50/95",
          text: "text-green-800",
          icon: "text-green-500",
        };
      case "error":
        return {
          border: "border-l-red-500",
          bg: "bg-red-50/95",
          text: "text-red-800",
          icon: "text-red-500",
        };
      case "warning":
        return {
          border: "border-l-yellow-500",
          bg: "bg-yellow-50/95",
          text: "text-yellow-800",
          icon: "text-yellow-500",
        };
      case "info":
      default:
        return {
          border: "border-l-blue-500",
          bg: "bg-blue-50/95 ",
          text: "text-blue-800 ",
          icon: "text-blue-500",
        };
    }
  };

  const getAnimationClasses = (pos) => {
    if (isClosing) return "opacity-0 scale-95 transition-all duration-300";
    
    let animation = "animate-in fade-in duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";
    
    if (pos.includes('right')) animation += " slide-in-from-right-full";
    else if (pos.includes('left')) animation += " slide-in-from-left-full";
    else if (pos.includes('center') || pos === 'center') animation += " slide-in-from-top-4 scale-95";
    
    return animation;
  };

  const getAlertIcon = (type) => {
    const iconClass = `size-6 ${getSeverityStyles(type).icon}`;
    switch (type) {
      case "success":
        return <Icons.Success className={iconClass} />;
      case "error":
        return <Icons.Error className={iconClass} />;
      case "warning":
        return <Icons.Warning className={iconClass} />;
      case "info":
      default:
        return <Icons.Info className={iconClass} />;
    }
  };

  const styles = getSeverityStyles(severity);

  return (
    <div
      className={`pointer-events-auto flex items-start min-w-[320px] max-w-md border-l-6 ${styles.border} ${styles.bg} backdrop-blur-md shadow-2xl rounded-lg p-4 relative group transition-all duration-300 ${getAnimationClasses(position)} hover:scale-[1.02] active:scale-95`}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5">{getAlertIcon(severity)}</div>

      <div className="ml-4 mr-6 flex-1 text-left">
        <p className={`text-sm leading-relaxed ${styles.text}`}>{message}</p>
      </div>

      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
        aria-label="Close"
      >
        <Icons.Cross className="size-4" />
      </button>
    </div>
  );
};

export default AlertNotification;
