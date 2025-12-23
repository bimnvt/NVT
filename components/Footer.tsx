import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <span className="text-3xl font-bold text-white tracking-tighter">
                KT<span className="text-gold-600">Homes</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Đơn vị hàng đầu về thiết kế và thi công nội ngoại thất trọn gói tại Ninh Bình. Uy tín tạo nên thương hiệu.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">TP. Ninh Bình, Tỉnh Ninh Bình</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold-500 flex-shrink-0" size={20} />
                <a href="tel:0936340576" className="text-gray-300 hover:text-white transition-colors">0936 340 576</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gold-500 flex-shrink-0" size={20} />
                <a href="mailto:contact@kthomes.vn" className="text-gray-300 hover:text-white transition-colors">contact@kthomes.vn</a>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gold-500 hover:bg-gold-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gold-500 hover:bg-gold-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Simplified for this request, mostly links or services) */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Dịch Vụ</h3>
            <ul className="space-y-3">
              {['Thiết kế kiến trúc', 'Thi công trọn gói', 'Thiết kế nội thất', 'Cải tạo sửa chữa', 'Tư vấn phong thủy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-600 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Map */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Bản Đồ</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.6947714112061!2d106.59363998027996!3d10.861608382024114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be8ee7ea2cb%3A0x1ebae5823845b8ff!2zxJDhuqFpIGzDvSBH4bqhbyBN4bu5IER1bmc!5e1!3m2!1svi!2s!4v1766499301046!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} KTHomes. All rights reserved. Designed with <span className="text-red-500">♥</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;