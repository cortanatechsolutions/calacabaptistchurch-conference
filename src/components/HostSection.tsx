import React, { useState } from "react";

interface BibleStudy {
  name: string;
  description: string;
}

interface HostSectionProps {
  churchName: string;
  churchLogo: string;
  churchDescription: string;
  churchDescription2: string;
  churchDescription3: string;
  mission: string;
  vision: string;
  bibleStudies: BibleStudy[];
  galleryImages: string[]; // New prop for gallery images
}

const HostSection: React.FC<HostSectionProps> = ({
  churchName,
  churchLogo,
  churchDescription,
  churchDescription2,
  churchDescription3,
  mission,
  vision,
  bibleStudies,
  galleryImages, // Gallery images passed as a prop
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative bg-deepPurple text-white py-16 px-6 lg:px-20">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 font-cinzel">
          Know Your Host
        </h2>

        {/* Flex Container for Images and Description */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 mb-16">
          {/* Image Column */}
          <div className="flex flex-col items-center space-y-8">
            {/* Church Logo */}
            <div className="max-w-xs flex-shrink-0 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src={churchLogo}
                alt={churchName}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Church Description, Mission, Vision */}
          <div className="max-w-2xl text-center lg:text-left space-y-6 lg:ml-8">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              {churchDescription}
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              {churchDescription2}
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              {churchDescription3}
            </p>
          </div>
        </div>

        {/* Mission and Vision in a 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-purple-300 font-cinzel">
              Mission
            </h4>
            <p className="text-lg md:text-xl leading-relaxed">{mission}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-purple-300 font-cinzel">
              Vision
            </h4>
            <p className="text-lg md:text-xl leading-relaxed">{vision}</p>
          </div>
        </div>

        {/* Gallery Images in responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Popup for larger image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="relative max-w-screen-sm max-h-screen">
              <img
                src={selectedImage}
                alt="Popup"
                className="w-full h-auto rounded-lg shadow-xl transform transition-transform duration-300 scale-70"
              />
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 text-black text-xl md:text-2xl font-bold hover:text-red-500 transition-colors"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Bible Studies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bibleStudies.map((study, index) => (
            <div
              key={index}
              className="p-8 bg-purple-800 bg-opacity-80 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-90"
            >
              <h5 className="text-xl font-bold mb-2 text-purple-200 font-cinzel">
                {study.name}
              </h5>
              <p className="text-lg leading-relaxed">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostSection;
