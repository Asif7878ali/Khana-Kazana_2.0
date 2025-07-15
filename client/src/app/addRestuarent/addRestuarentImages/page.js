"use client";

import React from 'react'
import FormLayout from "@/components/layouts/FormLayout";
import { images } from '@/utils/imageConstant'
import RestoImages from '@/components/forms/RestoImages';

const page = () => {
  return (
   <FormLayout image={images.resturantLogo}>
      <div className="flex flex-col h-full">
        <h5 className='text-sm font-semibold mb-1'>Add Banner Image</h5>
        <RestoImages/>
      </div>
    </FormLayout>
  )
}

export default page