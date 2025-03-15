import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const navVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-rose-50 shadow-sm flex justify-center"
    >
      <div className="container flex justify-between items-center h-20 px-4 sm:px-6">
        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent transition-transform hover:scale-[1.02]">
          GlamourStudio
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-base font-medium text-gray-700 hover:text-rose-700 px-3 py-2
                         after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] 
                         after:bg-rose-700 after:transition-all after:duration-300 hover:after:w-4/5 
                         hover:after:left-[10%]"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 
                       text-white shadow-sm rounded-full px-6 py-5 text-base font-semibold transition-all"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-rose-50 transition-colors"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-rose-700" />
          ) : (
            <Menu className="w-7 h-7 text-rose-700" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-rose-50"
            >
              <div className="container px-4 sm:px-6 py-4 flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium text-gray-700 hover:text-rose-700 pl-3 
                               border-l-2 border-rose-100 hover:border-rose-700 transition-all py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  className="w-full bg-rose-700 hover:bg-rose-800 text-white py-5 text-base 
                             font-semibold rounded-lg transition-colors mt-2"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}