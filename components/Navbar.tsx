
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Projects', path: '/projects' },
    { label: 'Publications', path: '/publications' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-slate-100 h-20 flex items-center">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 w-full flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex flex-col flex-shrink-0">
          <span className="text-emerald-800 font-bold text-2xl tracking-tight leading-none">Gentle Energy</span>
          <span className="text-slate-400 text-[11px] tracking-[0.4em] font-bold uppercase mt-1">Education PhD. Research Lab</span>
        </Link>

        {/* Navigation Items - Increased size to 17px */}
        <div className="hidden lg:flex items-center space-x-10 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-2 text-[17px] font-bold transition-colors ${
                isActive(item.path) 
                  ? 'text-emerald-700' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[2.5px] bg-emerald-600 rounded-full"></span>
              )}
            </Link>
          ))}
          <Link to="/admin" className="text-[14px] font-bold text-slate-300 hover:text-slate-900 transition-colors pl-4">
            Admin
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-8 z-50">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`text-2xl font-bold ${isActive(item.path) ? 'text-emerald-600' : 'text-slate-900'}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
