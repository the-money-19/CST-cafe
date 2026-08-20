import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star, MapPin, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';

export default function Hero({ onExploreCategories }) {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F4EFE6]">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C84B31]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D97706]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C84B31]/10 border border-[#C84B31]/20 text-[#C84B31] text-xs sm:text-sm font-bold tracking-wide">
              <Heart className="w-4 h-4 fill-[#C84B31]" />
              <span>Nagpur's Favorite Neighborhood Chai Spot</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#2C1810] tracking-tight leading-[1.15]">
              Hot <span className="text-[#C84B31]">Kulhad Chai</span>, Soft Bun Maska & Good Times.
            </h1>

            {/* Humanized Warm Description */}
            <p className="text-[#6E5C55] text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Step into CST Chai Station at <strong className="text-[#2C1810]">Tata Square, Manewada Road</strong>. Whether it's your morning ginger chai, evening cheese corn maggi, or a quick cold coffee with friends — we brew every cup with care.
            </p>

            {/* Price Highlight Banner */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 py-1">
              <div className="px-4 py-2 rounded-xl bg-white border border-[#E8DFD1] shadow-sm flex items-center gap-2 text-sm text-[#2C1810] font-bold">
                <span className="text-[#C84B31]">☕ Chai Garam</span> from ₹12
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-[#E8DFD1] shadow-sm flex items-center gap-2 text-sm text-[#2C1810] font-bold">
                <span className="text-[#C84B31]">🍞 Bun Maska</span> at ₹20
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-[#E8DFD1] shadow-sm flex items-center gap-2 text-sm text-[#2C1810] font-bold">
                <span className="text-[#C84B31]">🍜 Cheese Maggi</span> at ₹80
              </div>
            </div>

            {/* Rating Banner */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-[#6E5C55]">
              <div className="flex text-[#D97706]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D97706]" />
                ))}
              </div>
              <span className="font-bold text-[#2C1810]">5.0 Star Rated</span>
              <span>&bull;</span>
              <span>250+ Local Customer Reviews</span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreCategories}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C84B31] text-white font-extrabold text-base hover:bg-[#B33C24] hover:shadow-xl hover:shadow-[#C84B31]/20 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Browse Menu Categories</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CAFE_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-[#E8DFD1] text-[#2C1810] font-bold text-base hover:bg-[#FAF7F2] hover:border-[#C84B31]/40 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5 text-[#C84B31]" />
                <span>Get Directions (Tata Square)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Visual Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with Warm Shadow */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-[#2C1810]/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Authentic CST Kulhad Chai" 
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8DFD1] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#C84B31] uppercase tracking-wider">Nagpur's Favorite</p>
                      <h3 className="text-lg font-display font-bold text-[#2C1810]">Special Kulhad Chai</h3>
                    </div>
                    <span className="px-3 py-1.5 rounded-xl bg-[#C84B31] text-white font-extrabold text-sm">
                      ₹20
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-white border border-[#E8DFD1] shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#C84B31] font-bold text-xl">
                  ☕
                </div>
                <div>
                  <p className="text-xs text-[#6E5C55] font-semibold">Chai Garam</p>
                  <p className="text-sm font-bold text-[#2C1810]">Starting ₹12</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-white border border-[#E8DFD1] shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-800 font-bold text-xl">
                  🍞
                </div>
                <div>
                  <p className="text-xs text-[#6E5C55] font-semibold">Fresh Bun Maska</p>
                  <p className="text-sm font-bold text-[#2C1810]">Just ₹20</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
