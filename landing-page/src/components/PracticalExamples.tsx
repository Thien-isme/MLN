import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PracticalExamples: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.compare-item') as HTMLElement[];
      
      items.forEach((item) => {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const parentsData = [
    { title: 'Kinh tế kế hoạch hóa', desc: 'Nền kinh tế tự cấp tự túc, nông nghiệp truyền thống đóng vai trò chủ đạo.' },
    { title: 'Đời sống thiếu thốn', desc: 'Đời sống vật chất còn nhiều khó khăn, thiếu thốn, tạo thói quen tiết kiệm và phòng ngừa rủi ro.' },
    { title: 'Thông tin hạn chế', desc: 'Giao lưu quốc tế ít, thông tin chủ yếu mang tính cục bộ.' },
    { title: 'Gắn kết cộng đồng', desc: 'Tình làng nghĩa xóm rất cao, đề cao sự sẻ chia và tương tác trực tiếp.' }
  ];

  const youthData = [
    { title: 'Kinh tế thị trường', desc: 'Kinh tế mở, công nghiệp hóa, hiện đại hóa mở ra nhiều cơ hội phát triển.' },
    { title: 'Bùng nổ công nghệ số', desc: 'Sự bùng nổ của Internet, mạng xã hội kết nối thông tin tức thời toàn cầu.' },
    { title: 'Hội nhập toàn cầu', desc: 'Hội nhập văn hóa toàn cầu sâu rộng, lối sống cởi mở và đề cao tự do cá nhân.' },
    { title: 'Áp lực cạnh tranh lớn', desc: 'Cạnh tranh kinh tế khốc liệt và áp lực công việc (KPI) đè nặng lên đời sống thường nhật.' }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Ví dụ thực tế & Bối cảnh</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Bối cảnh <span className="text-gradient">"Tồn tại xã hội"</span> & Mua đất
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto font-light mt-4">
            Để hiểu vì sao thế hệ cha mẹ coi trọng việc tích lũy mua đất đai, trong khi giới trẻ có xu hướng chi tiêu trải nghiệm và chấp nhận thuê nhà, hãy nhìn vào sự khác biệt trong điều kiện sinh hoạt vật chất (Tồn tại xã hội) ở hai thời kỳ.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          {/* Divider Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>
          
          {/* Left Column - Parents */}
          <div className="flex-1 space-y-12 pr-0 md:pr-12">
            <div className="sticky top-32 z-20 pb-8 bg-background/80 backdrop-blur-md">
              <h4 className="text-3xl font-serif text-accentGold mb-6 text-center md:text-right">
                Thế hệ Cha Mẹ
              </h4>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-accentGold/20 hidden md:block">
                <img src="/parents_lifestyle.png" alt="Parents Lifestyle" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="space-y-16 mt-0">
              {parentsData.map((item, i) => (
                <div key={i} className="compare-item flex flex-col md:items-end text-left md:text-right relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute right-[-54px] top-4 w-3 h-3 rounded-full bg-accentGold ring-4 ring-accentGold/20 z-10"></div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl w-full max-w-sm hover:bg-white/10 transition-colors">
                    <h5 className="text-xl font-bold mb-2 text-white">{item.title}</h5>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Youth */}
          <div className="flex-1 space-y-12 pl-0 md:pl-12 mt-20 md:mt-0">
            <div className="sticky top-32 z-20 pb-8 bg-background/80 backdrop-blur-md text-center md:text-left">
              <h4 className="text-3xl font-serif text-accentBlue mb-6">
                Giới trẻ ngày nay
              </h4>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-accentBlue/20 hidden md:block">
                <img src="/youth_lifestyle.png" alt="Youth Lifestyle" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="space-y-16 mt-0">
              {youthData.map((item, i) => (
                <div key={i} className="compare-item flex flex-col items-start relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-[-54px] top-4 w-3 h-3 rounded-full bg-accentBlue ring-4 ring-accentBlue/20 z-10"></div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl w-full max-w-sm hover:bg-white/10 transition-colors">
                    <h5 className="text-xl font-bold mb-2 text-white">{item.title}</h5>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalExamples;
