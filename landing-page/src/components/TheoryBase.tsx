import React from 'react';
import { motion } from 'framer-motion';
import { Database, Lightbulb, ArrowRight } from 'lucide-react';

const TheoryBase: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background Image */}
      <img src="/theory_bg.png" alt="Theory Background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-accentGold uppercase mb-4">Cơ sở lý thuyết</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Cặp phạm trù <br/>
            <span className="text-white">Tồn tại xã hội</span> và <span className="text-white">Ý thức xã hội</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Card 1: Tồn tại xã hội */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-md p-6 rounded-3xl bg-background border border-white/10 relative overflow-hidden group hover:border-accentBlue/30 transition-colors"
          >
            {/* Header Image */}
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 relative border border-white/5">
              <img src="/social_existence.png" alt="Tồn tại xã hội" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-accentBlue/20 backdrop-blur-md flex items-center justify-center border border-accentBlue/30">
                <Database className="text-accentBlue w-6 h-6" />
              </div>
            </div>

            <div className="relative z-10 px-2">
              <h4 className="text-2xl font-bold mb-4 text-accentBlue">Tồn tại xã hội (TTXH)</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Là hoàn cảnh sống vật chất bao quanh chúng ta. Nó gồm có môi trường tự nhiên, dân số và đặc biệt là cách chúng ta lao động, kiếm sống. Trong đó, phương thức sản xuất, tức là cách kiếm sống, luôn đóng vai trò quyết định nhất."
              </p>
              <div className="border-t border-white/5 pt-4">
                <span className="text-xs uppercase tracking-wider text-gray-400 block mb-3 font-semibold">Các yếu tố cấu thành:</span>
                <ul className="space-y-3">
                  {[
                    { name: 'Phương thức sản xuất', detail: 'Yếu tố quyết định nhất' },
                    { name: 'Điều kiện tự nhiên', detail: 'Hoàn cảnh địa lý, môi trường sinh thái' },
                    { name: 'Dân cư', detail: 'Quy mô, cơ cấu, sự phân bố dân số' }
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col text-sm text-gray-300 text-left">
                      <span className="flex items-center gap-2 font-medium text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500 pl-3.5 mt-0.5">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Arrow / Connection */}
          <div className="flex flex-col items-center justify-center relative h-24 lg:h-auto lg:w-24">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute hidden lg:flex items-center justify-center w-full"
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-accentBlue to-accentGold relative overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                />
              </div>
              <ArrowRight className="text-accentGold absolute right-0 -mr-3 bg-secondary/30 rounded-full" />
            </motion.div>
            
            {/* Mobile Arrow */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute flex lg:hidden flex-col items-center justify-center h-full"
            >
              <div className="w-[2px] h-full bg-gradient-to-b from-accentBlue to-accentGold relative overflow-hidden">
                 <motion.div 
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 h-1/2 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"
                />
              </div>
              <div className="absolute bottom-0 -mb-3 rotate-90 text-accentGold bg-secondary/30 rounded-full">
                <ArrowRight />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute lg:top-1/2 lg:-translate-y-12 lg:left-1/2 lg:-translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-medium z-10"
            >
              Quyết định
            </motion.div>
          </div>

          {/* Card 2: Ý thức xã hội */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md p-6 rounded-3xl bg-background border border-white/10 relative overflow-hidden group hover:border-accentGold/30 transition-colors"
          >
            {/* Header Image */}
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 relative border border-white/5">
              <img src="/social_consciousness.png" alt="Ý thức xã hội" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-accentGold/20 backdrop-blur-md flex items-center justify-center border border-accentGold/30">
                <Lightbulb className="text-accentGold w-6 h-6" />
              </div>
            </div>

            <div className="relative z-10 px-2">
              <h4 className="text-2xl font-bold mb-4 text-accentGold">Ý thức xã hội (YTXH)</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Là mặt tinh thần của đời sống xã hội, bao gồm tâm lý xã hội và hệ tư tưởng, phản ánh tồn tại xã hội trong những giai đoạn nhất định."
              </p>
              <div className="border-t border-white/5 pt-4">
                <span className="text-xs uppercase tracking-wider text-gray-400 block mb-3 font-semibold">Các bộ phận cấu thành:</span>
                <ul className="space-y-3">
                  {[
                    { name: 'Tâm lý xã hội', detail: 'Tình cảm, ước vọng, tập quán hình thành trực tiếp' },
                    { name: 'Hệ tư tưởng', detail: 'Hệ thống quan điểm, lý luận khoa học hoặc giai cấp' },
                    { name: 'Quan niệm sống', detail: 'Nhận thức, lối sống và các giá trị tinh thần' }
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col text-sm text-gray-300 text-left">
                      <span className="flex items-center gap-2 font-medium text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-accentGold" />
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500 pl-3.5 mt-0.5">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 1 }}
           className="text-center mt-16 text-xl text-gray-400 font-light"
        >
          "Tồn tại xã hội quyết định ý thức xã hội"
        </motion.p>
      </div>
    </section>
  );
};

export default TheoryBase;
