"use client";

import React, { useEffect, useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import Input from "@/components/reasuableComponents/Input";
import Dropdown from "@/components/reasuableComponents/Dropdown";
import FileUpload from "@/components/reasuableComponents/FileUpload";
import { Button } from "@/components/reasuableComponents/Button";
import { msg } from "@/utils/constaint";
import { bankDetailValidation } from "@/validation/authValidations";
import { ErrorsMessage } from "@/components/reasuableComponents/Errors";
import { Heading } from "@/features/auth/components/HeadingParagraph";
import { Numbers, Letters, getAuthenticatedUser } from "@/utils/helperfunction";
import useTranslator from "@/hooks/useTranslator";
import endPoint from "@/utils/endpoints";
import { useFetchApi } from "@/hooks/useFetchApi";

const page = () => {
  const [form, setForm] = useState({
    accountHolderName: "",
    accountNumber: "",
    c_accountNumber: "",
    bank: "",
    // bankDocumentUpload: "",
    ifsc: "",
  });
  const [banklist, setBanklist] = useState([]);
  const [errors, setErrors] = useState({});
  const showAlert = useAlert();
  const router = useRouter();
  const { translate } = useTranslator();
  const fetchapi = useFetchApi();

  function handleChange(e) {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === "accountHolderName") {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isvalid } = bankDetailValidation(form);
    setErrors(errors);
    if (!isvalid) {
      return;
    }

    const user = getAuthenticatedUser(showAlert, translate);
    if (!user) return;

    const payload = {
      accountHolderName: form.accountHolderName,
      accountNumber: form.accountNumber,
      bank: form.bank,
      // bankDocument: form.bankDocumentUpload,
      ifsc: form.ifsc,
    };
    console.log("data", payload);

    const response = await fetchapi({
      endpoint: endPoint.bankDetails + "/" + user?.id,
      method: "PUT",
      payload: payload,
    });
    if (!response?.data?.success) {
      showAlert(translate("error.failedSaveUserProfile"), msg.err);
    }

    showAlert(translate("long.bankDetailsSavedSuccessfully"), msg.sucs);
    router.push("/auth/VerificationDocuments");
  };

  useEffect(() => {
    const getBanks = async () => {
      try {
        const response = await fetchapi({
          endpoint: `${endPoint.getBanks}`,
        });
        const { data } = response;
        if (!data?.success) {
          showAlert(data.msg || translate("error.swt"), msg.err);
          return;
        }
        setBanklist(data?.banks || []);
      } catch (error) {
        showAlert(translate("error.ise"), msg.err);
        console.error("Signin error:", error);
      }
    };

    getBanks();
  }, []);

  return (
    <FormLayout image={images?.bank}>
      <div className="flex flex-col h-full">
        <Heading heading={translate("long.addBankDetails")} />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div id="accounholdername">
            <Input
              type="text"
              label={translate("long.accountHolderName")}
              name="accountHolderName"
              placeholder="Ex. Dash Mork"
              value={form.accountHolderName}
              onChange={handleChange}
              required
              error={
                errors?.accountHolderName
                  ? translate(errors.accountHolderName)
                  : ""
              }
            />
          </div>

          <div id="accountNumber">
            <Input
              type="text"
              label={translate("long.enterSixteenDigitAccNumber")}
              name="accountNumber"
              placeholder="12345XXXX33XX"
              maxLength="16"
              value={form.accountNumber}
              onChange={handleChange}
              copy={true}
              required
              error={
                errors?.accountNumber ? translate(errors.accountNumber) : ""
              }
            />
          </div>

          <div id="c_accountNumber">
            <Input
              type="text"
              label={translate("long.confirmAccNum")}
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
              error={
                errors?.c_accountNumber ? translate(errors.c_accountNumber) : ""
              }
            />
          </div>

          <div id="banks">
            <Dropdown
              value={form.bank}
              onChange={handleChange}
              name="bank"
              label={translate("long.selectBank")}
              placeholder={translate("sort.selectOption")}
              options={banklist}
              optionLabelKey="label"
              optionValueKey="value"
              error={errors?.bank ? translate(errors.bank) : ""}
            />
          </div>

          <div id="idsc">
            <Input
              type="text"
              label={translate("long.enterIFSCCode")}
              name="ifsc"
              placeholder="ABCD023523"
              maxLength="11"
              value={form.ifsc}
              onChange={handleChange}
              required
              error={errors?.ifsc ? translate(errors.ifsc) : ""}
            />
          </div>

          {/* <div id="bankDocumentUpload">
            <FileUpload
              label={translate("long.passbookCancelledCheque")}
              onChange={(file) => {
                setForm((prev) => ({ ...prev, bankDocumentUpload: file }));
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  bankDocumentUpload: "",
                }));
              }}
            />
            {errors && (
              <ErrorsMessage
                error={
                  errors?.bankDocumentUpload
                    ? translate(errors.bankDocumentUpload)
                    : ""
                }
              />
            )}
          </div> */}
          <Button type="submit" className="w-full" variant="primary">
            {translate("sort.save")}
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default page;
