
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Bath, Users, Tv, Wind } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RoomCard from '@/components/RoomCard';
import Footer from '@/components/Footer';
import RoomDetailModal from '@/components/RoomDetailModal';
import { Button } from '@/components/ui/button';

const RoomsPage = () => {
  // Room categories for filtering
  const categories = ['All', 'Standard', 'Deluxe', 'Suite', 'Presidential'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // State for room detail modal
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Room data with enhanced details
  const rooms = [
    {
      name: 'Standard Room',
      description: 'Comfortable room with all essential amenities for a pleasant stay at our hotel.',
      price: 199,
      imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      size: '300 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'TV', 'AC', 'Safe'],
      category: 'Standard',
      bedType: 'Queen Size Bed',
      view: 'City View',
      additionalFeatures: [
        'Daily housekeeping',
        'In-room safe',
        'Complimentary bottled water',
        'Wake-up service'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1511217079921-01a104e00c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Standard Room Bathroom' },
        { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Standard Room Workspace' }
      ],
      longDescription: "Our Standard Room offers comfort and functionality at an excellent value. Perfect for the business traveler or tourists on the go, this well-appointed room features a plush queen-size bed, a work desk, and all the essentials you need for a comfortable stay. The modern bathroom includes a shower with premium toiletries. Enjoy views of the city while staying connected with high-speed WiFi and entertainment on your flat-screen TV."
    },
    {
      name: 'Deluxe Room',
      description: 'Spacious room with modern amenities, perfect for couples or solo travelers seeking comfort and style.',
      price: 299,
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      size: '400 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'Breakfast', 'Bathtub', 'Smart TV'],
      category: 'Deluxe',
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
      name: 'Premium Deluxe Room',
      description: 'Enhanced deluxe room with premium furnishings and a beautiful city view from a private balcony.',
      price: 349,
      imageUrl: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      size: '450 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'Breakfast', 'Balcony', 'Minibar'],
      category: 'Deluxe',
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
      longDescription: "Our Premium Deluxe Room offers a luxurious blend of comfort and style. The spacious layout features a plush king-size bed with premium Egyptian cotton linens, ensuring a restful night's sleep. The modern bathroom includes a luxurious bathtub and premium bath amenities. Enjoy city views from your window, catch up on your favorite shows on the Smart TV, or stay connected with high-speed WiFi. A daily gourmet breakfast is included with your stay."
    },
    {
      name: 'Junior Suite',
      description: 'Elegant suite with a separate sitting area, ideal for those seeking extra space and comfort.',
      price: 399,
      imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      size: '550 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'Breakfast', 'Lounge Area', 'Bathtub'],
      category: 'Suite',
      bedType: 'Queen Size Bed',
      view: 'City View',
      additionalFeatures: [
        'Daily housekeeping',
        'In-room safe',
        'Complimentary bottled water',
        'Wake-up service'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1511217079921-01a104e00c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Junior Suite Bathroom' },
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Junior Suite View' }
      ],
      longDescription: "Our Junior Suite offers a spacious and comfortable living space. The well-appointed bathroom includes a shower with premium toiletries. Enjoy views of the city while staying connected with high-speed WiFi and entertainment on your flat-screen TV."
    },
    {
      name: 'Executive Suite',
      description: 'Elegant suite with separate living area, premium furnishings and breathtaking city views.',
      price: 499,
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      size: '650 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'Breakfast', 'Bathtub', 'Minibar'],
      category: 'Suite',
      bedType: 'King Size Bed',
      view: 'City View',
      additionalFeatures: [
        'Premium Egyptian cotton linens',
        'Complimentary welcome drink',
        'Late checkout upon availability',
        'Aromatherapy bath amenities'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Executive Suite Bathroom' },
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Executive Suite View' }
      ],
      longDescription: "Our Executive Suite offers a luxurious blend of comfort and style. The spacious layout features a plush king-size bed with premium Egyptian cotton linens, ensuring a restful night's sleep. The modern bathroom includes a luxurious bathtub and premium bath amenities. Enjoy city views from your window, catch up on your favorite shows on the Smart TV, or stay connected with high-speed WiFi. A daily gourmet breakfast is included with your stay."
    },
    {
      name: 'Family Suite',
      description: 'Spacious accommodations for the whole family with connecting rooms and child-friendly amenities.',
      price: 699,
      imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      size: '850 sq ft',
      capacity: 4,
      amenities: ['Wifi', 'Breakfast', 'Bathtub', 'Kitchen'],
      category: 'Suite',
      bedType: 'Queen Size Bed',
      view: 'City View',
      additionalFeatures: [
        'Daily housekeeping',
        'In-room safe',
        'Complimentary bottled water',
        'Wake-up service'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1511217079921-01a104e00c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Family Suite Bathroom' },
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Family Suite View' }
      ],
      longDescription: "Our Family Suite offers spacious accommodations for the whole family. The well-appointed bathroom includes a shower with premium toiletries. Enjoy views of the city while staying connected with high-speed WiFi and entertainment on your flat-screen TV."
    },
    {
      name: 'Luxury Suite',
      description: 'The epitome of luxury with sophisticated design, premium amenities, and exceptional views.',
      price: 899,
      imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      size: '950 sq ft',
      capacity: 2,
      amenities: ['Wifi', 'Breakfast', 'Jacuzzi', 'Bar'],
      category: 'Suite',
      bedType: 'King Size Bed',
      view: 'City View',
      additionalFeatures: [
        'Premium Egyptian cotton linens',
        'Complimentary welcome drink',
        'Late checkout upon availability',
        'Aromatherapy bath amenities'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Luxury Suite Bathroom' },
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Luxury Suite View' }
      ],
      longDescription: "Our Luxury Suite offers a luxurious blend of comfort and style. The spacious layout features a plush king-size bed with premium Egyptian cotton linens, ensuring a restful night's sleep. The modern bathroom includes a luxurious bathtub and premium bath amenities. Enjoy city views from your window, catch up on your favorite shows on the Smart TV, or stay connected with high-speed WiFi. A daily gourmet breakfast is included with your stay."
    },
    {
      name: 'Presidential Suite',
      description: 'Our most prestigious accommodation, offering unparalleled luxury, privacy, and personalized service.',
      price: 1299,
      imageUrl: 'https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      size: '1200 sq ft',
      capacity: 4,
      amenities: ['Wifi', 'Breakfast', 'Private Terrace', 'Butler'],
      category: 'Presidential',
      bedType: 'King Size Bed',
      view: 'City View',
      additionalFeatures: [
        'Premium Egyptian cotton linens',
        'Complimentary welcome drink',
        'Late checkout upon availability',
        'Aromatherapy bath amenities'
      ],
      additionalImages: [
        { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Presidential Suite Bathroom' },
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', alt: 'Presidential Suite View' }
      ],
      longDescription: "Our Presidential Suite offers unparalleled luxury, privacy, and personalized service. The spacious layout features a plush king-size bed with premium Egyptian cotton linens, ensuring a restful night's sleep. The modern bathroom includes a luxurious bathtub and premium bath amenities. Enjoy city views from your window, catch up on your favorite shows on the Smart TV, or stay connected with high-speed WiFi. A daily gourmet breakfast is included with your stay."
    }
  ];
  
  // Open room detail modal
  const openRoomDetail = (room: any) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };
  
  // Filter rooms based on active category
  const filteredRooms = activeCategory === 'All' 
    ? rooms 
    : rooms.filter(room => room.category === activeCategory);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury hotel room" 
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
            Rooms & Suites
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Experience exceptional comfort and elegance in our thoughtfully designed accommodations
          </motion.p>
        </div>
      </section>
      
      {/* Rooms Section */}
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
          
          {/* Room Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, index) => (
              <div key={room.name}>
                <RoomCard 
                  {...room}
                  delay={index % 3}
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
          
          {/* Empty state for when no rooms match the filter */}
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No rooms found matching the selected category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setActiveCategory('All')}
              >
                View All Rooms
              </Button>
            </div>
          )}
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
            className="max-w-xl mx-auto text-center mb-12"
          >
            <span className="text-primary font-medium tracking-widest text-sm">INCLUSIONS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">Room Amenities</h2>
            <p className="text-foreground/80 leading-relaxed">
              Every room at Luxury Haven is equipped with premium amenities to ensure a comfortable and memorable stay.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Wifi size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">High-Speed WiFi</h3>
              <p className="text-foreground/70">
                Stay connected with complimentary high-speed wireless internet throughout your stay.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Tv size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Smart TV</h3>
              <p className="text-foreground/70">
                Enjoy entertainment on our flat-screen smart TVs with premium channels and streaming services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Bath size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Luxury Bathroom</h3>
              <p className="text-foreground/70">
                Indulge in our well-appointed bathrooms with premium fixtures and designer toiletries.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Wind size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Climate Control</h3>
              <p className="text-foreground/70">
                Personalize your comfort with individually controlled air conditioning and heating.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">In-Room Dining</h3>
              <p className="text-foreground/70">
                Enjoy delicious meals in the privacy of your room with our 24-hour room service.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Housekeeping</h3>
              <p className="text-foreground/70">
                Maintain a pristine environment with our daily housekeeping and turndown service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Policies Section */}
      <section className="section-padding bg-cream">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">Policies & Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-sm shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4">Check-in/Check-out</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Check-in:</span> 3:00 PM
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Check-out:</span> 12:00 PM
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Early check-in:</span> Available upon request (subject to availability)
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Late check-out:</span> Available upon request (additional charges may apply)
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-sm shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4">Payment Information</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Deposit:</span> A valid credit card is required to secure your reservation
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Payment:</span> We accept all major credit cards, digital payments, and cash
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Currency:</span> All rates are in USD
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-sm shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4">Cancellation Policy</h3>
                <p className="text-foreground/80 mb-3">
                  Cancellations must be made at least 48 hours prior to arrival to avoid charges.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">48+ hours:</span> Full refund
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">24-48 hours:</span> 50% of the first night's charge
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Less than 24 hours:</span> Full charge for the first night
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-sm shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4">Additional Information</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Pet Policy:</span> Select rooms are pet-friendly (additional fee applies)
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Smoking:</span> All rooms are non-smoking
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Extra Bed:</span> Available upon request (additional charges apply)
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Children:</span> Children under 12 stay free when using existing bedding
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Room Detail Modal */}
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

export default RoomsPage;
