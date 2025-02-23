import React from 'react';

const HeroAbout = () => {
  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "/image/image.png" }}
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Konten Teks */}
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 animate-fade-in-down">
          Discover the Beauty of Nature
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
          Explore breathtaking landscapes and immerse yourself in the wonders of the natural world. 
          From majestic mountains to serene beaches, find your perfect escape with us.
        </p>
        
        <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg 
          hover:bg-white/20 transition-all duration-300 border border-white/30 
          hover:border-white/50 text-lg font-medium">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HeroAbout;

