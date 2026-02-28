"use client";

import React, { useRef, useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import VerifyOtp from "@/components/forms/VerifyOtp";
import { useRouter } from "next/navigation";
import { Button } from "@/components/reasuableComponents/UI/Button";
import useAlert from "@/hooks/useAlert";
import { msg } from "@/utils/constaint";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";
import useTranslator from "@/hooks/useTranslator";

const page = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const showAlert = useAlert();
  const { translate } = useTranslator();

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      showAlert(translate("error.enterOtp"), msg.warn);
      return;
    }

    // Call your verify API here
    console.log("Verifying OTP: ", otpCode);
    showAlert(translate("long.emailOtpVerifySuccessfully"), msg.sucs);
    router.push("/auth/profileSetup");
  };

  return (
    <FormLayout image={images?.email}>
      <div className="flex flex-col items-center justify-center h-full p-6">
        <Heading heading={translate("sort.verifyYourEmail")} />
        <p className="text-gray-600 mb-4">
          {translate("long.enterSixDigitOTPDentEmail")}
        </p>
        <VerifyOtp
          otp={otp}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputRefs={inputRefs}
        />

        <p className="my-3">
          {translate("sort.didntGetIt")}?{" "}
          <span className="underline cursor-pointer text-red-500">
            {translate("sort.resendCode")}
          </span>
        </p>

        <Button
          className="w-full cursor-pointer"
          variant="primary"
          onClick={handleSubmit}
        >
          {translate("sort.verify")}
        </Button>
      </div>
    </FormLayout>
  );
};

export default page;
