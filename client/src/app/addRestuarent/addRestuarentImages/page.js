"use client";

import React, { useRef, useState } from "react";
import FormLayout from "@/components/layouts/FormLayout";
import { images } from "@/utils/imageConstant";
import Icons from "@/utils/Icons";
import Modal from "@/components/reasuableComponents/UI/Modal";
import { restuarentImageCatogory } from "@/lib/homepageData";
import Dropdown from "@/components/reasuableComponents/UI/Dropdown";
import Image from "next/image";
import { BlurButton } from "@/components/reasuableComponents/UI/Button";
import ImageGalleryModal from "@/components/reasuableComponents/UI/ImageGalleryModal";

const page = () => {
  const [image, setImage] = useState({
    isModalopen: false,
    banner: null,
  });
  const [openGallary, setOpenGallay] = useState(false);
  const [pictures, setPictures] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage((prev) => ({ ...prev, banner: imageUrl }));
    }
  };

  function handleImageGallary(image) {
    const imageArray = Array.isArray(image) ? image : [image];
    setPictures(imageArray);
    setOpenGallay(true);
  }

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <FormLayout image={images.resturantLogo}>
        <div className="flex flex-col h-full">
          <h5 className="text-sm font-semibold mb-1">Add Banner Image</h5>
          <div>
            <section className="bg-neutral-100 rounded-xl h-48 flex items-center justify-center overflow-hidden relative">
              {image.banner ? (
                <>
                  <Image
                    src={image.banner}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                    fill
                    sizes="100vw"
                    priority
                  />
                  <div
                    onClick={handleEditClick}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <Icons.Edit className="size-5 text-rose-500" />
                  </div>
                  <BlurButton
                    name="View"
                    className="top-20 right-40"
                    onClick={() => handleImageGallary(image.banner)}
                  />
                </>
              ) : (
                <div className="border border-rose-500 rounded-full p-2">
                  <label className="flex gap-2 cursor-pointer">
                    <Icons.Upload className="size-5 text-rose-500" />
                    <h6 className="text-xs text-rose-500 mt-0.5">
                      Choose file
                    </h6>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      ref={fileInputRef}
                    />
                  </label>
                </div>
              )}
            </section>

            <h5 className="text-sm font-semibold mb-1 my-2">
              Add Category Images
            </h5>
            <section
              onClick={() =>
                setImage((prev) => ({ ...prev, isModalopen: true }))
              }
              className="bg-neutral-100 rounded-xl h-40 w-1/3 flex items-center justify-center overflow-hidden"
            >
              <h6 className="text-sm text-rose-500 mt-0.5 cursor-pointer">
                {" "}
                + Category
              </h6>
            </section>
          </div>
        </div>
      </FormLayout>

      {image.isModalopen && (
        <Modal
          isOpen={image.isModalopen}
          onClose={() => setImage((prev) => ({ ...prev, isModalopen: false }))}
          title="Add Catagory"
        >
          <Dropdown
            label={"Select Categories"}
            name="bank"
            options={restuarentImageCatogory}
          />
        </Modal>
      )}

      {openGallary && (
        <ImageGalleryModal
          isOpen={openGallary}
          images={pictures}
          onClose={() => setOpenGallay(false)}
        />
      )}
    </>
  );
};

export default page;
