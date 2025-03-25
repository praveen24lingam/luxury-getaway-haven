
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Image categories
  const categories = ['All', 'Rooms', 'Dining', 'Amenities', 'Exterior'];
  
  // Gallery images
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Luxury hotel lobby',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Swimming pool',
      category: 'Amenities'
    },
    {
      src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Luxury suite',
      category: 'Rooms'
    },
    {
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Deluxe room',
      category: 'Rooms'
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Restaurant',
      category: 'Dining'
    },
    {
      src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Hotel exterior',
      category: 'Exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Bathroom',
      category: 'Rooms'
    },
    {
      src: 'https://images.unsplash.com/photo-1534679541758-8f1671eac460?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      alt: 'Hotel facade',
      category: 'Exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Spa',
      category: 'Amenities'
    },
    {
      src: 'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Fine dining',
      category: 'Dining'
    },
    {
      src: 'https://images.unsplash.com/photo-1630660114925-04775483a2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Cocktail bar',
      category: 'Dining'
    },
    {
      src: 'https://images.unsplash.com/photo-1604709178692-6ebbd6a3c088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Presidential suite',
      category: 'Rooms'
    },
    {
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      alt: 'Standard room',
      category: 'Rooms'
    },
    {
      src: 'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Restaurant interior',
      category: 'Dining'
    },
    {
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      alt: 'Fitness center',
      category: 'Amenities'
    }
  ];
  
  // Filter images based on active category
  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);
  
  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore the beauty and elegance of Luxury Haven
          </motion.p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section-padding bg-cream">
        <div className="hotel-container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-sm transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden aspect-square rounded-sm shadow-md cursor-pointer group"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
