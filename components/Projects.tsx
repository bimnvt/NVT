import React from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Biệt thự Vườn Tam Điệp",
    category: "Biệt thự hiện đại",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Nhà Phố 3 Tầng TP Ninh Bình",
    category: "Nhà phố",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Nhà Mái Thái Yên Khánh",
    category: "Nhà vườn",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Biệt Thự Tân Cổ Điển",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1600596542815-3ad19fb812a7?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Nhà Ống Hiện Đại",
    category: "Nhà phố",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Cải Tạo Nhà Cũ Nho Quan",
    category: "Cải tạo",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1600&auto=format&fit=crop"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold tracking-wider uppercase mb-2 text-sm">Dự Án Tiêu Biểu</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900">
            Công Trình Đã Thực Hiện
          </h3>
          <div className="w-20 h-1 bg-gold-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-72">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-400 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h4 className="text-white text-xl font-bold mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button className="px-8 py-3 border-2 border-dark-900 text-dark-900 font-semibold hover:bg-dark-900 hover:text-white transition-all rounded-sm">
             Xem Tất Cả Dự Án
           </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;