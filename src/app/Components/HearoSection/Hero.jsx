'use client';

import { CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-24 text-center">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <br className="hidden sm:block" />
            Cutting-Edge Solutions
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            From custom software development to digital marketing excellence.
            <br className="hidden sm:block" />
            We deliver 134 specialized services across 4 core categories to help your
            <br className="hidden sm:block" />
            business thrive.
          </p>

          {/* Stats Cards */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {[
                { title: '10+ Years', subtitle: 'Expert team experience' },
                { title: '500+ Projects', subtitle: 'Successfully delivered' },
                { title: '98% Satisfaction', subtitle: 'Client satisfaction rate' },
              ].map((card, i) => (
                <div
                  key={i}
                  className="w-full max-w-[320px] backdrop-blur-sm bg-slate-800/20 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/30 transition-all duration-300 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="text-lg font-bold text-white mb-1">
                      {card.title}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/Contact')}
              className="px-10 py-4 bg-cyan-800 text-white font-medium rounded-lg hover:bg-cyan-900 transition-colors duration-300 w-full sm:w-auto text-lg flex items-center justify-center gap-2"
            >
              Let&apos;s Talk
              <span className="text-xl">→</span>
            </button>

            <button
              className="px-10 py-4 bg-transparent border-2 border-gray-400 text-white font-medium rounded-lg hover:bg-gray-900/50 transition-all duration-300 w-full sm:w-auto text-lg flex items-center justify-center gap-2"
            >
              Explore Our Services
              <span className="text-xl">→</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
