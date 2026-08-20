import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Utensils } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/cafeData';
import CategoryMenuModal from './CategoryMenuModal';

export default function CategoriesView({ onAddToCart, cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="categories" className="py-20 relative bg-[#FAF7F2] border-t border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B31]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5" /> Our Special Menu Categories
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#2C1810]">
            Explore <span className="text-[#C84B31]">CST Chai Station</span> Flavors
          </h2>
          <p className="text-[#6E5C55] text-base sm:text-lg">
            Select a category below to browse items, check prices &amp; order directly via WhatsApp!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedCategory(cat)}
              className="group cursor-pointer rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#C84B31] shadow-sm hover:shadow-xl hover:shadow-[#C84B31]/10 overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Image Header */}
                <div className="relative h-48 overflow-hidden bg-[#F4EFE6]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent"></div>
                  
                  {/* Category Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-2xl">
                    {cat.icon}
                  </div>

                  {/* Item Count Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2C1810]/80 backdrop-blur-md text-white text-xs font-bold">
                    {cat.itemCount} Items
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-2">
                  <p className="text-[#6E5C55] text-sm leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="w-full py-3 px-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] group-hover:bg-[#C84B31] group-hover:text-white group-hover:border-[#C84B31] text-[#2C1810] font-bold text-sm transition-all duration-300 flex items-center justify-between">
                  <span>View Items &amp; Prices</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Category Menu Items Modal */}
      <CategoryMenuModal
        category={selectedCategory}
        isOpen={Boolean(selectedCategory)}
        onClose={() => setSelectedCategory(null)}
        onAddToCart={onAddToCart}
        cartItems={cartItems}
      />
    </section>
  );
}
