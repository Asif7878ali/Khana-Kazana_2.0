"use client";

import React, { useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
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
import { isValidFileType, Letters, Numbers } from "@/lib/filtrations";
import { Heading } from "@/components/reasuableComponents/HeadingParagraph";
import { useFetchApi } from "@/hooks/useFetchApi";
import endPoint from "@/utils/endpoints";
import Icons from "@/utils/Icons";
import { imageUploadSingle } from "@/utils/imageUpload";
import { useDispatch } from "react-redux";

const Page = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    number: "",
    dob: "",
    gender: "",
  });
  const [selectedImage, setSelectedImage] = useState({
    file: null,
    preview: null,
  });
  const today = new Date().toISOString().split("T")[0];
  const [error, setError] = useState({});
  const showAlert = useAlert();
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchapi = useFetchApi();

  function handleChange(e) {
    const { name, value } = e.target;

    let filteredValue = value;
    // Allow only letters, apostrophes, and hyphens for fname and lname
    if (name === "fname" || name === "lname") {
      filteredValue = Letters(value);
    }
    // // Allow only digits and limit to 10 characters for number
    if (name === "number") {
      filteredValue = Numbers(value).slice(0, 10);
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

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isValidFileType(file)) {
      showAlert(
        "Please upload a PNG, JPG, or JPEG file, Upto 5mb Size",
        msg.err
      );
      setSelectedImage({ file: null, preview: null });
      return;
    }

    if (selectedImage.preview) {
      URL.revokeObjectURL(selectedImage.preview);
    }

    setSelectedImage({
      file,
      preview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isvalid } = profileValidate(form);
    setError(errors);
    if (!isvalid) {
      return;
    }

    const user_id = sessionStorage.getItem("user");
    // Check if user data exists
    if (!user_id) {
      showAlert("User ID not found", msg.err);
      return;
    }

    const imgresponce = await imageUploadSingle(selectedImage.file, dispatch);
    console.log(imgresponce);

    if (!imgresponce?.data?.success) {
      showAlert("Image Upload Failed Due to Internal Server Error", msg.err);
    }

    const { id } = JSON.parse(user_id);

    let payload = {
      profilePic: imgresponce?.data?.url,
      firstName: form.fname,
      lastName: form.lname,
      phoneNumber: form.number,
      dob: form.dob,
      gender: form.gender,
    };

    try {
      const response = await fetchapi({
        endpoint: endPoint.profile + "/" + id,
        method: "PUT",
        payload: payload,
      });
      if (!response?.data?.success) {
        showAlert("Failed to Save User Profile", msg.err);
      }
      showAlert(response?.data?.msg || "Profile Saved Successfully", msg.sucs);
      router.push("/auth/verifyMobile");
    } catch (error) {
      showAlert("Internal Server Error", msg.err);
      console.error("Updated error:", error);
    }
  };

  return (
    <FormLayout image={images?.profileImage}>
      <div className="flex flex-col items-center justify-center h-full p-6">
        <Heading heading="Profile Setup" />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full border-4 border-red-200 overflow-hidden bg-red-50 hover:border-red-400 transition-all duration-300 group-hover:shadow-xl">
                {selectedImage.preview ? (
                  <img
                    src={selectedImage.preview}
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Icons.AddUser className="size-16 text-red-300 group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                )}
              </div>
              {/* Upload Overlay */}
              <div className="absolute inset-0 rounded-full bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                <Icons.Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
              </div>
              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
              />
            </div>
            {error && <ErrorsMessage error={error?.profilePic} />}
            <p className="mt-1 text-red-600 font-medium">
              Click to upload image
            </p>
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
