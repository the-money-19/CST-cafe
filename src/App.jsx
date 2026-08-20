import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesView from './components/CategoriesView';
import WhyUs from './components/WhyUs';
import AmbianceGallery from './components/AmbianceGallery';
import LocationHours from './components/LocationHours';
import WhatsAppOrderModal from './components/WhatsAppOrderModal';
import ProposalBanner from './components/ProposalBanner';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] selection:bg-[#C84B31] selection:text-white">
      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero onExploreCategories={scrollToCategories} />
        <CategoriesView onAddToCart={handleAddToCart} cartItems={cartItems} />
        <WhyUs />
        <AmbianceGallery />
        <LocationHours />
      </main>

      <Footer />

      <ProposalBanner />

      <WhatsAppOrderModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
