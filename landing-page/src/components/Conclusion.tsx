import React from 'react';
import { motion } from 'framer-motion';
import { Layers, RefreshCw, Zap } from 'lucide-react';

const Conclusion: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-background">
      {/* Background Image */}
      <img src="/abstract_structure.png" alt="Abstract Structure" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-accentBlue/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-widest text-accentBlue uppercase mb-6">Kết luận Triết học</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 leading-tight">
            Tư duy khác nhau vì <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-accentGold">hoàn cảnh sống khác nhau</span>
          </h3>
        </motion.div>

        {/* Infographic Area */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-20">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-8 bg-secondary/40 border border-white/10 rounded-full w-64 h-64 justify-center relative group"
          >
            <div className="absolute inset-0 rounded-full bg-accentBlue/10 blur-xl group-hover:bg-accentBlue/20 transition-all duration-500"></div>
            <Layers className="w-12 h-12 text-accentBlue mb-4 relative z-10" />
            <span className="font-semibold text-lg relative z-10">Tồn tại xã hội</span>
            <span className="text-accentBlue font-bold text-xl mt-2 relative z-10">THAY ĐỔI</span>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, rotate: -90 }}
             whileInView={{ opacity: 1, rotate: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.5 }}
             className="text-gray-500"
          >
             <RefreshCw className="w-10 h-10 animate-spin-slow" style={{ animationDuration: '4s' }} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center p-8 bg-secondary/40 border border-white/10 rounded-full w-64 h-64 justify-center relative group"
          >
            <div className="absolute inset-0 rounded-full bg-accentGold/10 blur-xl group-hover:bg-accentGold/20 transition-all duration-500"></div>
            <Zap className="w-12 h-12 text-accentGold mb-4 relative z-10" />
            <span className="font-semibold text-lg relative z-10">Ý thức xã hội</span>
            <span className="text-accentGold font-bold text-xl mt-2 relative z-10">THAY ĐỔI</span>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default Conclusion;
