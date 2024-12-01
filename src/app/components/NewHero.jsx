import React, { useEffect } from 'react';

function NewHero() {
  useEffect(() => {
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString() + '+';
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'mealsCounter') animateValue(entry.target, 0, 2500000, 2000);
          if (entry.target.id === 'livesCounter') animateValue(entry.target, 0, 500000, 2000);
          if (entry.target.id === 'volunteersCounter') animateValue(entry.target, 0, 10000, 2000);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[id$="Counter"]').forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <div className="font-['Inter']">
      {/*<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img
                  className="h-12 w-auto"
                  src="https://img.freepik.com/free-photo/volunteers-preparing-boxes-with-food-donations-using-tablet_23-2148732714.jpg?t=st=1733057767~exp=1733061367~hmac=099d4f90d56cd0b3d2827232fcbd87b37bd3481d969aca74a25390df9057de83&w=740"
                  alt="FoodCare"
                />
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-custom font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-custom font-medium">Programs</a>
              <a href="#" className="text-gray-700 hover:text-custom font-medium">Get Involved</a>
              <button className="!rounded-button bg-[#50c878] text-white px-6 py-2.5 font-semibold hover:bg-[#50c878]/90 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>*/}

      <main className="">
        <section className="relative h-[800px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://img.freepik.com/free-photo/volunteers-preparing-boxes-with-food-donations-using-tablet_23-2148732714.jpg?t=st=1733057767~exp=1733061367~hmac=099d4f90d56cd0b3d2827232fcbd87b37bd3481d969aca74a25390df9057de83&w=740"
              className="w-full h-full object-cover"
              alt="Community Food Distribution"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>

          <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                
            <div className="max-w-4xl mx-auto space-y-6">
          {/* Logo */}
          <div className="mb-8 hidden md:block">
            <img 
              src='/images/LOGO.png' 
              alt="BHGF Logo" 
              className="max-w-xs md:max-w-md"
            />
          </div>
          </div>

              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">Fighting Hunger Together</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join us in our mission to ensure no one goes to bed hungry. Through community partnerships and
                dedicated volunteers, we're making a difference one meal at a time.
              </p>
              <div className="flex space-x-4">
                <button className="!rounded-button bg-[#50c878] text-white px-8 py-4 font-semibold text-lg hover:bg-[#50c878]/90 transition-colors">
                  Donate Now
                </button>
                <button className="!rounded-button bg-white text-custom px-8 py-4 font-semibold text-lg hover:bg-gray-50 transition-colors">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>

 

    
      </main>
    </div>
  );
}

export default NewHero;
