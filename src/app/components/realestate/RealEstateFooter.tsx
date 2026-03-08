import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function RealEstateFooter() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800 dark:border-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-500 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl">
                <span className="text-white">Prime</span>
                <span className="text-amber-400">Estate</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner in finding the perfect property. Excellence in real estate since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#properties" className="text-gray-300 hover:text-amber-400 transition-colors">Properties</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4 text-amber-400">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Buy Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Sell Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Rent Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Investment Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 text-amber-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Luxury Avenue<br />Downtown, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">info@primeestate.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 PrimeEstate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}