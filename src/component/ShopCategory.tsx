import { useState } from "react";

const ShopCategories = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(0); // State untuk tombol aktif

  return (
    <div className="flex gap-3 p-2">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)} // Ubah tombol aktif saat diklik
          className={`px-3 py-0.5 font-bold transition duration-200 ${
            activeIndex === index
              ? " text-black border-b border-black" // Warna tombol aktif
              : " text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ShopCategories;
