'use client';

import { Briefcase, Satellite, Zap, Building2, ShoppingBag, Rocket } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      id: 1,
      icon: Briefcase,
      title: 'Travel & Hospitality',
      description: 'Transforming guest experiences with innovative technology solutions'
    },
    {
      id: 2,
      icon: Satellite,
      title: 'Telecommunication',
      description: 'Enabling seamless connectivity and communication infrastructure'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Oil, Gas, and Energy',
      description: 'Powering the energy sector with advanced digital solutions'
    },
    {
      id: 4,
      icon: Building2,
      title: 'Public Sector',
      description: 'Supporting government initiatives with secure, scalable systems'
    },
    {
      id: 5,
      icon: ShoppingBag,
      title: 'Retail & CPG',
      description: 'Driving retail innovation and consumer engagement platforms'
    },
    {
      id: 6,
      icon: Rocket,
      title: 'Startups',
      description: 'Accelerating startup growth with agile technology solutions'
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Discover our Impact Across Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver tailored technology solutions that drive success across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-800 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                      <IconComponent className="w-8 h-8 text-cyan-800" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {industry.title}
                    </h3>
                    {/* Underline Bar - Grey by default, animates to Cyan on hover */}
                    <div className="relative mb-3">
                      <div className="w-[440px] h-[1px] bg-gray-300"></div>
                      <div className="absolute top-0 left-0 w-0 h-[1px] bg-cyan-800 transition-all duration-300 ease-in-out group-hover:w-[440px]"></div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
          href='/Contact'
          className="px-10 py-4 bg-cyan-800 text-white font-semibold rounded-lg hover:bg-cyan-800 transition-all duration-300 inline-flex items-center gap-2 text-lg shadow-lg">
            Let's Talk Business
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}