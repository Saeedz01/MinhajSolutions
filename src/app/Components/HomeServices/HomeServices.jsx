'use client';

import { useState } from 'react';

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Custom Software &',
      subtitle: 'Enterprise Solutions',
      slug: 'custom-software-and-enterprise-solutions',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
      description: 'Tailored software solutions designed to meet your unique business needs. From CRM systems to complex enterprise applications, we build scalable and secure platforms.'
    },
    {
      id: 2,
      title: 'Web & Platform',
      subtitle: 'Development',
      slug: 'web-and-platform-development',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      description: 'Modern, responsive websites and web applications that drive engagement. We create stunning digital experiences using the latest technologies and best practices.'
    },
    {
      id: 3,
      title: 'Mobile App',
      subtitle: 'Development',
      slug: 'mobile-app-development',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop',
      description: 'Native and cross-platform mobile applications for iOS and Android. We deliver seamless user experiences that keep your customers engaged on any device.'
    },
    {
      id: 4,
      title: 'AI, Data &',
      subtitle: 'Intelligent Automation',
      slug: 'ai-data-and-intelligent-automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      description: 'Harness the power of artificial intelligence and machine learning. We implement intelligent automation solutions that optimize operations and drive innovation.'
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-gray-200 rounded-full px-4 py-1">
            <div className="w-2 h-2 bg-cyan-800 rounded-full"></div>
            <span className="text-cyan-800 text-lg">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive solutions across four key categories to transform your business
          </p>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <a
              href={`/Services/${service.slug}`}
              key={service.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4]"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Default State - Title */}
                <div className={`transition-opacity duration-300 ${hoveredCard === service.id ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {service.title}<br />{service.subtitle}
                  </h3>
                </div>

                {/* Hover State - Description */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredCard === service.id ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                    {service.title}<br />{service.subtitle}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
          href='/Contact'
          className="px-10 py-4 bg-transparent border-2 border-cyan-800 text-cyan-800 font-semibold rounded-lg hover:bg-cyan-800 hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-lg">
            Let's Talk
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}