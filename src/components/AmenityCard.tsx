
import { motion } from 'framer-motion';

interface AmenityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const AmenityCard = ({ title, description, icon, delay = 0 }: AmenityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 border border-border group"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-all duration-300">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </motion.div>
  );
};

export default AmenityCard;
