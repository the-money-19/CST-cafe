import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, Coffee } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';

export default function WhatsAppOrderModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [orderType, setOrderType] = useState('Dine-In');
  const [tableNo, setTableNo] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let text = `*New Order for CST Chai Station Nagpur* ☕\n\n`;
    text += `*Order Type:* ${orderType} ${tableNo ? `(Table #${tableNo})` : ''}\n`;
    text += `-------------------------------\n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    text += `-------------------------------\n`;
    text += `*Total Amount:* ₹${subtotal}\n`;
    
    if (customerNotes) {
      text += `*Special Notes:* ${customerNotes}\n`;
    }

    text += `\nSent via CST Chai Station Website`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CAFE_DETAILS.phone.replace(/[^0-9]/g, '')}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white border border-[#E8DFD1] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#E8DFD1] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C84B31]/10 flex items-center justify-center text-[#C84B31] font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-[#2C1810]">Your Order Tray</h3>
                <p className="text-xs text-[#6E5C55]">Direct WhatsApp order to café counter</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white border border-[#E8DFD1] text-[#6E5C55] hover:text-[#C84B31] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#FAF7F2]/40">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <Coffee className="w-12 h-12 text-[#6E5C55]/40 mx-auto" />
                <p className="text-[#6E5C55] font-medium">Your tray is currently empty.</p>
                <p className="text-xs text-[#6E5C55]/80">Browse categories &amp; add your favorite Kulhad Chai or Bun Maska!</p>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-[#E8DFD1]/50 border border-[#E8DFD1]">
                  {['Dine-In', 'Takeaway / Parcel'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        orderType === type
                          ? 'bg-[#C84B31] text-white shadow-md'
                          : 'text-[#6E5C55] hover:text-[#2C1810]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {orderType === 'Dine-In' && (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#6E5C55]">Table Number (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Table 4"
                      value={tableNo}
                      onChange={(e) => setTableNo(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8DFD1] text-[#2C1810] text-sm focus:outline-none focus:border-[#C84B31]"
                    />
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8DFD1] gap-4 shadow-sm"
                    >
                      <div>
                        <h4 className="font-bold text-[#2C1810] text-sm">{item.name}</h4>
                        <p className="text-[#C84B31] font-extrabold text-xs">₹{item.price} each</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[#FAF7F2] px-3 py-1.5 rounded-xl border border-[#E8DFD1]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="text-[#6E5C55] hover:text-[#C84B31] transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold text-[#2C1810] px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="text-[#6E5C55] hover:text-[#C84B31] transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#6E5C55] hover:text-rose-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special Instructions */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#6E5C55]">Special Instructions / Customization</label>
                  <input
                    type="text"
                    placeholder="e.g. Less sugar in chai, extra cheese on maggi"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8DFD1] text-[#2C1810] text-sm focus:outline-none focus:border-[#C84B31]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Summary & WhatsApp Order CTA */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#E8DFD1] bg-white space-y-4">
              <div className="flex items-center justify-between text-[#2C1810] font-medium">
                <span>Total Amount:</span>
                <span className="text-2xl font-extrabold text-[#C84B31]">₹{subtotal}</span>
              </div>

              <button
                onClick={handleSendWhatsAppOrder}
                className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-black text-base hover:bg-emerald-700 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/20"
              >
                <Send className="w-5 h-5" />
                <span>Send Order via WhatsApp</span>
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
