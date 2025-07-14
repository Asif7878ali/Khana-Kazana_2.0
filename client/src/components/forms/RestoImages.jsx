import Icons from "@/utils/Icons";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Modal from "../reasuableComponents/UI/Modal";
import Dropdown from "../reasuableComponents/UI/Dropdown";
import { restuarentImageCatogory } from "@/lib/homepageData";

const RestoImages = () => {
  const [image, setImage] = useState({
    isModalopen: false,
    banner: null,
  });
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage((prev) => ({ ...prev, banner: imageUrl }));
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
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
            </>
          ) : (
            <div className="border border-rose-500 rounded-full p-2">
              <label className="flex gap-2 cursor-pointer">
                <Icons.Upload className="size-5 text-rose-500" />
                <h6 className="text-xs text-rose-500 mt-0.5">Choose file</h6>
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

        <h5 className="text-sm font-semibold mb-1 my-2">Add Category Images</h5>
        <section  onClick={() => setImage(prev => ({ ...prev, isModalopen: true }))}
         className="bg-neutral-100 rounded-xl h-40 w-1/3 flex items-center justify-center overflow-hidden">
          <h6 className="text-sm text-rose-500 mt-0.5 cursor-pointer" >  + Category</h6>
        </section>
      </div>

      <Modal
        isOpen={image.isModalopen}
        onClose={() => setImage(prev => ({ ...prev, isModalopen: false }))}
        title="Add Catagory"
      >
         <Dropdown
          // value={form.bank}
          // onChange={handleChange}
          label={'Select Categories'}
          name="bank"
          options={restuarentImageCatogory}
        />
      </Modal>
    </>
  );
};

export default RestoImages;
