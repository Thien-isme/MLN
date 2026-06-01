import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Users, Calendar } from 'lucide-react';

const topics = [
  {
    title: 'Hôn nhân & Sinh con',
    icon: <Heart className="w-6 h-6 text-accentGold" />,
    image: '/topic_marriage.png',
    descOld: 'Thế hệ trước: Coi trọng việc lập gia đình sớm ổn định, sinh con đẻ cái khi còn trẻ.',
    descYoung: 'Giới trẻ: Xu hướng kết hôn muộn, sống độc thân hoặc ngại sinh con.',
    color: 'group-hover:border-accentGold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]'
  },
  {
    title: 'Lối sống & Tiêu dùng',
    icon: <ShoppingBag className="w-6 h-6 text-accentBlue" />,
    image: '/topic_lifestyle.png',
    descOld: 'Thế hệ trước: Đề cao tích cóp, "ăn chắc mặc bền", sống gói ghém, vun vén cho tương lai.',
    descYoung: 'Giới trẻ: Thích trải nghiệm, chi tiêu cho tinh thần, công nghệ.',
    color: 'group-hover:border-accentBlue/50 group-hover:shadow-[0_0_30px_rgba(79,140,255,0.2)]'
  },
  {
    title: 'Cá nhân vs Cộng đồng',
    icon: <Users className="w-6 h-6 text-purple-400" />,
    image: '/topic_community.png',
    descOld: 'Thế hệ trước: Thích sống kiểu cộng đồng, đề cao sự gắn kết, sẻ chia và tương tác trực tiếp.',
    descYoung: 'Giới trẻ: Đề cao cái tôi và sự tự do cá nhân hơn.',
    color: 'group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]'
  },
  {
    title: 'Quan niệm về Tết',
    icon: <Calendar className="w-6 h-6 text-emerald-400" />,
    image: '/topic_tet.png',
    descOld: 'Thế hệ trước: Thích tết được quây quần, đoàn tụ, duy trì sợi dây gắn kết gia đình bền chặt.',
    descYoung: 'Giới trẻ: Mong muốn tết được đi du lịch xả stress, không muốn ở nhà dọn dẹp tiếp khách.',
    color: 'group-hover:border-emerald-400/50 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]'
  }
];

const Introduction: React.FC = () => {
  return (
    <section id="dat-van-de" className="py-32 px-6 bg-background relative z-10 overflow-hidden">
      {/* Background Image */}
      <img src="/conflict_bg.png" alt="Conflict Background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Đặt vấn đề</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Những khía cạnh mâu thuẫn <br/><span className="text-gradient">điển hình</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`topic-card group relative p-6 rounded-3xl bg-secondary/50 border border-white/5 transition-all duration-500 overflow-hidden ${topic.color} hover:-translate-y-2 min-h-[260px] flex flex-col justify-end`}
            >
              {/* Card Background Image */}
              <img src={topic.image} alt={topic.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform">
                   {topic.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{topic.title}</h4>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-3 transition-all duration-300">
                  <p className="text-gray-300 text-xs leading-relaxed mb-2 border-b border-white/5 pb-2">
                    {topic.descOld}
                  </p>
                  <p className="text-gray-200 text-xs leading-relaxed font-semibold">
                    {topic.descYoung}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
