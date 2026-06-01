import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
  {
    criterion: 'Tồn tại xã hội',
    old: 'Kinh tế bao cấp/mới mở cửa, thiếu thốn, đề cao sự an toàn và ổn định.',
    young: 'Kinh tế hội nhập, đầy đủ, đề cao sự tự do, sáng tạo và trải nghiệm cá nhân.'
  },
  {
    criterion: 'Hôn nhân & Sinh con',
    old: 'Kết hôn sớm, sinh nhiều con, coi đó là nghĩa vụ với gia đình và xã hội.',
    young: 'Kết hôn muộn, sinh ít hoặc không sinh, đề cao sự sẵn sàng về tài chính và tâm lý.'
  },
  {
    criterion: 'Lối sống & Tiêu dùng',
    old: 'Tiết kiệm, tích lũy tài sản (đất đai, vàng) cho tương lai và con cháu.',
    young: 'Đầu tư cho bản thân, ưu tiên chất lượng cuộc sống và trải nghiệm hiện tại.'
  },
  {
    criterion: 'Giá trị truyền thống (Tết)',
    old: 'Giữ gìn nghiêm ngặt phong tục, thăm hỏi họ hàng, thờ cúng.',
    young: 'Tối giản hóa phong tục, coi Tết là thời gian nghỉ ngơi, du lịch cá nhân.'
  }
];

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-secondary/20 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Tổng hợp</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Bảng phân tích đối chiếu <br/><span className="text-gradient">ý thức thế hệ</span></h3>
        </div>

        <div className="space-y-6">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-6 px-6 py-4 border-b border-white/10 text-gray-400 text-sm tracking-widest uppercase font-semibold">
            <div className="col-span-3">Tiêu chí</div>
            <div className="col-span-4 text-accentGold">Thế hệ Cha Mẹ</div>
            <div className="col-span-5 text-accentBlue">Thế hệ Trẻ</div>
          </div>

          {/* Data Rows */}
          {comparisonData.map((row, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
            >
              <div className="col-span-1 md:col-span-3 flex items-center">
                <h4 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">{row.criterion}</h4>
              </div>
              
              <div className="col-span-1 md:col-span-4 flex items-center">
                <div className="md:hidden text-xs text-accentGold uppercase mb-2 font-semibold">Thế hệ Cha Mẹ</div>
                <p className="text-gray-300 font-light leading-relaxed">{row.old}</p>
              </div>
              
              <div className="col-span-1 md:col-span-5 flex items-center relative">
                <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
                <div>
                  <div className="md:hidden text-xs text-accentBlue uppercase mt-4 mb-2 font-semibold">Thế hệ Trẻ</div>
                  <p className="text-gray-300 font-light leading-relaxed">{row.young}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
