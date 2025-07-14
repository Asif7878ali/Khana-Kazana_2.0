import React, { useState } from "react";
import Input from "../reasuableComponents/UI/Input";
import { DeleviryRadius, indianCity, indianStates } from "@/lib/homepageData";
import Dropdown from "../reasuableComponents/UI/Dropdown";
import Button from "../reasuableComponents/UI/Button";

const RestuarentLocation = () => {
  const [form, setForm] = useState({
    pincode: "",
    street: "",
    landmark: "",
    radius: "",
    city: "",
    state: "",
  });

  function handleChange() {
    console.log("i hits");
  }

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Input
          type="text"
          label="Pincode"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          maxLength="6"
          required
        />
        <Input
          type="text"
          label="Street/Flat no."
          name="street"
          value={form.street}
          onChange={handleChange}
          placeholder="Street no."
          required
        />
        <Input
          type="text"
          label="Landmark"
          name="landmark"
          value={form.landmark}
          onChange={handleChange}
          placeholder="Landmark"
          required
        />
        <Dropdown
          name="radius"
          label="Select Deleviry Radius"
          value={form.radius}
          onChange={handleChange}
          options={DeleviryRadius}
        />
        <Dropdown
          value={form.state}
          onChange={handleChange}
          name="state"
          label="State"
          options={indianStates}
        />

        <Dropdown
          value={form.city}
          onChange={handleChange}
          name="city"
          label="City"
          options={indianCity}
        />
      </div>
      <Button className="w-full" variant="primary">
          Save
        </Button>
    </form>
  );
};

export default RestuarentLocation;
