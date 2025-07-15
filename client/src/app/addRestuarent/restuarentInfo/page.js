"use client";

import React, { useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import Button from "@/components/reasuableComponents/UI/Button";
import TextArea from "@/components/reasuableComponents/UI/TextArea";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import Input from "@/components/reasuableComponents/UI/Input";
import { cuisine, foodtype } from "@/lib/homepageData";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";
import Checkbox from "@/components/reasuableComponents/UI/Checkbox";
import { restuarentInfoValidation } from "@/lib/restuarentValidation";
import { msg } from "@/utils/constaint";
import useAlert from "@/hooks/useAlert";
import { Letters } from "@/lib/filtrations";

const page = () => {
  const [form, setForm] = useState({
    resturentName: "",
    type: "",
    cuisineType: "",
    description: "",
    checked: false,
  });
  const [error, setError] = useState({});
  const showAlert = useAlert();

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    if (name === "resturentName") {
      const filtradValue = Letters(value);
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
        [name]: type === "checkbox" ? checked : value,
      }));

      setError((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isvalid } = restuarentInfoValidation(form);
    setError(errors);

    if (isvalid == true) {
      showAlert("Create restorent", msg.sucs);
    }
  };

  return (
    <FormLayout image={images.resturantLogo}>
      <div className="flex flex-col h-full">
        <Heading heading="Add Restaurent" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div id="resturentName">
            <Input
              type="text"
              label="Resturent Name"
              name="resturentName"
              value={form.resturentName}
              onChange={handleChange}
              required
              error={error?.resturentName}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div id="type">
              <Dropdown
                name="type"
                label="Type"
                value={form.type}
                onChange={handleChange}
                options={foodtype}
                error={error?.type}
              />
            </div>
            <div id="cuisine">
              <Dropdown
                name="cuisineType"
                label="Cuisine Type"
                value={form.cuisineType}
                onChange={handleChange}
                options={cuisine}
                error={error?.cuisineType}
              />
            </div>
          </div>

          <div id="description">
            <TextArea
              name="description"
              value={form.description}
              onChange={handleChange}
              label="Add Restuarent Discription"
              rows={5}
              maxlength={250}
              error={error?.description}
            />
          </div>

          <div className="checked">
            <Checkbox
              id="restoterms"
              name="checked"
              label="Is Pure Veg?"
              checked={form.checked}
              onChange={handleChange}
              error={error?.checked}
            />
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
