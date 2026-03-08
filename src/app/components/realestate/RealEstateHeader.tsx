import { useState } from "react";
import { Menu, X, Home, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../utils/hooks";
import { useTheme } from "../context/ThemeContext"; 

export function RealEstateHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);
  const { isDarkMode, toggleDarkMode } = useTheme(); 

  const handleDashboardClick = () => {
    setMobileMenuOpen(false);
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleNavigate = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  const navLinks = [
    "#properties",
    "#services",
    "#about",
    "#testimonials",
    "#contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home">
            {" "}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-2xl font-semibold">
                <span className="text-blue-900 dark:text-blue-400">Prime</span>
                <span className="text-amber-600">Estate</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
              >
                {link.replace("#", "").charAt(0).toUpperCase() +
                  link.replace("#", "").slice(1)}
              </a>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <a href="#contact">
              <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white">
                Join Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 py-2 transition"
                >
                  {link.replace("#", "").charAt(0).toUpperCase() +
                    link.replace("#", "").slice(1)}
                </a>
              ))}

              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-blue-900 to-blue-700 text-white w-full">
                  Join Us
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
