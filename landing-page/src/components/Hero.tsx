import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0 flex w-full h-full z-0">
        <div className="w-1/2 h-full relative overflow-hidden bg-background">
          <img src="/old_vietnam.png" alt="1990s Vietnam" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale sepia-[.3]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white/10 text-9xl font-serif italic z-10">1990s</div>
        </div>
        <div className="w-1/2 h-full relative overflow-hidden bg-background">
          <img src="/modern_city.png" alt="Modern City" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
          <div className="absolute top-20 right-10 text-white/10 text-9xl font-sans font-bold z-10">2020s</div>
        </div>
      </div>

      {/* Central timeline line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 z-0"
      />

      <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-widest text-accentGold mb-6 inline-block uppercase">
            Triết học Mác - Lênin
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Tại sao Gen Z và Cha Mẹ lại <br className="hidden md:block"/> 
          <span className="text-gradient">suy nghĩ khác nhau?</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl font-light leading-relaxed"
        >
          Sự khác biệt giữa các thế hệ không phải ngẫu nhiên mà được hình thành từ những điều kiện xã hội khác nhau.
        </motion.p>

        <motion.a 
          href="#dat-van-de"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:scale-105 overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accentBlue/0 via-accentBlue/20 to-accentGold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
          <span className="relative flex items-center gap-2">
            Khám phá ngay
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </span>
        </motion.a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
};

export default Hero;
