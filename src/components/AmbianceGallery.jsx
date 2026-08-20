import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { CAFE_DETAILS, INSTAGRAM_POSTS } from '../data/cafeData';

export default function AmbianceGallery() {
  return (
    <section id="gallery" className="py-20 relative bg-[#FAF7F2] border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B31]/10 text-[#C84B31] text-xs font-bold uppercase tracking-wider">
              <Instagram className="w-4 h-4" /> Live Instagram Moments
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#2C1810]">
              Follow <span className="text-[#C84B31]">{CAFE_DETAILS.instagramHandle}</span>
            </h2>
            <p className="text-[#6E5C55] text-base">
              Tag us in your chai stories and get featured on our official café page!
            </p>
          </div>

          <a
            href={CAFE_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-6 py-3 rounded-2xl bg-[#C84B31] text-white font-bold text-sm hover:bg-[#B33C24] active:scale-95 transition-all flex items-center gap-2 shadow-md shadow-[#C84B31]/20"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
          </a>
        </div>

        {/* Gallery Feed Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={CAFE_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8DFD1] aspect-square flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={post.imageUrl}
                alt="CST Chai Station moment"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm font-bold">
                    <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> {post.likes}</span>
                    <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 fill-amber-400 text-amber-400" /> {post.comments}</span>
                  </div>
                  <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed font-medium">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
