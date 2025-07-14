
import React, { useState } from "react";
import Input from "../reasuableComponents/UI/Input";
import Button from "../reasuableComponents/UI/Button";

const Login = ({ role }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    registrationNumber: "", // For vendor registration number
  });
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {role === "customer" ? (
        <>
          <Input
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <Button className="w-full cursor-pointer" variant="primary">
            Log in
          </Button>
          <p className="text-sm text-center">Forgot Password?</p>
        </>
      ) : (
        <>
          <Input
            type="text"
            label="Registration Number"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Enter Number"
            maxLength={8} 
            pattern="[0-9]*" 
            inputMode="numeric"
            required
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <Button className="w-full cursor-pointer" variant="primary">
            Log in
          </Button>
          <p className="text-sm text-center">Forgot Password?</p>
        </>
      )}
    </form>
  );
};

export default Login;
