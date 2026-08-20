import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';

export default function ProposalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-bounce" style={{ animationDuration: '6s' }}>
      <div className="p-4 rounded-2xl bg-[#2C1810] text-white shadow-2xl border border-amber-500/30 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full text-stone-400 hover:text-white transition-colors"
          title="Dismiss Banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#C84B31] text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[10px] uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-md border border-amber-500/30">
                Client Pitch Preview
              </span>
            </div>
            <p className="text-xs text-stone-200 leading-snug">
              Specially built for CST Chai Station Nagpur with exact menu prices &amp; WhatsApp ordering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
