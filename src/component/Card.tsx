import { useState } from "react";
import { IconShoppingCart } from "@tabler/icons-react";

const Card = ({ id, name, description, images, price, colors, onAddToCart }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id, selectedIndex);
    }
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-white space-10 rounded-lg shadow-gray-300 shadow-lg overflow-hidden max-w-xs w-full text-left">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={currentImage} alt={name} className="w-full h-[300px] object-cover" />
      </div>
      <div className="p-3">
        <h2 className="min-md:text-md font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <p className="min-md:text-md font-bold text-black-600 mt-1">Rp {price.toLocaleString()}</p>
        
        {/* add to cart*/}
        <div className="mt-4 flex justify-end">
            <button
            className="flex items-center border rounded border-gray-300 p-2"
            onClick={handleAddToCart}
          >
            Add To <IconShoppingCart size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
