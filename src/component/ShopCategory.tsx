import { useState } from "react";

const ShopCategories = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(0); // State untuk tombol aktif

  return (
    <div className="flex gap-3 p-2">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)} // Ubah tombol aktif saat diklik
          className={`px-6 py-2 font-bold rounded-lg transition duration-200 ${
            activeIndex === index
              ? "bg-teal-500 text-white" // Warna tombol aktif
              : "border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:bg-opacity-70 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ShopCategories;
