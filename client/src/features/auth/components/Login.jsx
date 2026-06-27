import React, { useState } from "react";
import Input from "@/components/reasuableComponents/Input";
import { Button } from "@/components/reasuableComponents/Button";
import useTranslator from "@/hooks/useTranslator";
import { useFetchApi } from "@/hooks/useFetchApi";
import endPoint from "@/utils/endpoints";
import { getAuthenticatedUser } from "@/utils/helperfunction";
import useAlert from "@/hooks/useAlert";
import { msg } from "@/utils/constaint";

const Login = ({ role }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { translate } = useTranslator();
  const fetchapi = useFetchApi();
  const showAlert = useAlert();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    console.log("data", payload);

    const user = getAuthenticatedUser(showAlert, translate);
    if (!user) return;

    try {
      const response = await fetchapi({
        endpoint: endPoint.login,
        method: "POST",
        payload: payload,
      });
      if (!response?.data?.success) {
        showAlert(translate("error.failedLogin"), msg.err);
      }

      showAlert(translate("long.loginSuccessful"), msg.sucs);
      // router.push("/auth/securityQuestion");
    } catch (error) {
      console.error("❌ Login Error:", error);
      showAlert(translate("error.failedLogin"), msg.err);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="LoginForm">
      <div className="flex flex-col gap-4">
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
    </form>
  );
};

export default Login;
