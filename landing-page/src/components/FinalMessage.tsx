import React from 'react';
import { motion } from 'framer-motion';
import { Ban, HeartHandshake, TreeDeciduous } from 'lucide-react';

const principles = [
  {
    icon: <Ban className="w-6 h-6 text-red-400" />,
    image: '/principle_1.png',
    title: 'Không áp đặt',
    desc: 'Không áp đặt tiêu chuẩn của thế hệ này lên thế hệ khác, vì mỗi thế hệ sinh ra trong một điều kiện lịch sử - xã hội riêng.',
    glow: 'hover:shadow-[0_0_40px_rgba(248,113,113,0.15)]',
    borderColor: 'group-hover:border-red-400/30'
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-accentBlue" />,
    image: '/principle_2.png',
    title: 'Tăng cường thấu hiểu',
    desc: 'Sự khác biệt là tất yếu. Thấu hiểu nguồn gốc của sự khác biệt giúp thu hẹp khoảng cách giữa các thế hệ.',
    glow: 'hover:shadow-[0_0_40px_rgba(79,140,255,0.15)]',
    borderColor: 'group-hover:border-accentBlue/30'
  },
  {
    icon: <TreeDeciduous className="w-6 h-6 text-emerald-400" />,
    image: '/principle_3.png',
    title: 'Tiếp thu & Giữ gìn',
    desc: 'Giữ gìn những giá trị truyền thống cốt lõi nhưng sẵn sàng cởi mở, tiếp thu cái mới phù hợp với thời đại.',
    glow: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]',
    borderColor: 'group-hover:border-emerald-400/30'
  }
];

const FinalMessage: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-secondary/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Tổng kết</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">3 Nguyên tắc <br/><span className="text-gradient">Hòa hợp thế hệ</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/5 transition-all duration-500 hover:-translate-y-2 group ${item.glow} ${item.borderColor}`}
             >
               <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 relative border border-white/10 group-hover:border-white/20 transition-colors">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center border border-white/10">
                   {item.icon}
                 </div>
               </div>
               <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
               <p className="text-gray-400 font-light leading-relaxed">
                 {item.desc}
               </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;
