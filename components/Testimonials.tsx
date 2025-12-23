import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Anh Tuấn",
    role: "Chủ nhà tại Tam Điệp",
    content: "Tôi rất hài lòng với KTHomes. Đội ngũ làm việc chuyên nghiệp, tư vấn nhiệt tình từ khâu thiết kế đến thi công. Quan trọng nhất là không phát sinh chi phí so với dự toán ban đầu.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 2,
    name: "Chị Lan Anh",
    role: "Chủ nhà tại TP Ninh Bình",
    content: "Nhà đẹp hơn bản vẽ 3D! Các bạn kỹ sư giám sát rất kỹ, vật tư đúng cam kết. Cảm ơn KTHomes đã giúp vợ chồng mình có được ngôi nhà mơ ước với chi phí rất hợp lý.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 3,
    name: "Chú Hùng",
    role: "Chủ nhà tại Yên Mô",
    content: "Làm việc có tâm. Tôi kỹ tính nhưng KTHomes đã thuyết phục được tôi bằng sự tỉ mỉ trong từng đường nét phào chỉ. Tiến độ nhanh, bàn giao nhà đúng hẹn.",
    avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold tracking-wider uppercase mb-2 text-sm">Đánh Giá</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative">
              <Quote className="absolute top-6 right-6 text-gold-200 w-10 h-10" />
              
              <div className="flex items-center gap-1 text-gold-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
                />
                <div>
                  <h4 className="font-bold text-dark-900">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;