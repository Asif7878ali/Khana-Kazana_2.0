"use client";
import React, { useEffect, useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import Button from "@/components/reasuableComponents/UI/Button";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import Input from "@/components/reasuableComponents/UI/Input";
import { indianCity, indianStates } from "@/lib/homepageData";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { msg } from "@/utils/constaint";
import { ErrorsMessage } from "@/components/reasuableComponents/Errors";
import { addAdressValidate } from "@/lib/authValidations";
import { Numbers } from "@/lib/filtrations";
import TextArea from "@/components/reasuableComponents/UI/TextArea";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";

const page = () => {
  const [form, setForm] = useState({
    zip: "",
    house: "",
    street: "",
    area : "",
    landmark: "",
    state: "",
    city: "",
  });
  const [userRole, setUserRole] = useState("");
  const [errors, setErrors] = useState({});
  const showAlert = useAlert();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    let filteredValue = value;
    // Allow only digits
    if (name === "zip") {
      filteredValue = Numbers(value).slice(0, 6);
    }
    setForm((prev) => ({ ...prev, [name]: filteredValue }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isvalid } = addAdressValidate(form);
    setErrors(errors);

    const payload = {
      zip: form.zip,
      house: form.house,
      street: form.street,
      area : form.area,
      landmark: form.landmark,
      state: form.state,
      city: form.city,
    };

    console.log("data", payload);
    if (isvalid === true) {
      if (userRole === "vendor") {
        showAlert("Address Saved Successfully", msg.sucs);
        router.push("/auth/securityQuestion");
      } else {
        showAlert("Address Saved Successfully", msg.sucs);
        router.push("/misc/dashboard");
      }
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("user");
    setUserRole(role);
  }, []);

  return (
    <FormLayout image={images?.house}>
      <div className="flex flex-col">
        <Heading heading="Add Your Address" />
        <form onSubmit={handleSubmit}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div id="zip">
                <Input
                  type="text"
                  label="Pincode/ZIP Code"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  error={errors?.zip}
                />
              </div>
              <div id="house">
                <Input
                  type="text"
                  label="House/Flat No."
                  name="house"
                  value={form.house}
                  onChange={handleChange}
                  required
                  error={errors?.house}
                />
              </div>
            </div>

            <div id="street" className="mt-2">
             
              <TextArea
                 name="street"
                  type="text"
                label="Street"
                maxlength={50}
                rows={3}
                 value={form.street}
                onChange={handleChange}
                 error={errors?.street}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              
               <div id="area">
                <Input
                  type="text"
                  label="Area/Sector"
                  placeholder='Street Address'
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                   error={errors?.area}
                  required
                />
              </div>

              <div id="landmark">
                <Input
                  type="text"
                  label="Landmark"
                  name="landmark"
                  value={form.landmark}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div id="state">
                <Dropdown
                  value={form.state}
                  onChange={handleChange}
                  name="state"
                  label="State"
                  options={indianStates}
                  error={errors?.state}
                />
              </div>

              <div id="city">
                <Dropdown
                  value={form.city}
                  onChange={handleChange}
                  name="city"
                  label="City"
                  options={indianCity}
                  error={errors?.city}
                />
              </div>
            </div>
          </div>
          <Button className="w-full cursor-pointer mt-3" variant="primary">
            Save
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default page;
