import { motion } from "motion/react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { unsplash_tool } from "../../../tools";

export function RealEstateHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury real estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/95 dark:from-black/95 dark:via-blue-950/90 dark:to-black/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-600/20 dark:bg-amber-600/30 border border-amber-400 text-amber-400 dark:text-amber-300 rounded-full text-sm mb-6">
              ✨ Premium Real Estate Solutions
            </span>
            <h1 className="text-white mb-6 leading-tight">
              Find Your Dream Home
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                In Prime Locations
              </span>
            </h1>
            <p className="text-xl text-gray-200 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover luxury properties, expert guidance, and seamless
              transactions. Your perfect home is just a search away.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-8 transition-colors duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-900 dark:focus:border-blue-600"
                />
              </div>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select className="w-full h-10 pl-10 pr-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:border-blue-900 dark:focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900/20 dark:focus:ring-blue-600/20">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select className="w-full h-10 pl-10 pr-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:border-blue-900 dark:focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900/20 dark:focus:ring-blue-600/20">
                  <option>Price Range</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M+</option>
                </select>
              </div>
              <Button className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-800 dark:to-blue-600 hover:from-blue-800 hover:to-blue-600 text-white h-10">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-white">
              <div className="text-4xl mb-2 text-amber-400 dark:text-amber-300">
                500+
              </div>
              <div className="text-gray-300">Properties Listed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-2 text-amber-400 dark:text-amber-300">
                1,200+
              </div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-2 text-amber-400 dark:text-amber-300">
                15+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
