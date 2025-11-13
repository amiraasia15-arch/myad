import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  // Handle dark/light mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Nav links array for easy updates
  const navLinks = [
    { name: "𝑯𝒐𝒎𝒆", path: "/" },
    { name: "𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔", path: "/projects" },
    { name: "𝑨𝒃𝒐𝒖𝒕", path: "/about" },
    { name: "𝑪𝒐𝒏𝒕𝒂𝒄𝒕", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-teal-400 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
         className="text-2xl box-decoration-slice bg-linear-to-r from-pink-500 px-2 text-zinc-800..."
        >
          <div class="shadow-xl ...">
           𝓜𝓘𝓜𝓘'𝓢 𝓟𝓞𝓡𝓣𝓕𝓞𝓛𝓘𝓞<span className="text-gray-800 dark:text-white"></span>
            </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
               className="text-gray-700 dark:text-green-200 hover:text-white dark:hover:text-pink-500 transition-colors duration-200 font-serif animated-underline"
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dark/Light Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ rotate: 180, scale: 0.9 }}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-pink-200 dark:hover:bg-pink-500 transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-300 dark:border-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-70"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
               className="block text-purple-400 dark:text-green-200 hover:text-black dark:hover:text-pink-500 transition-colors duration-200 animated-underline px-3 py-2 text-lg rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95"
                >
                {link.name}
              </NavLink>
            ))}

            {/* Dark/Light Toggle in Mobile */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ rotate: 180, scale: 0.9 }}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 mt-2"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-purple-500" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;