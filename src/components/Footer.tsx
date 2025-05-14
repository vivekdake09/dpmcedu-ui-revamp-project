
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://www.dpmcedu.com/images/logo.png" 
                alt="DPMC Logo" 
                className="h-12 mr-2"
              />
              <div>
                <h3 className="font-bold text-lg">DPMC Private ITI</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              DPMC Private ITI is a leading technical training institute offering NCVT certified courses to empower youth with skills for a successful career in various industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-dpmc-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-dpmc-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-dpmc-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-dpmc-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-dpmc-red"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="index.html" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="about_dpmc.html" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="engineering_trades.html" className="text-gray-400 hover:text-white transition-colors">Engineering Trades</a>
              </li>
              <li>
                <a href="non_engineering_trades.html" className="text-gray-400 hover:text-white transition-colors">Non-Engineering Trades</a>
              </li>
              <li>
                <a href="facilities.html" className="text-gray-400 hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="gallery.html" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="contact_us.html" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Admission Related Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Admission Related
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-dpmc-red"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="admission_process.html" className="text-gray-400 hover:text-white transition-colors">Admission Process</a>
              </li>
              <li>
                <a href="fees_structure.html" className="text-gray-400 hover:text-white transition-colors">Fee Structure</a>
              </li>
              <li>
                <a href="apply_online.html" className="text-gray-400 hover:text-white transition-colors">Apply Online</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Scholarship Details</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Rules & Regulations</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-dpmc-red"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-dpmc-red flex-shrink-0" />
                <span className="text-gray-400">
                  Bikaner Road, Sardarshahar, Churu,<br />
                  Rajasthan - 331403
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-dpmc-red flex-shrink-0" />
                <a href="tel:9829062662" className="text-gray-400 hover:text-white transition-colors">
                  +91 98290 62662
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-dpmc-red flex-shrink-0" />
                <a href="mailto:dpmcedu@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  dpmcedu@gmail.com
                </a>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-3 text-dpmc-red flex-shrink-0" />
                <span className="text-gray-400">
                  Mon - Sat: 9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2023 DPMC Private ITI. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
