
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-navy text-white">
      <div className="hotel-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Luxury Haven</h3>
            <p className="text-white/70 mb-6">
              Experience unparalleled luxury and comfort at our award-winning hotel,
              where every detail is crafted for your perfect getaway.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold-light transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold-light transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-gold-light transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-white/70 hover:text-gold-light transition-colors">Rooms & Suites</Link>
              </li>
              <li>
                <Link to="/amenities" className="text-white/70 hover:text-gold-light transition-colors">Amenities</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-gold-light transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gold-light transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold-light mt-1 flex-shrink-0" />
                <span className="text-white/70">123 Luxury Lane, Paradise City, PC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold-light flex-shrink-0" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold-light flex-shrink-0" />
                <span className="text-white/70">info@luxuryhaven.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive special offers and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-navy-light border-navy-light focus:border-gold-light"
                />
                <Button 
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-white transition-colors rounded-sm"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-navy-dark py-4">
        <div className="hotel-container flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Luxury Haven. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
