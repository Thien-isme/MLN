import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-background text-center relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-accentGold/5 rounded-t-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">
          Bài thuyết trình • Nhóm 3
        </span>
        
        <h2 className="text-xl md:text-2xl font-bold mb-2">Triết học Mác – Lênin (MLN111)</h2>
        <p className="text-gray-400 font-light max-w-2xl mb-2">
          Đề tài: "Phân tích sự khác biệt trong ý thức thế hệ: Góc nhìn Duy vật lịch sử"
        </p>
        <p className="text-gray-500 font-light text-sm">
          Giảng viên hướng dẫn: Nguyễn Văn Bình
        </p>

        <div className="mt-12 text-sm text-gray-600">
          © {new Date().getFullYear()} - Premium Educational Landing Page
        </div>
      </div>
    </footer>
  );
};

export default Footer;
