import React, { useState } from "react";
import Input from "../reasuableComponents/UI/Input";
import { Button } from "../reasuableComponents/UI/Button";
import useTranslator from "@/hooks/useTranslator";

const Login = ({ role }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    registrationNumber: "", // For vendor registration number
  });
  const { translate } = useTranslator();

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "registrationNumber") {
      const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      if (numericValue.length <= 8) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: formData.email,
      password: formData.password,
      ...(role === "vendor" && {
        registrationNumber: formData.registrationNumber,
      }), // Include number only for vendors
      role,
    };
    console.log("data", payload);
  };

  return (
    <form onSubmit={handleSubmit} id="LoginForm">
      {role === "customer" ? (
        <div id="customer" className="flex flex-col gap-4">
          <Input
            type="email"
            label={translate("sort.email")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translate("sort.enterEmail")}
            required
          />
          <Input
            type="password"
            label={translate("sort.password")}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={translate("sort.enterPassword")}
            required
          />
          <Button className="w-full cursor-pointer" variant="primary">
            {translate("sort.login")}
          </Button>
          <p className="text-sm text-center">
            {translate("sort.forgot")} {translate("sort.password")}?
          </p>
        </div>
      ) : (
        <div id="vender" className="flex flex-col gap-4">
          <Input
            type="text"
             label={`${translate("sort.registration")} ${translate("sort.number")}`}
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder={translate("sort.enterRegistrationNumber")}
            maxLength={8}
            pattern="[0-9]*"
            inputMode="numeric"
            required
          />
          <Input
            type="email"
            label={translate("sort.email")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translate("sort.enterEmail")}
            required
          />
          <Input
            type="password"
            label={translate("sort.password")}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={translate("sort.enterPassword")}
            required
          />
          <Button className="w-full cursor-pointer" variant="primary">
            {translate("sort.login")}
          </Button>
          <p className="text-sm text-center">
            {translate("sort.forgot")} {translate("sort.password")}?
          </p>
        </div>
      )}
    </form>
  );
};

export default Login;
