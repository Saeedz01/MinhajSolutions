'use client';

import { Mail, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/80"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Badge */}
            <div className="mb-6">
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
                Start Your Journey
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your <span className="text-cyan-600">Business?</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
              Let's discuss how our 134 specialized services can help you achieve your goals. Get in touch with us today for a free consultation and project estimate.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group px-8 py-4 bg-cyan-800 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-lg w-full sm:w-auto">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Get Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center gap-3 text-lg w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24h</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">Free</div>
                <div className="text-gray-300 text-sm">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-sm">Confidential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}