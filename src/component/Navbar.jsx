import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          className="font-bold text-4xl"
        >
          <span className="text-orange-500">T</span>
          <span className="text-purple-500">O</span>
          <span className="text-orange-500">D</span>
          <span className="text-purple-500">O</span>
        </motion.div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-gray-800 focus:outline-none rounded-full bg-white w-10 h-10 flex items-center justify-center"
          >
            &#9776;
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
          <a href="#" className="block text-white">
            Home
          </a>
          <a href="#" className="block text-white">
            About
          </a>
          <a href="#" className="block text-white">
            Services
          </a>
          <a href="#" className="block text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
