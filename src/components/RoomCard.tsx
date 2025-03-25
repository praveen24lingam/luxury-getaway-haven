
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wifi, Coffee, Bath, Users } from 'lucide-react';

interface RoomCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  size: string;
  capacity: number;
  amenities: string[];
  delay?: number;
}

const RoomCard = ({
  name,
  description,
  price,
  imageUrl,
  size,
  capacity,
  amenities,
  delay = 0,
}: RoomCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const amenityIcons: Record<string, JSX.Element> = {
    wifi: <Wifi size={16} />,
    breakfast: <Coffee size={16} />,
    bathtub: <Bath size={16} />,
    capacity: <Users size={16} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-serif font-semibold">{name}</h3>
          <div className="flex items-center mt-1">
            <span className="text-white/90 text-sm">Starting from</span>
            <span className="text-gold-light font-semibold text-lg ml-2">${price}/night</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-foreground/80 text-sm mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center space-x-2 text-sm text-foreground/70">
            <span className="bg-muted p-1.5 rounded">
              {amenityIcons.capacity}
            </span>
            <span>{capacity} Guests</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-foreground/70">
            <span className="bg-muted p-1.5 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </svg>
            </span>
            <span>{size}</span>
          </div>
          
          {amenities.slice(0, 2).map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-foreground/70">
              <span className="bg-muted p-1.5 rounded">
                {amenityIcons[amenity.toLowerCase()] || <span className="h-4 w-4" />}
              </span>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 rounded-sm"
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
};

export default RoomCard;
