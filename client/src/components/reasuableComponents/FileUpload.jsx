"use client";
import React, { useState } from "react";

const FileUpload = ({ label, onChange }) => {
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const maxSizeMB = 5;
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setError("");
    setPreviewUrl(null);

    if (file) {
      // Validate file type
      if (!allowedTypes.includes(file.type)) {
        setError("Please upload only JPG, PNG, or PDF files");
        return;
      }

      // Validate file size
      if (file.size > maxSizeBytes) {
        setError(`File size exceeds ${maxSizeMB}MB limit`);
        return;
      }

      // ✅ Set image preview for images only
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      }

      // Pass the file to parent
      onChange(file);
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl p-3 bg-[repeating-linear-gradient(45deg,_#fdbdbd,_transparent_100px)]">
      <div className="flex justify-between items-center">
        <label className="text-xs" htmlFor={label}>
          {label}
        </label>
        <div className="relative">
          <input
            type="file"
            id={label}
            accept="image/jpeg,image/png,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor={label}
            className="bg-rose-600 text-xs text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-rose-700 hover:shadow-lg transition-colors"
          >
            Upload
          </label>
        </div>
      </div>

      {/* ✅ Show image preview */}
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="max-w-[150px] max-h-[150px] border border-gray-300 rounded mt-2"
        />
      )}

      {/* Show error */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default FileUpload;
