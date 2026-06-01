import React from 'react';
import { motion } from 'framer-motion';

const QuestionQuote: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background image */}
      <img src="/philosophical_background.png" alt="Philosophical Background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]"></div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accentGold/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-accentGold text-6xl md:text-8xl font-serif leading-none absolute -top-8 -left-8 md:-top-12 md:-left-12 opacity-50">"</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mb-8 tracking-tight">
            Những khác biệt đó xuất phát từ lựa chọn cá nhân hay do <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentGold to-amber-200">điều kiện lịch sử xã hội?</span>
          </h2>
          <span className="text-accentGold text-6xl md:text-8xl font-serif leading-none absolute -bottom-16 -right-8 md:-bottom-20 md:-right-12 opacity-50">"</span>
        </motion.div>
      </div>
    </section>
  );
};

export default QuestionQuote;
