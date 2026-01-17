'use client';

import { Users, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export default function TrustedStatsSection() {
  const stats = [
    { id: 1, icon: Users, number: '500+', label: 'Clients Served' },
    { id: 2, icon: TrendingUp, number: '1200+', label: 'Projects Completed' },
    { id: 3, icon: CheckCircle, number: '98%', label: 'Client Satisfaction' },
    { id: 4, icon: Clock, number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="bg-cyan-900 min-h-[24rem] flex items-center px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto w-full">
    
    {/* Header */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
        Trusted by Businesses Worldwide
      </h2>
      <p className="text-cyan-100 text-base sm:text-base md:text-lg">
        Our numbers speak for themselves
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-cyan-800/40 border border-cyan-700/50 rounded-xl px-6 py-6 text-center h-full hover:bg-cyan-800/60 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 sm:w-14 sm:h-14 bg-cyan-700/50 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Number */}
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
              {stat.number}
            </div>

            {/* Label */}
            <p className="text-cyan-100 text-sm sm:text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}
