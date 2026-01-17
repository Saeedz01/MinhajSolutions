'use client';

import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: '"Minhaj Solutions transformed our digital presence completely. Their expertise in web development and digital marketing helped us increase our revenue by 300% in just 6 months."',
      name: 'Sarah Johnson',
      title: 'CEO, TechStart Inc',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      rating: 5,
      text: '"The team\'s technical proficiency and attention to detail are exceptional. They delivered our complex AI-powered platform ahead of schedule and within budget."',
      name: 'Michael Chen',
      title: 'CTO, InnovateLabs',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      rating: 5,
      text: '"Their digital marketing strategies have been game-changing for our business. We saw a 250% increase in qualified leads within the first quarter."',
      name: 'Emily Rodriguez',
      title: 'Marketing Director, GrowthHub',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-cyan-800 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
            TESTIMONIALS
          </span>
  
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
  
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from businesses we've helped succeed
          </p>
        </div>
  
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
  
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote
                  className="w-10 h-10 sm:w-12 sm:h-12 text-gray-200"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
              </div>
  
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
  
              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow italic">
                {testimonial.text}
              </p>
  
              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=0891b2&color=fff&size=150`;
                  }}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
  
            </div>
          ))}
        </div>
  
      </div>
    </div>
  );
  
}