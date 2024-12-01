import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('/images/image7.jpg')`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src='/images/LOGO.png' 
              alt="BHGF Logo" 
              className="mx-auto max-w-xs md:max-w-md"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The world is facing the most severe hunger crisis in history, endangering the lives of 26 million adults and children
          </h1>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <a 
              href="#aboutus" 
              className="inline-block bg-[#50c878] text-white font-semibold text-lg md:text-xl px-10 py-3 rounded-full transition duration-300 hover:bg-[#40a060] hover:scale-105 transform"
            >
              Learn More
            </a>
          </div>

          {/* Tagline */}
          <div className="mt-8">
            <p className="text-white text-xl md:text-2xl font-light italic">
              Igniting Hope, Nourishing Lives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;