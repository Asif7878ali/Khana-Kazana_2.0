"use client";

import { images } from "@/utils/imageConstant";
import FormLayout from "@/components/layouts/FormLayout";
import React, { useState } from "react";
import Input from "@/components/reasuableComponents/UI/Input";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import { Button } from "@/components/reasuableComponents/UI/Button";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";
import { DeleviryRadius, indianCity, indianStates } from "@/lib/homepageData";
import useAlert from "@/hooks/useAlert";
import { restuarentLocationValidation } from "@/lib/restuarentValidation";
import { msg } from "@/utils/constaint";
import { Numbers } from "@/lib/filtrations";

const page = () => {
  const [form, setForm] = useState({
    pincode: "",
    street: "",
    landmark: "",
    radius: "",
    city: "",
    state: "",
  });
  const [error, setError] = useState({});
  const showAlert = useAlert();

  function handleChange(e) {
    const { name, value } = e.target;
    if (name == "pincode") {
      const filtradValue = Numbers(value);
      setForm((prev) => ({
        ...prev,
        [name]: filtradValue,
      }));
      setError((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));

      setError((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isvalid } = restuarentLocationValidation(form);
    setError(errors);

    if (isvalid == true) {
      showAlert("Create restorent", msg.sucs);
    }
  };

  return (
    <FormLayout image={images?.restuarentLocation}>
      <div className="flex flex-col items-center justify-center h-full p-6">
        <Heading heading="Add Restaurent Location" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div id="pincode">
              <Input
                type="text"
                label="Pincode"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                maxLength="6"
                required
                error={error?.pincode}
              />
            </div>

            <div id="street">
              <Input
                type="text"
                label="Street/Flat no."
                name="street"
                value={form.street}
                onChange={handleChange}
                placeholder="Street no."
                required
                error={error?.street}
              />
            </div>

            <div id="landmark">
              <Input
                type="text"
                label="Landmark"
                name="landmark"
                value={form.landmark}
                onChange={handleChange}
                placeholder="Landmark"
              />
            </div>

            <div id="radius">
              <Dropdown
                name="radius"
                label="Select Deleviry Radius"
                value={form.radius}
                onChange={handleChange}
                options={DeleviryRadius}
                error={error?.radius}
              />
            </div>

            <div id="state">
              <Dropdown
                value={form.state}
                onChange={handleChange}
                name="state"
                label="State"
                options={indianStates}
                error={error?.state}
              />
            </div>

            <div id="city">
              <Dropdown
                value={form.city}
                onChange={handleChange}
                name="city"
                label="City"
                options={indianCity}
                error={error?.city}
              />
            </div>
          </div>
          <Button className="w-full" variant="primary">
            Save
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default page;
