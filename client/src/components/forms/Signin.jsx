import React, { useState } from "react";
import Input from "../reasuableComponents/UI/Input";
import useAlert from "@/hooks/useAlert";
import { msg } from "@/utils/constaint";
import { useRouter } from "next/navigation";
import Checkbox from "../reasuableComponents/UI/Checkbox";
import { signInValidation } from "@/lib/authValidations";
import Password from "../reasuableComponents/UI/Password";
import { Button } from "../reasuableComponents/UI/Button";
import { useFetchApi } from "@/hooks/useFetchApi";
import endPoint from "@/utils/endpoints";
import useTranslator from "@/hooks/useTranslator";

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
  const fetchapi = useFetchApi();
  const { translate } = useTranslator();

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
      showAlert(translate("error.selectRole"), msg.warn);
      return;
    }

    const collectform = {
      role,
      email: formData.email,
      password: formData.password,
    };

    if (isvalid == true) {
      try {
        const response = await fetchapi({
          endpoint: endPoint.signin,
          method: "POST",
          payload: collectform,
        });

        const { data } = response;

        if (!data?.success) {
          showAlert(data.msg || translate('error.swt'), msg.err);
          return;
        }

        sessionStorage.setItem("user", JSON.stringify(data.user));
        showAlert(data?.msg || translate('long.signSuccessfully'), msg.sucs);
        router.push("/auth/verifyEmail");
      } catch (error) {
        showAlert(translate('error.ise'), msg.err);
        console.error("Signin error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div id="email">
        <Input
          type="email"
          name="email"
          label={translate("sort.email")}
          placeholder={translate("sort.enterEmail")}
          required
          value={formData.email}
          onChange={handleChange}
          error={errors?.email ? translate(errors.email) : ""}
        />
      </div>

      <div id="password">
        <Password
          name="password"
          label={translate("sort.password")}
          placeholder={translate("sort.enterPassword")}
          required
          value={formData.password}
          onChange={handleChange}
          copy={true}
          error={errors?.password ? translate(errors.password) : ""}
          tooltip={true}
          hints={true}
        />
      </div>

      <div id="c_password">
        <Password
          name="c_password"
          label={translate("sort.confirmPassword")}
          placeholder={translate("sort.confirmYourPassword")}
          required
          value={formData.c_password}
          onChange={handleChange}
          paste={true}
          error={errors?.c_password ? translate(errors.c_password) : ""}
          originalPass={formData.password}
          confirmPassMatch={true}
        />
      </div>

      <div className="checked">
        <Checkbox
          id="terms"
          name="checked"
          label={translate("long.acceptOurTermsCondition")}
          checked={formData.checked}
          onChange={handleChange}
          error={errors?.checked ? translate(errors.checked) : ""}
        />
      </div>

      <Button className="w-full cursor-pointer" variant="primary">
        {translate("sort.signUp")}
      </Button>
      <p className="text-sm  text-center">{translate("long.alreadyAccount")}</p>
    </form>
  );
};

export default Signin;
