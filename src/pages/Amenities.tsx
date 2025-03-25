
import { motion } from 'framer-motion';
import { Wifi, Utensils, Dumbbell, Bath, Car, Coffee, Waves, Clock, GlassWater } from 'lucide-react';
import Navbar from '@/components/Navbar';
import AmenityCard from '@/components/AmenityCard';
import Footer from '@/components/Footer';

const AmenitiesPage = () => {
  // Amenity data
  const amenities = [
    {
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed wireless internet throughout the hotel.',
      icon: <Wifi size={24} />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Our state-of-the-art fiber optic network provides seamless connectivity in all areas of the hotel, including guest rooms, public spaces, and even our outdoor areas. Perfect for both leisure and business travelers.'
    },
    {
      title: 'Fine Dining',
      description: 'Experience exquisite cuisine at our award-winning restaurant featuring local and international dishes.',
      icon: <Utensils size={24} />,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Our restaurant is led by acclaimed Chef Michel Laurent, whose innovative approach to modern cuisine has earned us several culinary awards. Open for breakfast, lunch, and dinner, we offer a diverse menu featuring locally sourced ingredients and international favorites.'
    },
    {
      title: 'Fitness Center',
      description: 'Maintain your fitness routine with our state-of-the-art equipment and personal trainers.',
      icon: <Dumbbell size={24} />,
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Open 24/7, our fitness center features the latest cardio and strength training equipment from TechnoGym. Professional trainers are available for personal sessions, and complimentary fitness classes are offered daily, including yoga, pilates, and HIIT workouts.'
    },
    {
      title: 'Spa Services',
      description: 'Relax and rejuvenate with our premium spa treatments and therapeutic massages.',
      icon: <Bath size={24} />,
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Our tranquil spa retreat offers a range of treatments inspired by both Western and Eastern techniques. From aromatherapy massages to advanced facial treatments, our skilled therapists customize each service to meet your specific needs. The spa also features a sauna, steam room, and relaxation lounge.'
    },
    {
      title: 'Swimming Pool',
      description: 'Enjoy our stunning infinity pool with panoramic views and dedicated poolside service.',
      icon: <Waves size={24} />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Our heated infinity pool offers breathtaking views of the city skyline and is open year-round. Comfortable loungers, cabanas, and attentive poolside service ensure a relaxing experience. A separate children\'s pool is available for younger guests.'
    },
    {
      title: 'Airport Shuttle',
      description: 'Enjoy convenient transportation to and from the airport with our luxury shuttle service.',
      icon: <Car size={24} />,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Our complimentary airport shuttle service runs every hour from 6 AM to 11 PM. Luxurious vehicles ensure a comfortable journey, and our professional drivers are known for their punctuality and courtesy. Advance booking is recommended.'
    },
    {
      title: 'Breakfast Included',
      description: 'Start your day right with our complimentary gourmet breakfast buffet with made-to-order options.',
      icon: <Coffee size={24} />,
      image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Our extensive breakfast buffet features a variety of international options, from continental classics to local specialties. Made-to-order stations offer fresh omelets, waffles, and more. Special dietary requirements can be accommodated with advance notice.'
    },
    {
      title: 'Room Service',
      description: 'Enjoy delicious meals in the privacy of your room with our 24-hour room service.',
      icon: <Clock size={24} />,
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
      details: 'Available 24 hours a day, our room service menu offers a carefully curated selection of dishes from our restaurant. Special packages for romantic dinners or celebrations can be arranged with our concierge team.'
    },
    {
      title: 'Cocktail Bar',
      description: 'Unwind at our elegant cocktail bar with handcrafted beverages and premium spirits.',
      icon: <GlassWater size={24} />,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      details: 'Our stylish bar features an extensive collection of spirits and innovative signature cocktails created by our expert mixologists. Live music performances are featured on select evenings, creating the perfect ambiance for relaxation or socializing.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury hotel amenities" 
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
            Hotel Amenities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover our range of services designed to enhance your stay
          </motion.p>
        </div>
      </section>
      
      {/* Amenities Overview */}
      <section className="section-padding bg-cream">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center mb-12"
          >
            <span className="text-primary font-medium tracking-widest text-sm">FEATURES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">Exceptional Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              Enjoy our comprehensive range of premium services and facilities,
              designed to enhance your stay and provide ultimate comfort.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {amenities.map((amenity, index) => (
              <AmenityCard 
                key={amenity.title}
                title={amenity.title}
                description={amenity.description}
                icon={amenity.icon}
                delay={index % 3}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Amenities Details */}
      <section className="bg-white">
        {amenities.map((amenity, index) => (
          <div 
            key={amenity.title}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
          >
            <div className="hotel-container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-4">
                      {amenity.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold">{amenity.title}</h2>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {amenity.details}
                  </p>
                  <ul className="space-y-3">
                    {Array(3).fill(0).map((_, i) => (
                      <li key={i} className="flex items-center text-foreground/70">
                        <svg className="h-5 w-5 text-primary mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <img 
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-sm shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      {/* Additional Services */}
      <section className="section-padding bg-navy text-white">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center mb-16"
          >
            <span className="text-gold-light font-medium tracking-widest text-sm">EXTRAS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6 text-white">Additional Services</h2>
            <p className="text-white/80 leading-relaxed">
              Elevate your stay with our premium additional services, designed to make your experience truly exceptional.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-light p-6 rounded-sm border border-gold/20"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold-light">Concierge Services</h3>
              <p className="text-white/70 mb-4">
                Our dedicated concierge team is available 24/7 to assist with any request, from dinner reservations to organizing special experiences.
              </p>
              <p className="text-sm text-white/50">Contact: concierge@luxuryhaven.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-navy-light p-6 rounded-sm border border-gold/20"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold-light">Valet Parking</h3>
              <p className="text-white/70 mb-4">
                Enjoy the convenience of our valet parking service, available for hotel guests at a daily rate of $25.
              </p>
              <p className="text-sm text-white/50">Available 24 hours</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-navy-light p-6 rounded-sm border border-gold/20"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold-light">Business Center</h3>
              <p className="text-white/70 mb-4">
                Our fully equipped business center offers workstations, printing services, and private meeting rooms for your professional needs.
              </p>
              <p className="text-sm text-white/50">Open: 7 AM - 10 PM</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-navy-light p-6 rounded-sm border border-gold/20"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold-light">Childcare Services</h3>
              <p className="text-white/70 mb-4">
                Professional childcare is available upon request, allowing parents to enjoy some time alone while ensuring children are well cared for.
              </p>
              <p className="text-sm text-white/50">Advance booking required</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-navy-light p-6 rounded-sm border border-gold/20"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold-light">Laundry & Dry Cleaning</h3>
              <p className="text-white/70 mb-4">
                Keep your wardrobe fresh with our same-day laundry and dry cleaning services, available for all hotel guests.
              </p>
              <p className="text-sm text-white/50">Service hours: 8 AM - 8 PM</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-light p-6 rounded-sm border border-gold/20"
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold-light">Event Planning</h3>
              <p className="text-white/70 mb-4">
                Our experienced event planning team can help organize special occasions, from intimate gatherings to grand celebrations.
              </p>
              <p className="text-sm text-white/50">Contact: events@luxuryhaven.com</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AmenitiesPage;
