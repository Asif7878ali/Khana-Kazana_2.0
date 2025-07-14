import React, { useState } from "react";
import Input from "../reasuableComponents/UI/Input";
import Button from "../reasuableComponents/UI/Button";
import useAlert from "@/hooks/useAlert";
import { msg } from "@/utils/constaint";
import { useRouter } from "next/navigation";
import Checkbox from "../reasuableComponents/UI/Checkbox";
import { signInValidation } from "@/lib/authValidations";
import Password from "../reasuableComponents/UI/Password";


const Signin = ({ role }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    c_password: "",
    checked: false,
  });
  const [errors, setErrors] = useState({});
  const showAlert = useAlert();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isvalid } = signInValidation(formData);
    setErrors(errors);

    if (!role) {
      showAlert("Please Select a Role", msg.warn);
      return;
    }

    const payload = {
      email: formData.email,
      password: formData.password,
      c_password: formData.c_password,
      checked: formData.checked,
      role,
    };
    localStorage.setItem("user", role);
    console.log("data", payload);

    if (isvalid == true) {
      showAlert("Profile Succesfully Create", msg.sucs);
      router.push("/auth/verifyEmail");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div id="email">
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter E-mail"
          required
          value={formData.email}
          onChange={handleChange}
          error={errors?.email}
        />
      </div>

      <div id="password">
        <Password
          name="password"
          label="Password"
          placeholder="Enter Your Password"
          required
          value={formData.password}
          onChange={handleChange}
          copy={true}
          error={errors?.password}
          tooltip = {true}
          hints ={true}
        />
      </div>

      <div id="c_password">
        <Password
          name="c_password"
          label="Confirm Password"
          placeholder="Confirm Your Password"
          required
          value={formData.c_password}
          onChange={handleChange}
          paste={true}
          error={errors?.c_password}
          originalPass={formData.password}
          confirmPassMatch = {true}
        />
      </div>

      <div className="checked">
        <Checkbox
          id="terms"
          name="checked"
          label="Accept Our Terms & Condition"
          checked={formData.checked}
          onChange={handleChange}
          error={errors?.checked}
        />
      </div>

      <Button className="w-full cursor-pointer" variant="primary">
        Sign in
      </Button>
      <p className="text-sm  text-center">Already have an account?</p>
    </form>
  );
};

export default Signin;
