import React from 'react';
import { Coffee, UtensilsCrossed, Users, Sparkles, HeartHandshake } from 'lucide-react';
import { HIGHLIGHTS } from '../data/cafeData';

const iconMap = {
  Coffee: Coffee,
  UtensilsCrossed: UtensilsCrossed,
  Users: Users,
  Sparkles: Sparkles,
};

export default function WhyUs() {
  return (
    <section id="highlights" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B31]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" /> Why Nagpur Loves CST Chai Station
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#2C1810]">
            Piping Hot Chai &amp; <span className="text-[#C84B31]">Honest Prices</span>
          </h2>
          <p className="text-[#6E5C55] text-base sm:text-lg">
            Four reasons why CST Chai Station at Tata Square is Nagpur's favorite neighborhood gathering spot.
          </p>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Coffee;

            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD1] hover:border-[#C84B31] hover:shadow-lg transition-all duration-300 group space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8DFD1] flex items-center justify-center text-[#C84B31] group-hover:bg-[#C84B31] group-hover:text-white transition-all duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-display font-bold text-[#2C1810] group-hover:text-[#C84B31] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#6E5C55] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
