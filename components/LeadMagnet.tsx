import React, { useState } from 'react';
import { Send, CheckCircle, Gift } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '' });
    }, 1000);
  };

  return (
    <section id="lead-magnet" className="py-20 relative bg-dark-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#CA8A04 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Offer */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-gold-600/20 text-gold-400 px-4 py-1 rounded-full font-semibold text-sm">
              <Gift size={16} />
              <span>Quà Tặng Đặc Biệt</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Nhận Ngay Bộ Sưu Tập <br />
              <span className="text-gold-500">100+ Mẫu Nhà Đẹp</span> 2024
            </h2>
            <p className="text-gray-300 text-lg">
              Đăng ký ngay để nhận file PDF tổng hợp các mẫu thiết kế nhà phố, biệt thự vườn đẹp nhất, kèm dự toán chi phí chi tiết. Hoàn toàn miễn phí!
            </p>
            <ul className="space-y-3 mt-4">
              {['Thiết kế tối ưu công năng', 'Phong thủy vượng khí', 'Chi phí thi công hợp lý'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-gold-500 w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-2xl border-t-4 border-gold-600 text-gray-800">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-dark-900 mb-2">Đăng Ký Nhận Mẫu</h3>
                <p className="text-center text-gray-500 text-sm mb-6">Điền thông tin bên dưới, chúng tôi sẽ gửi ngay cho bạn.</p>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    placeholder="09xx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (để nhận file)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white font-bold py-4 rounded-md transition-all flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Gửi Mẫu Nhà Cho Tôi
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">Đăng ký thành công!</h3>
                <p className="text-gray-600">
                  Cảm ơn bạn. Chúng tôi đã gửi bộ sưu tập mẫu nhà vào email của bạn. Hãy kiểm tra cả hộp thư spam nhé!
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-gold-600 font-medium hover:underline"
                >
                  Quay lại
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;