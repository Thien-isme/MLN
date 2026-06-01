import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
  {
    criterion: 'Tồn tại xã hội',
    old: (
      <div className="space-y-2">
        <p className="font-semibold text-accentGold/90 text-sm">Bối cảnh lịch sử:</p>
        <p className="text-sm">Kinh tế kế hoạch hóa bao cấp, tự cấp tự túc, nông nghiệp truyền thống đóng vai trò chủ đạo. Đời sống thiếu thốn, thông tin hạn chế, gắn kết cộng đồng làng xã rất cao.</p>
      </div>
    ),
    young: (
      <div className="space-y-2">
        <p className="font-semibold text-accentBlue/90 text-sm">Bối cảnh lịch sử:</p>
        <p className="text-sm">Kinh tế thị trường, công nghiệp hóa, hiện đại hóa và hội nhập toàn cầu sâu rộng. Bùng nổ Internet, mạng xã hội và áp lực cạnh tranh kinh tế lớn (KPI).</p>
      </div>
    )
  },
  {
    criterion: 'Hôn nhân & Sinh con',
    old: (
      <div className="space-y-2">
        <div>
          <p className="font-semibold text-accentGold/90 text-sm">Quan niệm:</p>
          <p className="text-sm">"An cư lạc nghiệp", kết hôn sớm, sinh nhiều con.</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bản chất Triết học:</p>
          <p className="text-gray-400 text-xs leading-relaxed">Phản ánh phương thức sản xuất cũ (cần nhiều lao động chân tay) và tư duy "sinh con để nhờ cậy lúc tuổi già" khi hệ thống an sinh xã hội chưa hoàn thiện.</p>
        </div>
      </div>
    ),
    young: (
      <div className="space-y-2">
        <div>
          <p className="font-semibold text-accentBlue/90 text-sm">Quan niệm:</p>
          <p className="text-sm">Xu hướng kết hôn muộn, sống độc thân hoặc ngại sinh con.</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bản chất Triết học:</p>
          <p className="text-gray-400 text-xs leading-relaxed">Phản ánh áp lực kinh tế hiện đại (chi phí nuôi dạy con quá cao), sự tự lập về tài chính và nhu cầu khẳng định giá trị cá nhân của giới trẻ.</p>
        </div>
      </div>
    )
  },
  {
    criterion: 'Lối sống & Tiêu dùng',
    old: (
      <div className="space-y-2">
        <div>
          <p className="font-semibold text-accentGold/90 text-sm">Quan niệm:</p>
          <p className="text-sm">Đề cao tích lũy, "thắt lưng buộc bụng", "ăn chắc mặc bền".</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bản chất Triết học:</p>
          <p className="text-gray-400 text-xs leading-relaxed">Tâm lý xã hội hình thành từ trải nghiệm vượt qua thời kỳ khan hiếm hàng hóa, vật chất, luôn cần tích trữ để phòng ngừa rủi ro.</p>
        </div>
      </div>
    ),
    young: (
      <div className="space-y-2">
        <div>
          <p className="font-semibold text-accentBlue/90 text-sm">Quan niệm:</p>
          <p className="text-sm">Ưu tiên trải nghiệm dịch vụ, mua sắm thông minh, chi tiền cho sức khỏe tinh thần.</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bản chất Triết học:</p>
          <p className="text-gray-400 text-xs leading-relaxed">Phản ánh một nền kinh tế hàng hóa phong phú, văn hóa tiêu dùng hiện đại, nơi mà việc tái tạo sức lao động tinh thần được coi trọng.</p>
        </div>
      </div>
    )
  },
  {
    criterion: 'Giá trị truyền thống (Tết)',
    old: (
      <div className="space-y-2">
        <div>
          <p className="font-semibold text-accentGold/90 text-sm">Quan niệm:</p>
          <p className="text-sm">Chuẩn bị mâm cao cỗ đầy, bám sát các nghi lễ thủ tục nghiêm ngặt, sum họp bắt buộc.</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bản chất Triết học:</p>
          <p className="text-gray-400 text-xs leading-relaxed">Ý thức hệ coi trọng tính cộng đồng và tôn ti trật tự để duy trì sự ổn định của cấu trúc gia đình truyền thống.</p>
        </div>
      </div>
    ),
    young: (
      <div className="space-y-2">
        <div>
          <p className="font-semibold text-accentBlue/90 text-sm">Quan niệm:</p>
          <p className="text-sm">Tết tinh gọn, đơn giản hóa thủ tục lễ nghi, xu hướng đi du lịch hoặc nghỉ ngơi xả stress.</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bản chất Triết học:</p>
          <p className="text-gray-400 text-xs leading-relaxed">Sự thích nghi của con người trước nhịp sống công nghiệp bận rộn; chuyển từ nhu cầu "ăn Tết" sang "nghỉ Tết" và tự do cá nhân.</p>
        </div>
      </div>
    )
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
                <div className="w-full">
                  <div className="md:hidden text-xs text-accentGold uppercase mb-2 font-semibold">Thế hệ Cha Mẹ</div>
                  <div className="text-gray-300 font-light leading-relaxed">{row.old}</div>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-5 flex items-center relative">
                <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
                <div className="w-full md:pl-4">
                  <div className="md:hidden text-xs text-accentBlue uppercase mt-4 mb-2 font-semibold">Thế hệ Trẻ</div>
                  <div className="text-gray-300 font-light leading-relaxed">{row.young}</div>
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
