import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Plus, Check, ShoppingBag, ArrowLeft } from 'lucide-react';
import { FULL_MENU } from '../data/cafeData';

export default function CategoryMenuModal({ category, isOpen, onClose, onAddToCart, cartItems }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  if (!isOpen || !category) return null;

  const categoryItems = FULL_MENU.filter((item) => item.category === category.id);

  const filteredItems = categoryItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getItemQuantityInCart = (id) => {
    const found = cartItems.find((ci) => ci.id === id);
    return found ? found.quantity : 0;
  };

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => setAddedAnimationId(null), 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-[#E8DFD1]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#E8DFD1] bg-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#C84B31]/10 flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-[#2C1810]">{category.name}</h3>
                <p className="text-xs text-[#6E5C55]">{category.tagline}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white text-[#6E5C55] hover:text-[#C84B31] hover:bg-[#F4EFE6] border border-[#E8DFD1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search bar inside category */}
          <div className="p-4 bg-white border-b border-[#E8DFD1]">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#6E5C55]" />
              <input
                type="text"
                placeholder={`Search in ${category.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] text-[#2C1810] placeholder-[#6E5C55] focus:outline-none focus:border-[#C84B31] text-sm"
              />
            </div>
          </div>

          {/* Items List */}
          <div className="p-6 overflow-y-auto space-y-3 flex-1 bg-[#FAF7F2]/50">
            {filteredItems.length === 0 ? (
              <p className="text-center py-8 text-[#6E5C55] text-sm">No items found matching your search.</p>
            ) : (
              filteredItems.map((item) => {
                const qtyInCart = getItemQuantityInCart(item.id);
                const isJustAdded = addedAnimationId === item.id;

                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white border border-[#E8DFD1] hover:border-[#C84B31]/40 shadow-sm flex items-center justify-between gap-4 transition-all"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        <h4 className="font-bold text-[#2C1810] text-base">{item.name}</h4>
                        {item.tag && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-black text-[#C84B31]">₹{item.price}</p>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`py-2 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center gap-1.5 ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : qtyInCart > 0
                          ? 'bg-[#F4EFE6] text-[#C84B31] border border-[#C84B31]/30 hover:bg-[#C84B31] hover:text-white'
                          : 'bg-[#C84B31] text-white hover:bg-[#B33C24]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added ({qtyInCart})
                        </>
                      ) : qtyInCart > 0 ? (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" /> Added ({qtyInCart}) +
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add to Order
                        </>
                      )}
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#E8DFD1] bg-white flex items-center justify-between text-xs text-[#6E5C55]">
            <span>{categoryItems.length} Items in {category.name}</span>
            <button
              onClick={onClose}
              className="text-[#C84B31] font-bold hover:underline"
            >
              Close &amp; View Other Categories
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
