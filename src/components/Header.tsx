
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      title: 'Home', 
      link: 'index.html' 
    },
    {
      title: 'About Us',
      link: '#',
      submenu: [
        { title: 'About DPMC', link: 'about_dpmc.html' },
        { title: 'Vision & Mission', link: 'vision_mission.html' },
        { title: 'Chairman Message', link: 'chairman_message.html' },
        { title: 'Principal Message', link: 'principal_message.html' }
      ]
    },
    {
      title: 'Courses',
      link: '#',
      submenu: [
        { title: 'Engineering Trades', link: 'engineering_trades.html' },
        { title: 'Non-Engineering Trades', link: 'non_engineering_trades.html' }
      ]
    },
    {
      title: 'Admission',
      link: '#',
      submenu: [
        { title: 'Admission Process', link: 'admission_process.html' },
        { title: 'Fee Structure', link: 'fees_structure.html' },
        { title: 'Apply Online', link: 'apply_online.html' }
      ]
    },
    { title: 'Facilities', link: 'facilities.html' },
    { title: 'Gallery', link: 'gallery.html' },
    { title: 'Contact Us', link: 'contact_us.html' }
  ];

  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
    )}>
      <div className="container mx-auto px-4">
        {/* Top header */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <a href="index.html" className="flex items-center">
              <img src="https://www.dpmcedu.com/images/logo.png" alt="DPMC Logo" className="h-12 md:h-16" />
              <div className="ml-2 hidden md:block">
                <h1 className="font-bold text-dpmc-blue text-lg md:text-xl">DPMC Private ITI</h1>
                <p className="text-xs text-gray-600">Excellence in Technical Education</p>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:9829062662" className="flex items-center text-gray-600 hover:text-dpmc-blue">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              +91 98290 62662
            </a>
            <a href="mailto:dpmcedu@gmail.com" className="flex items-center text-gray-600 hover:text-dpmc-blue">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              dpmcedu@gmail.com
            </a>
            <Button variant="outline" size="sm" className="flex items-center">
              <Search className="h-4 w-4 mr-1" />
              Search
            </Button>
          </div>

          <button
            className="md:hidden text-dpmc-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation menu for desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {menuItems.map((item) => (
              <li key={item.title} className="relative group">
                {item.submenu ? (
                  <div className="flex items-center">
                    <button 
                      onClick={() => toggleDropdown(item.title)}
                      className="px-3 py-2 hover:bg-dpmc-blue hover:text-white rounded-md flex items-center"
                    >
                      {item.title}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <div className={cn(
                      "absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[200px] z-10 transition-all duration-200",
                      openDropdown === item.title ? "opacity-100 visible" : "opacity-0 invisible"
                    )}>
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.link}
                          className="block px-4 py-2 text-sm hover:bg-dpmc-gray"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block px-3 py-2 hover:bg-dpmc-blue hover:text-white rounded-md"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a 
                href="apply_online.html" 
                className="bg-dpmc-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-slide-in">
          <div className="px-4 py-3">
            <div className="flex justify-center mb-3">
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
            </div>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.submenu ? (
                    <div>
                      <button 
                        onClick={() => toggleDropdown(item.title)}
                        className="flex justify-between items-center w-full px-3 py-2 hover:bg-gray-100 rounded-md"
                      >
                        <span>{item.title}</span>
                        <ChevronDown size={16} className={openDropdown === item.title ? "rotate-180 transition-transform" : "transition-transform"} />
                      </button>
                      {openDropdown === item.title && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-dpmc-blue pl-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.link}
                              className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a 
                  href="apply_online.html" 
                  className="block w-full text-center bg-dpmc-red text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  Apply Now
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-col space-y-2 border-t border-gray-200 pt-2">
              <a href="tel:9829062662" className="flex items-center text-gray-600">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                +91 98290 62662
              </a>
              <a href="mailto:dpmcedu@gmail.com" className="flex items-center text-gray-600">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                dpmcedu@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
