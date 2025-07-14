"use client";

import React, { useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import Input from "@/components/reasuableComponents/UI/Input";
import FileUpload from "@/components/reasuableComponents/UI/FileUpload";
import Button from "@/components/reasuableComponents/UI/Button";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { msg } from "@/utils/constaint";
import { ErrorsMessage } from "@/components/reasuableComponents/Errors";
import { verificationDocumentValidation } from "@/lib/authValidations";
import { Numbers } from "@/lib/filtrations";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";

const page = () => {
  const [form, setForm] = useState({
    aadhar: "",
    c_aadhar: "",
    aadharfile: "",
    pancard: "",
    c_pancard: "",
    pancardfile: "",
    fssai: "",
    fssaifile: "",
    c_fssai: "",
    gst: "",
    c_gst: "",
  });
  const [errors, setErrors] = useState({});
  const showAlert = useAlert();
  const router = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;
    let filteredValue = value;
    //filter values
    if (name === "aadhar" || name === "fssai") {
      filteredValue = Numbers(value);
    } else if (name === "pancard" || name === "gst") {
      filteredValue = value.toUpperCase();
    }

    setForm((prev) => ({ ...prev, [name]: filteredValue }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isvalid } = verificationDocumentValidation(form);
    setErrors(errors);

    const payload = {
      aadhar: form.aadhar,
      aadharfile: form.aadharfile,
      pancard: form.pancard,
      pancardfile: form.pancardfile,
      fssai: form.fssai,
      fssaifile: form.fssaifile,
      gst: form.gst,
    };
    console.log("data", payload);

    if (isvalid == true) {
      showAlert("Documents Saved Succesfully", msg.sucs);
      router.push("/misc/dashboard");
    }
  };

  return (
    <FormLayout image={images?.documets}>
      <div className="flex flex-col items-center justify-center h-full p-6">
        <Heading heading="Upload Documents" />
        <form className="space-y-2 w-full" onSubmit={handleSubmit}>
          <div id="aadhar">
            <Input
              type="text"
              label="Addhar Card"
              name="aadhar"
              placeholder="1122334455667788"
              value={form.aadhar}
              onChange={handleChange}
              copy={true}
              maxLength="12"
              required
              error={errors?.aadhar}
            />
          </div>

          <div id="c_aadhar">
            <Input
              type="text"
              label="Confirm Aadhar Card"
              name="c_aadhar"
              placeholder="Enter Aadhar Number"
              value={form.c_aadhar}
              onChange={handleChange}
              confirmInputMatch={true}
              matchingVal="Aadhar Number"
              originalInput={form.aadhar}
              paste={true}
              maxLength="12"
              required
              error={errors?.c_aadhar}
            />
          </div>
          <div id="aaahardocument">
            <FileUpload
              label="Addhar Card"
              onChange={(file) => {
                setForm((prev) => ({ ...prev, aadharfile: file }));
                setErrors((prev) => ({ ...prev, aadharfile: "" }));
              }}
            />
            {errors && <ErrorsMessage error={errors?.aadharfile} />}
          </div>

          <div id="pancard">
            <Input
              type="text"
              label="PanCard"
              name="pancard"
              placeholder="ABCDE1234F"
              value={form.pancard}
              onChange={handleChange}
              copy={true}
              maxLength="10"
              required
              error={errors?.pancard}
            />
          </div>

          <div id="c_pancard">
            <Input
              type="text"
              label="Confirm PanCard"
              name="c_pancard"
              placeholder="Enter Pancard Number"
              value={form.c_pancard}
              onChange={handleChange}
              paste={true}
              confirmInputMatch={true}
              matchingVal="Pancard Number"
              originalInput={form.pancard}
              maxLength="10"
              required
              error={errors?.c_pancard}
            />
          </div>

          <div id="pancarddocument">
            <FileUpload
              label="Pan Card"
              onChange={(file) => {
                setForm((prev) => ({ ...prev, pancardfile: file }));
                setErrors((prev) => ({ ...prev, pancardfile: "" }));
              }}
            />
            {errors && <ErrorsMessage error={errors?.pancardfile} />}
          </div>

          <div id="fssai">
            <Input
              type="text"
              label="Fssai Number"
              name="fssai"
              placeholder="1122367788"
              value={form.fssai}
              onChange={handleChange}
              copy={true}
              maxLength="14"
              required
              error={errors?.fssai}
            />
          </div>

          <div id="c_fssai">
            <Input
              type="text"
              label="Confirm Fssai"
              name="c_fssai"
              placeholder="Enter Fssai Number"
              value={form.c_fssai}
              onChange={handleChange}
              paste={true}
              confirmInputMatch={true}
              matchingVal="Fssai Number"
              originalInput={form.fssai}
              maxLength="14"
              required
              error={errors?.c_fssai}
            />
          </div>

          <div id="fssaidocument">
            <FileUpload
              label="Fssai"
              onChange={(file) => {
                setForm((prev) => ({ ...prev, fssaifile: file }));
                setErrors((prev) => ({ ...prev, fssaifile: "" }));
              }}
            />
            {errors && <ErrorsMessage error={errors?.fssaifile} />}
          </div>

          <div id="gst">
            <Input
              type="text"
              label="GST"
              name="gst"
              placeholder="22ABCDE1234F1Z5"
              value={form.gst}
              onChange={handleChange}
              copy={true}
              required
              maxLength="15"
              error={errors?.gst}
            />
          </div>

          <div id="c_gst">
            <Input
              type="text"
              label="Confirm GST Number"
              name="c_gst"
              placeholder="Enter GST Number"
              value={form.c_gst}
              onChange={handleChange}
              paste={true}
              confirmInputMatch={true}
              matchingVal="GST Number"
              originalInput={form.gst}
              required
              maxLength="15"
              error={errors?.c_gst}
            />
          </div>

          <Button type="submit" className="w-full" variant="primary">
            Save
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default page;
