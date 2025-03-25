
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    
    return () => clearInterval(intervalId);
  }, [heroImages.length]);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Fade Transition */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-center bg-cover"
          style={{
            backgroundImage: `url(${img})`,
            opacity: currentImageIndex === index ? 1 : 0,
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center hotel-container z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto px-4"
        >
          <span className="inline-block text-gold-light font-serif text-lg md:text-xl tracking-widest mb-4">
            WELCOME TO
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            Luxury Getaway Haven
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experience unparalleled luxury and comfort at our award-winning boutique hotel,
            where every detail is crafted for your perfect escape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-sm"
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-sm"
            >
              Explore Rooms
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle">
        <span className="text-white text-sm tracking-widest mb-2">SCROLL</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
