import React from 'react';
import { motion } from 'framer-motion';
import { Ban, MessageCircle, AlertTriangle } from 'lucide-react';

const principles = [
  {
    icon: <Ban className="w-6 h-6 text-red-400" />,
    image: '/principle_1.png',
    title: 'Tôn trọng sự khác biệt thời đại',
    desc: 'Không lấy tiêu chuẩn thời đại này để áp đặt, phán xét thời đại khác. Cha mẹ có lý do của cha mẹ, người trẻ có lý do của người trẻ.',
    glow: 'hover:shadow-[0_0_40px_rgba(248,113,113,0.15)]',
    borderColor: 'group-hover:border-red-400/30'
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-accentBlue" />,
    image: '/principle_2.png',
    title: 'Chủ động đối thoại',
    desc: 'Thay vì chỉ trích, các thế hệ cần cởi mở chia sẻ bối cảnh của mình để tạo sự thấu hiểu, thu hẹp khoảng cách.',
    glow: 'hover:shadow-[0_0_40px_rgba(79,140,255,0.15)]',
    borderColor: 'group-hover:border-accentBlue/30'
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
    image: '/principle_3.png',
    title: 'Tránh hai xu hướng cực đoan',
    desc: 'Tránh bảo thủ định kiến (khăng khăng giữ tư duy cũ kỹ không phù hợp) và phủ nhận sạch trơn (coi thường truyền thống). Giữ gìn bản sắc và chủ động tiếp thu cái mới.',
    glow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]',
    borderColor: 'group-hover:border-amber-400/30'
  }
];

const FinalMessage: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-secondary/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Bài học nhận thức</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Bài học cho sự <br/><span className="text-gradient">phát triển & hòa hợp</span></h3>
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
