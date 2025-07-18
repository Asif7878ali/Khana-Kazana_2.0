"use client";

import React, { useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import ProfileImage from "@/components/reasuableComponents/UI/ProfileImage";
import Input from "@/components/reasuableComponents/UI/Input";
import { Button } from "@/components/reasuableComponents/UI/Button";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { msg } from "@/utils/constaint";
import RadioButton from "@/components/reasuableComponents/UI/RadioGroup";
import { genderOption } from "@/lib/homepageData";
import Calendar from "@/components/reasuableComponents/UI/Calender";
import { profileValidate } from "@/lib/authValidations";
import { ErrorsMessage } from "@/components/reasuableComponents/Errors";
import { Letters, Numbers } from "@/lib/filtrations";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";

const Page = () => {
  const [form, setForm] = useState({
    profilePic: "",
    fname: "",
    lname: "",
    number: "",
    dob: "",
    gender: "",
  });
  const today = new Date().toISOString().split("T")[0];
  const [error, setError] = useState({});
  const showAlert = useAlert();
  const router = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;

    let filteredValue = value;
    // Allow only letters, apostrophes, and hyphens for fname and lname
    if (name === "fname" || name === "lname") {
      filteredValue = Letters(value);
    }
    // // Allow only digits and limit to 10 characters for number
    if (name === "number") {
      filteredValue = Numbers(value).slice(0,10);
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: filteredValue,
    }));
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function handlePicChange(e) {
    const file = e.target.files[0];
    const maxFileSize = 5 * 1024 * 1024;
    if (file) {
      if (file.size > maxFileSize) {
        console.log("Max image size is up to 5MB");
        setError((prev) => ({
          ...prev,
          profileImageUrl: "Image size should be less than 5MB",
        }));
        return;
      }
    }

    const imageUrl = URL.createObjectURL(file);
    setForm((prev) => ({
      ...prev,
      profilePic: imageUrl,
      profileFile: file,
    }));
    setError((prev) => ({ ...prev, profileImageUrl: "" }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isvalid } = profileValidate(form);
    setError(errors);

    const payload = {
      profilePic: form.profilePic,
      firstName: form.fname,
      lastName: form.lname,
      phoneNumber: form.number,
      dob: form.dob,
      gender: form.gender,
    };

    console.log("Submitting payload:", payload);
    if (isvalid == true) {
      showAlert("Profile Created Successfully", msg.sucs);
      router.push("/auth/verifyMobile");
    }
  };

  return (
    <FormLayout image={images?.profileImage}>
      <div className="flex flex-col items-center justify-center h-full p-6">
         <Heading heading="Profile Setup" />
        <form onSubmit={handleSubmit}>
          <div id="profilepic">
            <ProfileImage
              image={form.profilePic}
              handlePicChange={handlePicChange}
              error={error}
            />
            {error && <ErrorsMessage error={error?.profilePic} />}
          </div>

          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div id="fname">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={form.fname}
                  onChange={handleChange}
                  required
                  error={error?.fname}
                />
              </div>

              <div id="lname">
                <Input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={form.lname}
                  onChange={handleChange}
                  required
                  error={error?.lname} 
                />
              </div>
            </div>

            <div id="number">
              <Input
                type="tel"
                placeholder="Phone Number"
                name="number"
                value={form.number}
                onChange={handleChange}
                required
                error={error?.number}
              />
            </div>

            <div id="dob">
              <Calendar
                name="dob"
                placeholder="Date of Birth"
                value={form.dob}
                onChange={handleChange}
                max={today}
                error={error?.dob}
              />
            </div>

            <div id="gender">
              <div className="flex flex-row gap-3">
                {genderOption.map((option) => (
                  <RadioButton
                    key={option.id}
                    id={`gender-${option.id}`}
                    name="gender"
                    value={option.value}
                    checked={form.gender === option.value}
                    onChange={handleChange}
                    label={option.label}
                    required
                  />
                ))}
              </div>
              {error && <ErrorsMessage error={error?.gender} />}
            </div>

            <Button type="submit" className="w-full" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </FormLayout>
  );
};

export default Page;
