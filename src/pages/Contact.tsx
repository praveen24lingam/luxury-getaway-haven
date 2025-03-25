
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // In a real app, you would submit this data to your backend
    console.log("Form data:", formData);
    
    // Show success toast
    toast.success("Your message has been sent! We'll respond shortly.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Hotel reception" 
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            We're here to assist you with any questions or special requests
          </motion.p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section-padding bg-cream">
        <div className="hotel-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-sm shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Our Location</h3>
              <p className="text-foreground/70">
                123 Luxury Lane<br />
                Paradise City, PC 12345<br />
                United States
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-sm shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Phone</h3>
              <p className="text-foreground/70">
                Reservations: +1 (555) 123-4567<br />
                Front Desk: +1 (555) 123-4568<br />
                Concierge: +1 (555) 123-4569
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-sm shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Email</h3>
              <p className="text-foreground/70">
                Info: info@luxuryhaven.com<br />
                Reservations: book@luxuryhaven.com<br />
                Support: help@luxuryhaven.com
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-sm shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Hours</h3>
              <p className="text-foreground/70">
                Check-in: 3:00 PM<br />
                Check-out: 12:00 PM<br />
                Front Desk: 24/7
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <p className="text-foreground/80 mb-8">
                We'd love to hear from you. Please fill out the form below and we'll respond as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="min-h-[150px] w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white py-6 px-8 transition-all duration-300 rounded-sm"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Find Us</h2>
              <p className="text-foreground/80 mb-8">
                Nestled in the heart of the city, Luxury Haven is easily accessible from major transport hubs.
              </p>
              
              <div className="h-[400px] bg-white rounded-sm shadow-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903a747b911%3A0xb41d5de7c2a19480!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1626341804283!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Hotel Location Map"
                />
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-serif font-semibold">Getting Here</h3>
                <div className="space-y-2">
                  <p className="text-foreground/80">
                    <span className="font-medium">From the Airport:</span> 20 minutes by car or taxi
                  </p>
                  <p className="text-foreground/80">
                    <span className="font-medium">Public Transport:</span> Bus routes 15, 32, and 47 stop directly outside
                  </p>
                  <p className="text-foreground/80">
                    <span className="font-medium">Parking:</span> Secure on-site parking available for guests
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="hotel-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center mb-12"
          >
            <span className="text-primary font-medium tracking-widest text-sm">ASSISTANCE</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">Frequently Asked Questions</h2>
            <p className="text-foreground/80 leading-relaxed">
              Find quick answers to common questions about our hotel and services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What are your check-in and check-out times?",
                answer: "Standard check-in time is 3:00 PM, and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability and additional charges may apply."
              },
              {
                question: "Do you offer airport transportation?",
                answer: "Yes, we offer complimentary airport shuttle service that runs every hour from 6 AM to 11 PM. For transportation outside these hours, please contact our concierge to arrange a private transfer for an additional fee."
              },
              {
                question: "Is breakfast included in the room rate?",
                answer: "Breakfast is included in most of our room packages. Please check your reservation details to confirm. Our breakfast buffet is served from 6:30 AM to 10:30 AM daily in our main restaurant."
              },
              {
                question: "Do you have facilities for guests with disabilities?",
                answer: "Yes, our hotel is fully accessible. We offer specially designed rooms for guests with disabilities, featuring wider doorways, grab bars in bathrooms, and other accessible amenities. Please specify your requirements when booking."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Our standard cancellation policy requires notice 48 hours prior to arrival to avoid charges. Cancellations within 48 hours may incur a fee equivalent to one night's stay. Special rates or promotions may have different policies."
              },
              {
                question: "Is there a dress code for the restaurants?",
                answer: "Our main restaurant has a smart casual dress code. For our fine dining restaurant, elegant attire is required (no shorts, sandals, or athletic wear). The poolside bar and room service have no specific dress code."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-sm"
              >
                <h3 className="text-lg font-serif font-semibold mb-3">{faq.question}</h3>
                <p className="text-foreground/70 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground/80 mb-4">
              Don't see your question? Please contact us directly.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white py-6 px-8 transition-all duration-300 rounded-sm"
            >
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
