"use client";

import React, { useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import Input from "@/components/reasuableComponents/UI/Input";
import { securityquestion } from "@/lib/homepageData";
import Button from "@/components/reasuableComponents/UI/Button";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { msg } from "@/utils/constaint";
import { securityQuestionValidation } from "@/lib/authValidations";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";


const Page = () => {
  const [form, setForm] = useState({
    que1: "",
    ans1: "",
    que2: "",
    ans2: "",
    que3: "",
    ans3: "",
  });
  const [errors, setErrors] = useState({});
  const showAlert = useAlert();
  const router = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isvalid } = securityQuestionValidation(form);
    setErrors(errors);

    const payload = [
      {
        questionId: form.que1,
        answer: form.ans1,
      },
      {
        questionId: form.que2,
        answer: form.ans2,
      },
      {
        questionId: form.que3,
        answer: form.ans3,
      },
    ];

    console.log("ans", payload);
    if (isvalid == true) {
      showAlert("Answer Saved Successfully", msg.sucs);
      router.push("/auth/bankDetails");
    }
  };

  return (
    <FormLayout image={images?.securityImage}>
      <div className="flex flex-col ">
          <Heading heading="Add Security Questions" />
        <p className="text-xs text-gray-700 my-1 mx-3">
          In case you forget your password or contact customer support, choose 3
          security questions. Make sure your answers are memorable.
        </p>
        <form className="space-y-2 w-full" onSubmit={handleSubmit}>
          <div id="question1">
            <Dropdown
              value={form.que1}
              onChange={handleChange}
              name="que1"
              options={securityquestion}
              classNameInput="h-14"
              error={errors?.que1}
            />
          </div>

          <div id="answer1">
            <Input
              type="text"
              name="ans1"
              placeholder="Answer 1"
              value={form.ans1}
              onChange={handleChange}
              required
              error={errors?.ans1}
            />
          </div>

          <div is="question2">
            <Dropdown
              value={form.que2}
              onChange={handleChange}
              name="que2"
              options={securityquestion}
              classNameInput="h-14"
              error={errors?.que2}
            />
          </div>

          <div id="answer2">
            <Input
              type="text"
              name="ans2"
              placeholder="Answer 2"
              value={form.ans2}
              onChange={handleChange}
              required
              error={errors?.ans2}
            />
          </div>

          <div is="question3">
            <Dropdown
              value={form.que3}
              onChange={handleChange}
              name="que3"
              options={securityquestion}
              classNameInput="h-14"
               error={errors?.que3}
            />
          </div>

          <div id="answer3">
            <Input
              type="text"
              name="ans3"
              placeholder="Answer 3"
              value={form.ans3}
              onChange={handleChange}
              required
              error={errors?.ans3}
            />
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer mt-3"
            variant="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default Page;
