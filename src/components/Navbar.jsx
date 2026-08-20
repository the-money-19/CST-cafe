import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, ShoppingBag, Instagram, PhoneCall } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const currentHour = new Date().getHours();
    setIsOpenNow(currentHour >= CAFE_DETAILS.openHour && currentHour < CAFE_DETAILS.closeHour);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FAF7F2]/90 backdrop-blur-md py-3 border-b border-[#E8DFD1] shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#C84B31] to-[#E26D5C] p-0.5 shadow-md shadow-[#C84B31]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#FAF7F2] rounded-[14px] flex items-center justify-center">
                <Coffee className="w-6 h-6 text-[#C84B31]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xl sm:text-2xl text-[#2C1810] tracking-tight">CST <span className="text-[#C84B31]">Chai Station</span></span>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  isOpenNow 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-rose-100 text-rose-800 border border-rose-300'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-600 animate-pulse' : 'bg-rose-600'}`}></span>
                  {isOpenNow ? 'OPEN NOW' : 'CLOSED'}
                </span>
              </div>
              <p className="text-xs text-[#6E5C55] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C84B31]" /> Tata Square, Manewada, Nagpur
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#6E5C55]">
            <a href="#categories" className="hover:text-[#C84B31] transition-colors">Menu Categories</a>
            <a href="#highlights" className="hover:text-[#C84B31] transition-colors">Why People Love Us</a>
            <a href="#gallery" className="hover:text-[#C84B31] transition-colors">Insta Wall</a>
            <a href="#location" className="hover:text-[#C84B31] transition-colors">Find Us</a>
          </nav>

          {/* Actions: Cart & Instagram */}
          <div className="flex items-center gap-3">
            <a 
              href={CAFE_DETAILS.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#E8DFD1] text-[#6E5C55] hover:text-[#C84B31] hover:border-[#C84B31]/40 shadow-sm transition-all duration-300"
              title="Visit Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C84B31] text-white font-bold hover:bg-[#B33C24] active:scale-95 transition-all shadow-md shadow-[#C84B31]/20"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Order Tray</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-white text-[#C84B31] text-xs font-black flex items-center justify-center border border-[#C84B31]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
