import React from 'react';
import { Coffee, Instagram, MapPin, Heart } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] border-t border-stone-800 py-16 text-stone-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#C84B31] flex items-center justify-center text-white font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                CST <span className="text-[#C84B31]">Chai Station</span>
              </span>
            </div>
            
            <p className="text-stone-300 text-sm max-w-md leading-relaxed">
              Nagpur's warm neighborhood spot for authentic Kulhad Chai, soft Bun Maska, cheesy pizzas, spicy maggi, and refreshing cool drinks at Tata Square, Manewada.
            </p>

            <div className="flex items-center gap-4 text-stone-300">
              <a
                href={CAFE_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:text-white hover:border-[#C84B31] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CAFE_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:text-white hover:border-[#C84B31] transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#categories" className="hover:text-white transition-colors">Menu Categories</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Why People Love Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Instagram Feed</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location &amp; Hours</a></li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Visit Us</h4>
            <p className="text-stone-300 text-xs">Tata Square, Manewada - Besa Road, Ayodhya Nagar, Nagpur</p>
            <p className="text-amber-400 font-bold text-xs">Open 9:00 AM &ndash; 10:00 PM Daily</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>&copy; {new Date().getFullYear()} CST Chai Station Nagpur.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for CST Chai Station Nagpur Pitch
          </p>
        </div>

      </div>
    </footer>
  );
}
