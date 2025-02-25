import { IconCircleCheckFilled } from '@tabler/icons-react';
import React from 'react';

const HeroAbout = () => {
  return (
    <>

      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed"
        style={{ backgroundImage: "url('https://www.eileenfisher.com/on/demandware.static/-/Sites-ef-Library/default/dwabd488b6/foundation/landingpage/foundationplus-landing-desktop.jpg')" }}
      >
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Konten Teks */}
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
            What is second soul
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
            Di second soul,kami percaya bahwa fashion bukan hanya tentang gaya, tetapi juga tentang dampak. Itulah mengapa kami menghadirkan koleksi fashion eksklusif yang dibuat dari pakaian bekas yang telah kehilangan fungsinya—mengubahnya menjadi karya baru yang penuh karakter dan keberlanjutan.
          </p>

          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg 
        hover:bg-white/20 transition-all duration-300 border border-white/30 
        hover:border-white/50 text-lg font-medium">
            Explore More
          </button>
        </div>
        
      </div>
    </>


  );
};

export default HeroAbout;

