import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const aiImages: string[] = [
  '/AI_usage/1.jpg',
  '/AI_usage/2.jpg',
  '/AI_usage/3.jpg',
  '/AI_usage/4.jpg',
  '/AI_usage/5.jpg',
  '/AI_usage/6.jpg'
];

const AIUsage: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + aiImages.length) % aiImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % aiImages.length);
    }
  };

  return (
    <section className="py-32 px-6 bg-secondary/10 relative overflow-hidden">
      {/* Background blur decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accentBlue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accentGold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-widest text-accentBlue mb-6 uppercase"
          >
            <Sparkles className="w-4 h-4" /> Tích hợp công nghệ
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Minh chứng sử dụng <span className="text-gradient">AI hỗ trợ</span>
          </motion.h3>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedIdx(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white/5 border border-white/5 hover:border-accentBlue/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                <img 
                  src={src} 
                  alt={`AI Usage Screenshot ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60"></div>
                
                {/* Maximize Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-accentBlue/20 border border-accentBlue/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 text-accentBlue" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Control */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Content Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full bg-secondary/30 border border-white/10 p-2 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl backdrop-blur-xl cursor-default"
            >
              <img 
                src={aiImages[selectedIdx]} 
                alt={`AI Usage Screenshot ${selectedIdx + 1}`} 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>

            {/* Right Control */}
            <button 
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer hover:scale-110 transition-transform z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIUsage;
