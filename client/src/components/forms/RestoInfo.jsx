import React, { useState } from "react";
import Input from "../reasuableComponents/UI/Input";
import Dropdown from "../reasuableComponents/UI/Dropdown";
import { cuisine, foodtype } from "@/lib/homepageData";
import TextArea from "../reasuableComponents/UI/TextArea";
import Button from "../reasuableComponents/UI/Button";

const RestoInfo = () => {
  const [form, setForm] = useState({
    ownName: "",
    type: "",
    cuisineType: "",
    description: "",
  });

  function handleChange() {
    console.log('i hits')
  }

  return (
    <form className="space-y-4">
      <Input
        type="text"
        label="Owner Name"
        name="ownName"
        value={form.ownName}
        onChange={handleChange}
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Dropdown
          name="type"
          label="Type"
          value={form.type}
          onChange={handleChange}
          options={foodtype}
        />
        <Dropdown
          name="cuisineType"
          label="Cuisine Type"
          value={form.cuisineType}
          onChange={handleChange}
          options={cuisine}
        />
      </div>
      <TextArea
        name="description"
        value={form.description}
        onChange={handleChange}
        rows={5}
        placeholder="Add Restuarent Discription"
      />
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50"
          required
        />
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          Is Pure Veg?
        </label>
      </div>
      <Button className="w-full" variant="primary">
        Save
      </Button>
    </form>
  );
};

export default RestoInfo;
