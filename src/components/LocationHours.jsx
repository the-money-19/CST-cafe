import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData';

export default function LocationHours() {
  return (
    <section id="location" className="py-20 relative bg-white border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B31]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" /> Visit CST Chai Station
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#2C1810]">
            Located at <span className="text-[#C84B31]">Tata Square, Nagpur</span>
          </h2>
          <p className="text-[#6E5C55] text-base sm:text-lg">
            Ample bike parking, friendly service, open everyday from 9 AM to 10 PM.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD1] space-y-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#C84B31] font-bold text-sm">
                  <MapPin className="w-5 h-5" />
                  <span>Full Address</span>
                </div>
                <p className="text-[#2C1810] font-semibold text-lg leading-snug">
                  {CAFE_DETAILS.address}
                </p>
                <p className="text-[#6E5C55] text-sm">Landmark: Near Dosa Boys, Tata Square</p>
              </div>

              {/* Hours */}
              <div className="space-y-2 pt-4 border-t border-[#E8DFD1]">
                <div className="flex items-center gap-2 text-[#C84B31] font-bold text-sm">
                  <Clock className="w-5 h-5" />
                  <span>Opening Timings</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8DFD1]">
                  <span className="text-[#2C1810] font-semibold">Monday &ndash; Sunday</span>
                  <span className="text-[#C84B31] font-extrabold text-sm">9:00 AM &ndash; 10:00 PM</span>
                </div>
              </div>

              {/* Features badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD1] flex items-center gap-2 text-xs text-[#2C1810] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Bike Parking Available</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD1] flex items-center gap-2 text-xs text-[#2C1810] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Dine-In &amp; Parcel</span>
                </div>
              </div>

            </div>

            {/* Direct Google Maps Action CTA */}
            <div className="pt-6 border-t border-[#E8DFD1]">
              <a
                href={CAFE_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#C84B31] text-white font-black text-base hover:bg-[#B33C24] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#C84B31]/20"
              >
                <Navigation className="w-5 h-5" />
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E8DFD1] min-h-[380px] relative shadow-sm">
            <iframe
              title="CST Chai Station Nagpur Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.2536814986877!2d79.102604!3d21.102431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf2a647d34db%3A0xb35a0928e19bbd2a!2sCST%20Chai%20Station!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8DFD1] shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C84B31] flex items-center justify-center text-white font-bold">
                📍
              </div>
              <div>
                <p className="text-xs text-[#6E5C55] font-semibold">CST Chai Station</p>
                <p className="text-sm font-bold text-[#2C1810]">Manewada - Besa Road, Nagpur</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
