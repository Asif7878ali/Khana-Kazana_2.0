"use client";
import FormLayout from "@/components/layouts/FormLayout";
import React, { useState } from "react";
import Login from "../../components/forms/Login";
import Signin from "../../components/forms/Signin";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import { images } from "@/utils/imageConstant";
import useTranslator from "@/hooks/useTranslator";

const Page = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [selectedRole, setSelectedRole] = useState("");
  const {translate} = useTranslator();
  const roleOptions = [
    { id: "c1", value: "customer", label: "Customer" },
    { id: "v1", value: "vendor", label: "Vendor" },
  ];

  console.log('wgwe', roleOptions)

  return (
    <FormLayout image={images?.auth}>
      <h1 className="text-xl md:text-3xl flex gap-3 font-bold text-center mb-6 tracking-tight">
      {translate('sort.welcomeTo')}
        <div className="flex items-baseline mt-1">
          <p className="font-mono text-sm md:text-2xl textgray8">{translate('sort.khana')}</p>
          <span className="textRose italic text-sm ml-1">{translate('sort.kazana')}</span>
        </div>
      </h1>

   
        {/* Role Dropdown */}
        <Dropdown
          name="role"
          options={roleOptions}
          onChange={(e) => setSelectedRole(e.target.value)}
          classNameInput="bg-transparent"
        />

        {/* Tabs */}
        <div className="flex justify-center border-b borderStone mb-8">
          <button
            className={`w-1/2 py-3 text-lg font-medium transition-colors duration-200 cursor-pointer ${
              activeTab === "login"
                ? "border-b-2 borderRose"
                : "textgray6 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("login")}
          >
          {translate('sort.login')}
          </button>
          <button
            className={`w-1/2 py-3 text-lg font-medium transition-colors duration-200 cursor-pointer ${
              activeTab === "signup"
                ? "border-b-2 borderRose"
                : "textgray6 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("signup")}
          >
              {translate('sort.signUp')}
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === "login" ? (
            <Login role={selectedRole} />
          ) : (
            <Signin role={selectedRole} />
          )}
        </div>
    </FormLayout>
  );
};

export default Page;
