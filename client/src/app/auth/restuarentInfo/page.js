"use client";

import React from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import RestoInfo from "@/components/forms/RestoInfo";

const page = () => {
  return (
    <FormLayout image={images.resturantLogo}>
      <div className="flex flex-col items-center justify-center h-full p-6">
        <h2 className="text-sm md:text-2xl font-semibold mb-2">Add Restaurent</h2>
         <RestoInfo/>
      </div>
    </FormLayout>
  );
};

export default page;
