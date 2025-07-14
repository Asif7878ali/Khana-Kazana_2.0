"use client";

import React, { useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import Input from "@/components/reasuableComponents/UI/Input";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import FileUpload from "@/components/reasuableComponents/UI/FileUpload";
import Button from "@/components/reasuableComponents/UI/Button";
import { banks } from "@/lib/homepageData";
import { msg } from "@/utils/constaint";
import { bankDetailValidation } from "@/lib/authValidations";
import { ErrorsMessage } from "@/components/reasuableComponents/Errors";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";
import { Letters, Numbers } from "@/lib/filtrations";

const page = () => {
  const [form, setForm] = useState({
    acountHolderName: "",
    accountNumber: "",
    c_accountNumber: "",
    bank: "",
    bankDocumentUpload: "",
    ifsc: "",
  });
  const [errors, setErrors] = useState({});
  const showAlert = useAlert();
  const router = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === "acountHolderName") {
      filteredValue = Letters(value);
    } else if (name === "accountNumber") {
      filteredValue = Numbers(value);
    } else if (name === "ifsc") {
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

    const { errors, isvalid } = bankDetailValidation(form);
    setErrors(errors);

    const payload = {
      acountHolderName: form.acountHolderName,
      accountNumber: form.accountNumber,
      bank: form.bank,
      bankDocumentUpload: form.bankDocumentUpload,
      ifsc: form.ifsc,
    };
    console.log("data", payload);

    if (isvalid == true) {
      showAlert("Bank Details Saved Successfully", msg.sucs);
      router.push("/auth/VerificationDocuments");
    }
  };

  return (
    <FormLayout image={images?.bank}>
      <div className="flex flex-col  h-full">
        <Heading heading="Add Bank Details" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div id="accounholdername">
            <Input
              type="text"
              label="Account Holder Name"
              name="acountHolderName"
              placeholder="Ex. Dash Mork"
              value={form.acountHolderName}
              onChange={handleChange}
              required
              error={errors?.acountHolderName}
            />
          </div>

          <div id="accountNumber">
            <Input
              type="text"
              label="Enter 16 Digit Account Number"
              name="accountNumber"
              placeholder="12345XXXX33XX"
              maxLength="16"
              value={form.accountNumber}
              onChange={handleChange}
              copy={true}
              required
              error={errors?.accountNumber}
            />
          </div>

          <div id="c_accountNumber">
            <Input
              type="text"
              label="Confirm Account Number"
              name="c_accountNumber"
              placeholder="Enter A/c no."
              maxLength="16"
              value={form.c_accountNumber}
              onChange={handleChange}
              paste={true}
              confirmInputMatch={true}
              matchingVal="Bank Account Number"
              originalInput={form.accountNumber}
              required
              error={errors?.c_accountNumber}
            />
          </div>

          <div id="banks">
            <Dropdown
              value={form.bank}
              onChange={handleChange}
              name="bank"
              label="Select Bank"
              options={banks}
              error={errors?.bank}
            />
          </div>

          <div id="idsc">
            <Input
              type="text"
              label="Enter IFSC Code"
              name="ifsc"
              placeholder="ABCD023523"
              maxLength="11"
              value={form.ifsc}
              onChange={handleChange}
              required
              error={errors?.ifsc}
            />
          </div>

          <div id="bankDocumentUpload">
            <FileUpload
              label="Passbook/Cancelled cheque"
              onChange={(file) => {
                setForm((prev) => ({ ...prev, bankDocumentUpload: file }));
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  bankDocumentUpload: "",
                }));
              }}
            />
            {errors && <ErrorsMessage error={errors?.bankDocumentUpload} />}
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
