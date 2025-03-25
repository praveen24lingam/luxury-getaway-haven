import { motion } from 'framer-motion';
import { useState } from 'react';
import { Wifi, Utensils, Dumbbell, Car, Bath, Coffee } from 'lucide-react';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import RoomCard from '@/components/RoomCard';
import AmenityCard from '@/components/AmenityCard';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import RoomDetailModal from '@/components/RoomDetailModal';
import { Button } from '@/components/ui/button';

const Index = () => {
  // State for room detail modal
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Room data with enhanced details
  const rooms = [
    {
      name: 'Deluxe Room',
      description: 'Spacious room with modern amenities, perfect for couples or solo travelers seeking comfort and style.',
      price: 299,
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      size: '400 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'Breakfast', 'Bathtub', 'Smart TV'],
      bedType: 'King Size Bed',
      view: 'City View',
      additionalFeatures: [
        'Premium Egyptian cotton linens',
        'Complimentary welcome drink',
        'Late checkout upon availability',
        'Aromatherapy bath amenities'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Deluxe Room Bathroom' },
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Deluxe Room View' }
      ],
      longDescription: "Our Deluxe Room offers a perfect blend of comfort and elegance. The spacious layout features a plush king-size bed with premium Egyptian cotton linens, ensuring a restful night's sleep. The modern bathroom includes a luxurious bathtub and premium bath amenities. Enjoy city views from your window, catch up on your favorite shows on the Smart TV, or stay connected with high-speed WiFi. A daily gourmet breakfast is included with your stay."
    },
    {
      name: 'Executive Suite',
      description: 'Elegant suite with separate living area, premium furnishings and breathtaking city views.',
      price: 499,
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      size: '650 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'Breakfast', 'Bathtub', 'Minibar'],
      bedType: 'Super King Size Bed',
      view: 'Panoramic City View',
      additionalFeatures: [
        'Dedicated work area with desk',
        'Espresso machine',
        'Separate living room area',
        'Evening turndown service',
        'Complimentary pressing of two garments'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Executive Suite Living Area' },
        { url: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80', alt: 'Executive Suite Bathroom' }
      ],
      longDescription: "The Executive Suite is designed for the discerning traveler who desires space and luxury. This expansive suite features a separate living area with premium furnishings, a super king-size bed, and a spacious marble bathroom with a deep soaking tub. Enjoy breathtaking panoramic city views, a fully stocked minibar, and an espresso machine for your morning coffee. The dedicated work area makes it ideal for business travelers, while the elegant design and upscale amenities ensure a memorable stay."
    },
    {
      name: 'Family Suite',
      description: 'Spacious accommodations for the whole family with connecting rooms and child-friendly amenities.',
      price: 699,
      imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      size: '850 sq ft',
      capacity: 4,
      amenities: ['Wifi', 'Breakfast', 'Bathtub', 'Kitchen'],
      bedType: '1 King Bed & 2 Single Beds',
      view: 'Garden View',
      additionalFeatures: [
        'Child-friendly amenities and toys',
        'Kitchenette with microwave',
        'PlayStation or Xbox on request',
        'Family movie library',
        "Children's welcome pack"
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', alt: 'Family Suite Second Room' },
        { url: 'https://images.unsplash.com/photo-1584132905271-512c958d674a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', alt: 'Family Suite Kitchen' }
      ],
      longDescription: "Our Family Suite is the perfect choice for families seeking comfort and convenience. The thoughtfully designed space includes a master bedroom with a king-size bed and a separate room with two single beds, ensuring everyone has their own space. The suite features a kitchenette equipped with a microwave and essential cookware, making it easy to prepare simple meals. Children will be delighted with age-appropriate welcome packs and the option to request gaming consoles. The suite overlooks our beautiful garden, providing a peaceful environment for your family vacation."
    }
  ];

  // Open room detail modal
  const openRoomDetail = (room: any) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  // Amenity data
  const amenities = [
    {
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed wireless internet throughout the hotel.',
      icon: <Wifi size={24} />
    },
    {
      title: 'Fine Dining',
      description: 'Experience exquisite cuisine at our award-winning restaurant featuring local and international dishes.',
      icon: <Utensils size={24} />
    },
    {
      title: 'Fitness Center',
      description: 'Maintain your fitness routine with our state-of-the-art equipment and personal trainers.',
      icon: <Dumbbell size={24} />
    },
    {
      title: 'Spa Services',
      description: 'Relax and rejuvenate with our premium spa treatments and therapeutic massages.',
      icon: <Bath size={24} />
    },
    {
      title: 'Airport Shuttle',
      description: 'Enjoy convenient transportation to and from the airport with our luxury shuttle service.',
      icon: <Car size={24} />
    },
    {
      title: 'Breakfast Included',
      description: 'Start your day right with our complimentary gourmet breakfast buffet with made-to-order options.',
      icon: <Coffee size={24} />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <span className="text-primary font-medium tracking-widest text-sm">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">A Sanctuary of Luxury & Comfort</h2>
            <p className="text-foreground/80 leading-relaxed">
              Nestled in the heart of the city, Luxury Haven redefines hospitality with its
              impeccable service, stunning accommodations, and world-class amenities. 
              Every aspect of our hotel is designed to provide an unforgettable experience
              for our distinguished guests.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-muted p-6 rounded-sm text-center"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Prime Location</h3>
              <p className="text-foreground/70 text-sm">
                Situated in the most prestigious area, with easy access to landmarks, shopping, and entertainment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted p-6 rounded-sm text-center"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Personalized Service</h3>
              <p className="text-foreground/70 text-sm">
                Our dedicated staff ensures every aspect of your stay exceeds expectations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-muted p-6 rounded-sm text-center"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Exquisite Design</h3>
              <p className="text-foreground/70 text-sm">
                Immerse yourself in elegant architecture and meticulously crafted interiors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section className="section-padding bg-cream">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <span className="text-primary font-medium tracking-widest text-sm">ACCOMMODATIONS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">Luxurious Rooms & Suites</h2>
            <p className="text-foreground/80 leading-relaxed">
              Experience the height of comfort in our elegantly appointed rooms and suites,
              designed to provide a tranquil retreat for our discerning guests.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {rooms.map((room, index) => (
              <div key={room.name}>
                <RoomCard 
                  {...room}
                  delay={index}
                />
                <div className="mt-3 flex justify-center">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    onClick={() => openRoomDetail(room)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              href="/rooms"
              className="inline-block text-primary font-medium hover:text-primary/80 transition-colors"
            >
              View All Rooms →
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section className="section-padding bg-white">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <span className="text-primary font-medium tracking-widest text-sm">FEATURES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">Hotel Amenities</h2>
            <p className="text-foreground/80 leading-relaxed">
              Enjoy our comprehensive range of premium services and facilities,
              designed to enhance your stay and provide ultimate comfort.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {amenities.map((amenity, index) => (
              <AmenityCard 
                key={amenity.title}
                {...amenity}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="relative py-20 overflow-hidden" data-section="booking">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury hotel pool" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        
        <div className="relative z-10 hotel-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-light font-medium tracking-widest text-sm">RESERVATIONS</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6 text-white">Reserve Your Perfect Stay</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Experience the height of luxury and comfort by booking your stay today.
                Our reservation system ensures a seamless process to secure your ideal
                accommodations.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white/80">
                  <svg className="h-5 w-5 text-gold-light mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best Rate Guarantee
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="h-5 w-5 text-gold-light mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Flexible Cancellation Options
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="h-5 w-5 text-gold-light mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No Hidden Fees
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="h-5 w-5 text-gold-light mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 Customer Support
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding bg-cream">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <span className="text-primary font-medium tracking-widest text-sm">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">What Our Guests Say</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-sm shadow-md relative"
            >
              <div className="text-gold text-4xl absolute -top-4 left-6">"</div>
              <p className="text-foreground/80 italic mb-6 pt-4">
                An absolutely stunning hotel with impeccable service. The attention to detail
                is remarkable, and the staff went above and beyond to make our stay memorable.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Guest" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-foreground/60">New York, USA</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-sm shadow-md relative"
            >
              <div className="text-gold text-4xl absolute -top-4 left-6">"</div>
              <p className="text-foreground/80 italic mb-6 pt-4">
                We celebrated our anniversary here and couldn't have chosen a better place.
                The suite was exquisite, the dining experience was world-class, and the spa treatments were rejuvenating.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Guest" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Michael & Lisa Thompson</h4>
                  <p className="text-sm text-foreground/60">London, UK</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-sm shadow-md relative"
            >
              <div className="text-gold text-4xl absolute -top-4 left-6">"</div>
              <p className="text-foreground/80 italic mb-6 pt-4">
                As a frequent business traveler, I've stayed at many luxury hotels, but this one
                stands out for its seamless blend of modern amenities and traditional hospitality.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/68.jpg" 
                    alt="Guest" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">David Chen</h4>
                  <p className="text-sm text-foreground/60">Singapore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {selectedRoom && (
        <RoomDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          room={selectedRoom}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
