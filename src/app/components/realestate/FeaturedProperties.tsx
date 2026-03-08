import { motion } from "motion/react";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const properties = [
  {
    id: 1,
    title: "Modern Villa with Ocean View",
    location: "Miami Beach, FL",
    price: "$2,850,000",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$4,200,000",
    beds: 3,
    baths: 3,
    sqft: "3,200",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Los Angeles, CA",
    price: "$1,950,000",
    beds: 4,
    baths: 3,
    sqft: "3,800",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Beachfront Paradise Estate",
    location: "Malibu, CA",
    price: "$6,500,000",
    beds: 6,
    baths: 5,
    sqft: "6,200",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    featured: true,
  },
  {
    id: 5,
    title: "Mountain View Retreat",
    location: "Aspen, CO",
    price: "$3,750,000",
    beds: 5,
    baths: 4,
    sqft: "5,100",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Urban Chic Apartment",
    location: "San Francisco, CA",
    price: "$1,450,000",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    featured: false,
  },
];

export function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 dark:text-amber-500 uppercase tracking-wider text-sm mb-2 block">
            Premium Listings
          </span>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Handpicked selection of our finest properties in prime locations
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-600"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </div>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700 my-4">
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <Bath className="w-4 h-4" />
                    <span className="text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <Square className="w-4 h-4" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl text-blue-900 dark:text-blue-400">
                    {property.price}
                  </div>
                  <Button
                    variant="outline"
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-6 text-lg">
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
