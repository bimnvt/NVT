import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="about" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/QdFmsVpL/archi-render-mt8lmbu3d.png"
          alt="Luxury Modern Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-gold-500 rounded-full text-gold-400 text-sm font-semibold mb-6 tracking-widest uppercase bg-black/30 backdrop-blur-sm">
            KTHomes Construction
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Kiến Tạo Không Gian <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">
              Sống Đẳng Cấp
            </span> Tại Ninh Bình
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Chất lượng vượt trội hơn cả lời hứa. Chúng tôi mang đến giải pháp thiết kế & thi công nhà phố, biệt thự trọn gói với chi phí tối ưu nhất.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#lead-magnet"
              className="px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white font-bold rounded-sm text-lg transition-all transform hover:scale-105 shadow-gold-900/20 shadow-lg flex items-center justify-center gap-2"
            >
              Tư Vấn Miễn Phí
              <ChevronRight size={20} />
            </a>
            <a 
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-dark-900 text-white font-bold rounded-sm text-lg transition-all flex items-center justify-center"
            >
              Xem Dự Án
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;