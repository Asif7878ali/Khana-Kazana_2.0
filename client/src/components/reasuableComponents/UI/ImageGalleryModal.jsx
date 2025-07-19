import Icons from "@/utils/Icons";
import { useEffect, useState } from "react";
import { NavigationButton } from "./Button";

const ImageGalleryModal = ({
  images = [],
  isOpen = false,
  onClose = () => {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  debugger;
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [0]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          if (currentIndex > 0) {
            previous();
          }
          break;

        case "ArrowRight":
          next();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-4">
          <div className="text-sm opacity-75 text-white">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white cursor-pointer hover:bg-gray-50 text-black  rounded-full transition-colors duration-200"
          >
            <Icons.Cross className="size-5" />
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Previous Button */}
          <NavigationButton
            direction="left"
            onClick={previous}
            disabled={currentIndex == 0}
          />

          {/* Main Image */}
          <div className="relative max-w-full max-h-full">
            <img
              src={images[currentIndex]?.src || images[currentIndex]}
              alt="images"
              className="h-96 w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next Button */}
          <NavigationButton direction="right" onClick={next} />
        </div>

        {/* Bottom Thumbnail Section */}
        <div className="bg-transparent">
          <div className="flex justify-center">
            <div className="flex gap-2 overflow-x-auto max-w-full pb-2 no-scrollbar">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 size-16 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                    index === currentIndex
                      ? "border-white shadow-lg"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <img
                    src={image?.src || image}
                    alt="imagesthumnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};

export default ImageGalleryModal;
