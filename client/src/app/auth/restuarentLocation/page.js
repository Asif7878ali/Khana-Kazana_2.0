"use client";

import { images } from '@/utils/imageConstant'
import FormLayout from "@/components/layouts/FormLayout";
import React from 'react'
import RestuarentLocation from '@/components/forms/RestuarentLocation';

const page = () => {
  return (
    <FormLayout image={images?.restuarentLocation} >
     <div className="flex flex-col items-center justify-center h-full p-6">
        <h2 className="text-sm lg:text-2xl font-semibold mb-2">Add Restaurent Location</h2>
          <RestuarentLocation/>
      </div>
    </FormLayout>
  )
}

export default page