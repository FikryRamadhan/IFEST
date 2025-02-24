import { useState } from "react";

const Card = ({ name, description, images, hoverImages, price, colors }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = () => {
    if (hoverImages && hoverImages[selectedIndex]) {
      setCurrentImage(hoverImages[selectedIndex]);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setCurrentImage(images[selectedIndex]);
    setIsHovered(false);
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setCurrentImage(images[index]);
  };

  const handleHover = (index) => {
    setHoverIndex(index);
    setCurrentImage(images[index]);
  };

  const handleHoverLeave = () => {
    setHoverIndex(null);
    setCurrentImage(images[selectedIndex]);
  };

  return (
    <div className="bg-white shadow-lg overflow-hidden max-w-sm text-left">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {currentImage && <img src={currentImage} alt={name} className="w-full h-full object-cover" />}
        {isHovered && (
          <div className="absolute bottom-0 left-0 w-full bg-gray-200 bg-opacity-50 text-black text-center py-2">
            Buy Now
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <p className="text-lg font-bold text-black-600 mt-2">Rp {price.toLocaleString()}</p>
        
        {/* Warna Selector */}
        <div className="flex gap-2 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 transition ${selectedIndex === index ? 'border-black' : 'border-transparent'} ${colors[index]}`}
              onClick={() => handleSelect(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleHoverLeave}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
