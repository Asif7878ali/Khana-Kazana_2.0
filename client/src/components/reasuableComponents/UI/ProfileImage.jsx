import { icons } from '@/utils/imageConstant';
import Image from 'next/image';
import React, { useRef } from 'react'

const ProfileImage = ({ image, error, handlePicChange }) => {

    const fileInputRef = useRef(null);

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };
  return (
    <span className="relative flex justify-center ">
    <Image
        src={image ? image : icons.prePic}
        alt="Profile"
        width={120} // Image width
        height={120} // Image height
        className={`rounded-full object-fill w-32 h-32 ${image || error?.profileImageUrl ? 'border-4 border-red-600' : ''}`}
    />
    <label className="absolute bottom-[-10] right-32 cursor-pointer" onClick={triggerFileInput}>
        <Image
            src={icons?.camIcon}
            alt="Upload Icon"
            width={35}
            height={35}
            className=" bg-gray-300 rounded-full p-1"
        />
    </label>
    <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handlePicChange}
    />
</span>
  )
}

export default ProfileImage