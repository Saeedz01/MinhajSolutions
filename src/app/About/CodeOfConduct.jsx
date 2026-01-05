import React from 'react';
import Image from 'next/image';

const CodeOfConduct = () => {
  const principles = [
    "Ethical business practices and transparency",
    "Fair treatment of all stakeholders",
    "Compliance with all legal requirements",
    "Accountability and responsibility"
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modern office workspace with monitors"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <button className="mb-6 px-6 py-2 bg-white text-cyan-900 rounded-full text-sm border border-gray-200 font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Code of Conduct
            </button>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Code of <span className="text-cyan-900">Business Principles</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Minhaj Solutions prioritizes legal and ethical conduct, ensuring honesty,
              fairness, and accountability for all. We are committed to maintaining the
              highest standards of integrity in all our business dealings.
            </p>

            {/* Principles List */}
            <div className="space-y-4 mb-8">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{principle}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group px-8 py-4 bg-white text-cyan-900 rounded-xl font-semibold border-2 border-cyan-900 hover:bg-cyan-900 hover:text-white transition-all duration-300 flex items-center gap-2">
              Access Our Code of Business Principles
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;