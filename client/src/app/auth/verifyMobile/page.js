"use client";

import React, { useRef, useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import VerifyOtp from "@/components/forms/VerifyOtp";
import { useRouter } from "next/navigation";
import useAlert from "@/hooks/useAlert";
import { msg } from "@/utils/constaint";
import { Button } from "@/components/reasuableComponents/UI/Button";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";

const page = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const showAlert = useAlert();

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
      showAlert("Please Enter Opt", msg.warn);
      return;
    }

    // Call your verify API here
    console.log("Verifying OTP: ", otpCode);
    showAlert("Mobile Otp Verify Successfully", msg.sucs);
    router.push("/auth/addAddress");
  };

  return (
    <FormLayout image={images?.mobile}>
      <div className="flex flex-col items-center justify-center h-full p-6">
         <Heading heading="Verify Mobile OTP" />
        <p className="text-gray-600 mb-4">
          We have sent the verification OTP to your Mobile
        </p>
        <VerifyOtp
          otp={otp}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputRefs={inputRefs}
        />

        <p className="my-3">
          Didn't get it?{" "}
          <span className="underline cursor-pointer text-red-500">
            Resend the Code
          </span>
        </p>

        <Button
          className="w-full cursor-pointer"
          variant="primary"
          onClick={handleSubmit}
        >
          Verify
        </Button>
      </div>
    </FormLayout>
  );
};

export default page;
