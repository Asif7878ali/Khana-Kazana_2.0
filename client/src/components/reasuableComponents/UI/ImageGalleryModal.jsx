import Icons from "@/utils/Icons";
import { useEffect, useState } from "react";

const ImageGalleryModal = ({ 
  images = [], 
  isOpen = false, 
  onClose = () => {}, 
}) => {


const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [0]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-4 text-white">
          <div className="text-sm opacity-75">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          >
           <Icons.Cross className="size-5"/>
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative flex-1 flex items-center justify-center">
          
          {/* Previous Button */}
          <button
            onClick={previous}
            className="absolute left-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
            disabled={images.length <= 1}
          >
            <Icons.CheronLeft className="size-5" />
          </button>

          {/* Main Image */}
          <div className="relative max-w-full max-h-full">
            <img
              src={images[currentIndex]?.src || images[currentIndex]}
              alt={images[currentIndex]?.alt || `Image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
            disabled={images.length <= 1}
          >
           <Icons.CheronRight className="size-5"/>
          </button>
        </div>

        {/* Bottom Thumbnail Section */}
        <div className="p-4 bg-black/30 backdrop-blur-sm">
          <div className="flex justify-center">
            <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                    index === currentIndex 
                      ? 'border-white shadow-lg' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={image?.src || image}
                    alt={image?.alt || `Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  );
};

export default ImageGalleryModal;