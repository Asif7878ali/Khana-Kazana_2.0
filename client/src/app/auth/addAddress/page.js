"use client";
import React, { useEffect, useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import { Button } from "@/components/reasuableComponents/UI/Button";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import Input from "@/components/reasuableComponents/UI/Input";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { msg } from "@/utils/constaint";
import { ErrorsMessage } from "@/components/reasuableComponents/Errors";
import { addAdressValidate } from "@/lib/authValidations";
import { Numbers } from "@/lib/filtrations";
import TextArea from "@/components/reasuableComponents/UI/TextArea";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";
import { useFetchApi } from "@/hooks/useFetchApi";
import endPoint from "@/utils/endpoints";
import useTranslator from "@/hooks/useTranslator";

const page = () => {
  const [form, setForm] = useState({
    zip: "",
    house: "",
    street: "",
    area: "",
    landmark: "",
    state: "",
    city: "",
  });
  const [userRole, setUserRole] = useState(null);
  const [statelist, setStatelist] = useState([]);
  const [citylist, setCitylist] = useState([]);
  const [errors, setErrors] = useState({});
  const showAlert = useAlert();
  const router = useRouter();
  const fetchapi = useFetchApi();
  const { translate } = useTranslator();

  const getState = async () => {
    try {
      const response = await fetchapi({
        endpoint: endPoint.getStates,
      });
      const { data } = response;
      if (!data?.success) {
        showAlert(data.msg || translate("error.swt"), msg.err);
        return;
      }
      setStatelist(data?.state);
    } catch (error) {
      showAlert(translate("error.ise"), msg.err);
      console.error("Signin error:", error);
    }
  };

  const getCity = async (stateCode) => {
    try {
      const response = await fetchapi({
        endpoint: `${endPoint.getCity}/${stateCode}`,
      });
      const { data } = response;
      if (!data?.success) {
        showAlert(data.msg || translate("error.swt"), msg.err);
        return;
      }
      setCitylist(data?.cities);
    } catch (error) {
      showAlert(translate("error.ise"), msg.err);
      console.error("Signin error:", error);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    let filteredValue = value;
    // Allow only digits
    if (name === "zip") {
      filteredValue = Numbers(value).slice(0, 6);
    }
    setForm((prev) => ({ ...prev, [name]: filteredValue }));
    if (name == "state") {
      getCity(value);
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isvalid } = addAdressValidate(form);
    setErrors(errors);

    const payload = {
      zip: form.zip,
      house: form.house,
      street: form.street,
      area: form.area,
      landmark: form.landmark,
      state: form.state,
      city: form.city,
    };

    console.log("data", payload);
    if (isvalid === true) {
      if (userRole === "vendor") {
        showAlert(translate("long.addressSavedSuccessfully"), msg.sucs);
        router.push("/auth/securityQuestion");
      } else {
        showAlert(translate("long.addressSavedSuccessfully"), msg.sucs);
        router.push("/misc/dashboard");
      }
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("user");
    setUserRole(role);
    getState();
  }, []);

  return (
    <FormLayout image={images?.house}>
      <div className="flex flex-col">
        <Heading heading={translate("sort.addYourAddress")} />
        <form onSubmit={handleSubmit}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div id="zip">
                <Input
                  type="text"
                  label={translate("sort.pincodeZIPCode")}
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  error={errors?.zip ? translate(errors.zip) : ""}
                />
              </div>
              <div id="house">
                <Input
                  type="text"
                  label={translate("sort.houseFlatNo")}
                  name="house"
                  value={form.house}
                  onChange={handleChange}
                  required
                  error={errors?.house ? translate(errors.house) : ""}
                />
              </div>
            </div>

            <div id="street" className="mt-2">
              <TextArea
                name="street"
                type="text"
                label={translate("sort.street")}
                maxlength={50}
                rows={3}
                value={form.street}
                onChange={handleChange}
                error={errors?.street ? translate(errors.street) : ""}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div id="area">
                <Input
                  type="text"
                  label={translate("sort.areaSector")}
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  error={errors?.area ? translate(errors.area) : ""}
                  required
                />
              </div>

              <div id="landmark">
                <Input
                  type="text"
                  label={translate("sort.landmark")}
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
                  label={translate("sort.state")}
                  placeholder={translate('sort.selectOption')}
                  options={statelist}
                  optionValueKey="code"
                  optionLabelKey="name"
                  error={errors?.state ? translate(errors.state) : ""}
                />
              </div>

              <div id="city">
                <Dropdown
                  value={form.city}
                  onChange={handleChange}
                  name="city"
                  label={translate("sort.city")}
                  placeholder={translate('sort.selectOption')}
                  options={citylist}
                  optionValueKey="name"
                  optionLabelKey="name"
                  error={errors?.city ? translate(errors.city) : ""}
                />
              </div>
            </div>
          </div>
          <Button className="w-full cursor-pointer mt-3" variant="primary">
            {translate("sort.save")}
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default page;
