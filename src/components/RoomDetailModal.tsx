
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Wifi, Coffee, Bath, Users, Tv, Wind, Utensils, CircleDollarSign, Shrink, DoorOpen } from 'lucide-react';

type RoomImage = {
  url: string;
  alt: string;
};

type RoomDetailProps = {
  isOpen: boolean;
  onClose: () => void;
  room: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    size: string;
    capacity: number;
    amenities: string[];
    category?: string;
    additionalImages?: RoomImage[];
    longDescription?: string;
    bedType?: string;
    view?: string;
    additionalFeatures?: string[];
  };
};

const amenitiesIcons: Record<string, React.ReactNode> = {
  "Wifi": <Wifi size={16} />,
  "Breakfast": <Coffee size={16} />,
  "Bathtub": <Bath size={16} />,
  "Smart TV": <Tv size={16} />,
  "TV": <Tv size={16} />,
  "AC": <Wind size={16} />,
  "Minibar": <Utensils size={16} />,
  "Kitchen": <Utensils size={16} />,
  "Safe": <CircleDollarSign size={16} />,
  "Balcony": <DoorOpen size={16} />,
  "Lounge Area": <Users size={16} />,
  "Jacuzzi": <Bath size={16} />,
  "Bar": <Utensils size={16} />,
  "Private Terrace": <DoorOpen size={16} />,
  "Butler": <Users size={16} />,
};

const RoomDetailModal = ({ isOpen, onClose, room }: RoomDetailProps) => {
  const defaultImages: RoomImage[] = [
    { url: room.imageUrl, alt: room.name },
  ];
  
  const allImages = room.additionalImages 
    ? [...defaultImages, ...room.additionalImages]
    : defaultImages;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{room.name}</DialogTitle>
          <DialogDescription className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              {room.category || "Room"}
            </Badge>
            <span className="text-muted-foreground text-sm">${room.price} / night</span>
          </DialogDescription>
        </DialogHeader>
        
        {/* Room Images Carousel */}
        <div className="my-4">
          <Carousel className="w-full">
            <CarouselContent>
              {allImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[16/9] overflow-hidden rounded-md">
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Room Details */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-1">
              <Shrink size={16} className="text-primary" />
              <span className="text-sm">{room.size}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} className="text-primary" />
              <span className="text-sm">
                {room.capacity} {room.capacity === 1 ? 'Person' : 'People'}
              </span>
            </div>
            {room.bedType && (
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M2 9V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3"></path>
                  <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5H2Z"></path>
                  <path d="M4 11V9c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2"></path>
                  <path d="M14 11V9c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2"></path>
                </svg>
                <span className="text-sm">{room.bedType}</span>
              </div>
            )}
            {room.view && (
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 16v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"></path>
                  <path d="M9 10v6"></path>
                  <path d="M15 10v6"></path>
                  <path d="M12 10v6"></path>
                  <path d="M4 10h16"></path>
                  <rect width="20" height="7" x="2" y="3" rx="1"></rect>
                </svg>
                <span className="text-sm">{room.view}</span>
              </div>
            )}
          </div>
          
          <p className="text-foreground/80">
            {room.longDescription || room.description}
          </p>
          
          <div className="space-y-2">
            <h4 className="font-medium">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1 py-1">
                  {amenitiesIcons[amenity] || null}
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>
          
          {room.additionalFeatures && room.additionalFeatures.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium">Additional Features</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                {room.additionalFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <Button variant="outline" onClick={onClose} className="sm:mr-auto">
            Close
          </Button>
          <Button className="bg-primary text-white">
            Book Now for ${room.price}/night
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RoomDetailModal;
