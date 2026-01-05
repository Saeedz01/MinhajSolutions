'use client';

import { CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 text-center mt-12">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Business with<br />Cutting-Edge Solutions
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            From custom software development to digital marketing excellence. We<br className="hidden sm:block" />
            deliver 134 specialized services across 4 core categories to help your<br className="hidden sm:block" />
            business thrive.
          </p>

          {/* Stats Cards */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-center gap-6 mb-12">
             {[
               { title: "10+ Years", subtitle: "Expert team experience" },
               { title: "500+ Projects", subtitle: "Successfully delivered" },
               { title: "98% Satisfaction", subtitle: "Client satisfaction rate" },
             ].map((card, i) => (
               <div
                 key={i}
                 className="flex flex-1 min-w-[250px] max-w-[300px] backdrop-blur-sm bg-slate-800/20 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/30 transition-all duration-300"
               >
                 <CheckCircle2 className="w-8 h-8 text-emerald-400 mr-4 flex-shrink-0" />
                 <div>
                   <div className="text-lg font-bold text-white mb-1">{card.title}</div>
                   <div className="text-gray-300 text-sm">{card.subtitle}</div>
                 </div>
               </div>
             ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-cyan-800 text-white font-medium rounded-lg hover:bg-cyan-900 transition-colors duration-300 w-full sm:w-auto text-lg flex items-center justify-center gap-2">
              Let's Talk
              <span className="text-xl">→</span>
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-gray-400 text-white font-medium rounded-lg hover:bg-gray-900/50 hover:text-slate- transition-all duration-300 w-full sm:w-auto text-lg flex items-center justify-center gap-2">
              Explore Our Services
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}