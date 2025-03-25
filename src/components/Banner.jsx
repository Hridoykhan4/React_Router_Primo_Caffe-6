import banner from "../assets/banner.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className={`hero ${motion ? "my-1" : "my-2"} min-h-[600px] relative `}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay  bg-opacity-80"></div>
      <motion.div
        className="hero-content text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-md">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to Primo Cafe
          </motion.h1>
          <motion.p
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Enjoy the rich aroma of freshly brewed coffee in a cozy ambiance.
            Relax, sip, and savor the finest flavors crafted just for you.
          </motion.p>
          <motion.button
            className="btn btn-primary bg-brown-600 border-0 hover:bg-brown-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Order Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
