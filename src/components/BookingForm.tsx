
import { useState } from 'react';
import { Calendar as CalendarIcon, Users, Home, ChevronsUpDown, Check } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const roomTypes = [
  { label: "Standard Room", value: "standard" },
  { label: "Deluxe Room", value: "deluxe" },
  { label: "Executive Suite", value: "executive" },
  { label: "Family Suite", value: "family" },
  { label: "Presidential Suite", value: "presidential" },
];

const specialRequests = [
  { id: "early-checkin", label: "Early Check-in" },
  { id: "late-checkout", label: "Late Check-out" },
  { id: "airport-shuttle", label: "Airport Shuttle" },
  { id: "extra-bed", label: "Extra Bed" },
  { id: "high-floor", label: "High Floor" },
];

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [rooms, setRooms] = useState('1');
  const [roomType, setRoomType] = useState('');
  const [open, setOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [selectedRequests, setSelectedRequests] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }
    
    if (checkInDate >= checkOutDate) {
      toast.error("Check-out date must be after check-in date");
      return;
    }

    if (!roomType) {
      toast.error("Please select a room type");
      return;
    }
    
    // Calculate nights
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
    
    toast.success(`Booking request for ${nights} night${nights > 1 ? 's' : ''} submitted successfully!`);
    
    // In a real application, we would send this data to the server
    console.log({
      checkIn: checkInDate,
      checkOut: checkOutDate,
      adults,
      children,
      rooms,
      roomType,
      promoCode: promoCode || "No promo code",
      specialRequests: selectedRequests,
      nights
    });

    // Show estimated price
    const basePrice = roomType === 'standard' ? 199 : 
                      roomType === 'deluxe' ? 299 : 
                      roomType === 'executive' ? 499 : 
                      roomType === 'family' ? 699 : 1299;
    
    const totalPrice = basePrice * nights * parseInt(rooms);
    const discountedPrice = promoCode ? totalPrice * 0.9 : totalPrice; // 10% discount with promo code
    
    toast.info(`Estimated price: $${discountedPrice.toFixed(2)}${promoCode ? ' (10% discount applied)' : ''}`);
  };
  
  const toggleRequest = (id: string) => {
    setSelectedRequests(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const handlePromoCodeApply = () => {
    if (promoCode.trim() === 'WELCOME10' || promoCode.trim() === 'SUMMER2023') {
      toast.success('Promo code applied: 10% discount');
    } else if (promoCode.trim()) {
      toast.error('Invalid promo code');
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-sm shadow-lg border border-border">
      <h3 className="text-2xl font-serif font-bold mb-6 text-center">Book Your Stay</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Check-in date */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-in Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkInDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Check-out date */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-out Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOutDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={setCheckOutDate}
                  initialFocus
                  disabled={(date) => 
                    date < new Date() || (checkInDate ? date <= checkInDate : false)
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Adults */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Adults</label>
            <Select defaultValue={adults} onValueChange={setAdults}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Adult' : 'Adults'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Children */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Children</label>
            <Select defaultValue={children} onValueChange={setChildren}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Child' : 'Children'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Rooms */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Rooms</label>
            <Select defaultValue={rooms} onValueChange={setRooms}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Room' : 'Rooms'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Room Type Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Room Type</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between font-normal"
              >
                {roomType ? roomTypes.find(room => room.value === roomType)?.label : "Select room type..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search room type..." />
                <CommandEmpty>No room type found.</CommandEmpty>
                <CommandGroup>
                  {roomTypes.map((room) => (
                    <CommandItem
                      key={room.value}
                      value={room.value}
                      onSelect={(currentValue) => {
                        setRoomType(currentValue === roomType ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          roomType === room.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {room.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Promo Code */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Promo Code (Optional)</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={handlePromoCodeApply}
              className="h-10"
            >
              Apply
            </Button>
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Special Requests (Optional)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {specialRequests.map((request) => (
              <div key={request.id} className="flex items-center space-x-2">
                <Checkbox
                  id={request.id}
                  checked={selectedRequests.includes(request.id)}
                  onCheckedChange={() => toggleRequest(request.id)}
                />
                <label
                  htmlFor={request.id}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {request.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white py-6 transition-all duration-300 mt-4 rounded-sm"
        >
          Check Availability
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-2">
          No credit card required to check availability.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
