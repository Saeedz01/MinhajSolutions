'use client';

import { Search, FileText, Settings, BarChart3, Check } from 'lucide-react';

export default function ProvenProcessSection() {
  const steps = [
    {
      id: 1,
      number: 'STEP 1',
      icon: Search,
      title: 'Discovery & Assessment',
      description: 'We start by understanding your business needs and IT challenges through in-depth consultations.',
      items: ['Initial consultation', 'Needs analysis'],
      align: 'left'
    },
    {
      id: 2,
      number: 'STEP 2',
      icon: FileText,
      title: 'Strategy Development',
      description: 'Our team creates a customized roadmap tailored to your goals and technological requirements.',
      items: ['Custom solution design', 'Detailed planning'],
      align: 'right'
    },
    {
      id: 3,
      number: 'STEP 3',
      icon: Settings,
      title: 'Implementation',
      description: 'We execute the strategy with precision, whether providing staff, implementing solutions, or both.',
      items: [],
      align: 'left'
    },
    {
      id: 4,
      number: 'STEP 4',
      icon: BarChart3,
      title: 'Monitoring & Optimization',
      description: 'We continuously monitor performance and make adjustments to ensure optimal results.',
      items: [],
      align: 'right'
    }
  ];

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-800 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-cyan-800 rounded-full"></div>
            <span className="font-semibold text-sm">Our Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600">
            We follow a structured approach to deliver consistent, high-quality results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-cyan-300 h-full hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLeft = step.align === 'left';
              
              return (
                <div key={step.id} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-start">
                    {/* Left Side */}
                    {isLeft ? (
                      <>
                        <div className="text-right pr-12">
                          <span className="text-cyan-800 font-semibold text-sm mb-2 block">
                            {step.number}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {step.description}
                          </p>
                          {step.items.length > 0 && (
                            <div className="space-y-2">
                              {step.items.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-end gap-2">
                                  <span className="text-gray-700 text-sm">{item}</span>
                                  <Check className="w-4 h-4 text-cyan-800" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div></div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div className="pl-12">
                          <span className="text-cyan-800 font-semibold text-sm mb-2 block">
                            {step.number}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {step.description}
                          </p>
                          {step.items.length > 0 && (
                            <div className="space-y-2">
                              {step.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <Check className="w-4 h-4 text-cyan-800" />
                                  <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden pl-16">
                    <span className="text-cyan-800 font-semibold text-sm mb-2 block">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    {step.items.length > 0 && (
                      <div className="space-y-2">
                        {step.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-cyan-800" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:transform md:-translate-x-1/2">
                    <div className="w-14 h-14 bg-cyan-900 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}