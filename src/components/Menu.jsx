import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Check, ShoppingBag, Flame, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';

export default function Menu({ onAddToCart, cartItems }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => setAddedAnimationId(null), 1000);
  };

  const getItemQuantityInCart = (id) => {
    const found = cartItems.find((ci) => ci.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-24 relative bg-stone-950/60 border-t border-b border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-4 h-4" /> Freshly Prepared Menu
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-100">
            Explore <span className="text-gradient">CST Chai Station</span> Delights
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            From iconic Kulhad Chai to spicy Cheese Corn Maggi, crispy grilled sandwiches & refreshing cool drinks.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search chai, maggi, coffee, momos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all text-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-lg shadow-amber-500/20'
                    : 'bg-stone-900 text-stone-300 border border-stone-800 hover:border-amber-500/30 hover:text-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const qtyInCart = getItemQuantityInCart(item.id);
              const isJustAdded = addedAnimationId === item.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group rounded-3xl glass-card border border-stone-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300"
                >
                  <div>
                    {/* Item Image Container */}
                    <div className="relative h-52 overflow-hidden bg-stone-900">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-transparent to-transparent opacity-80"></div>
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        {item.tag ? (
                          <span className="px-3 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-stone-950 font-bold text-xs shadow-md">
                            {item.tag}
                          </span>
                        ) : (
                          <span></span>
                        )}

                        <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Veg
                        </span>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-display font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-xl font-extrabold text-amber-400 whitespace-nowrap">
                          ₹{item.price}
                        </span>
                      </div>
                      
                      <p className="text-stone-400 text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Add to Tray Action */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => handleAdd(item)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                        isJustAdded
                          ? 'bg-emerald-500 text-stone-950'
                          : qtyInCart > 0
                          ? 'bg-stone-800 text-amber-400 border border-amber-500/30 hover:bg-stone-700'
                          : 'bg-stone-900 border border-stone-800 text-stone-200 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" /> Added to Tray
                        </>
                      ) : qtyInCart > 0 ? (
                        <>
                          <ShoppingBag className="w-4 h-4 text-amber-400" />
                          <span>In Tray ({qtyInCart}) &bull; Add More</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" /> Add to Order Tray
                        </>
                      )}
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <p className="text-stone-400 text-lg">No items match your search term.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 font-semibold text-sm border border-amber-500/20"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
