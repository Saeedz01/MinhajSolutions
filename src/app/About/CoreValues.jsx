import React from 'react';

const CoreValues = () => {

  const coreValues = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We embrace new technologies and ideas, continually seeking ways to improve our solutions."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Integrity",
      description: "Honesty and transparency are at the heart of everything we do."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "We believe in open communication and teamwork, both internally and with clients."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Results-Driven",
      description: "Our primary goal is to deliver measurable impact for every project and partnership."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Continuous Learning",
      description: "We stay ahead of industry trends to ensure our clients benefit from the latest tech and methodologies."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Client Partnership",
      description: "We view ourselves as an extension of your team, committed to your success as true long-term partners."
    }
  ];

  const offices = [
    {
      country: "Pakistan",
      location: "Pakistan",
      type: "HEAD OFFICE",
      address: "84 A, Sahara City, Renala Khurrad, Okara, Punjab, Pakistan",
      phone: "+92 322 0681998",
      email: "info@minhajsolutions.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      country: "United Kingdom",
      location: "United Kingdom",
      type: "REGIONAL OFFICE",
      address: "124 City Road, London",
      phone: "+44 7400 719523",
      email: "info@minhajsolutions.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50">
      
      {/* Core Values Section */}
      <div className="min-h-screen flex items-center py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <button className="mb-6 px-6 py-2 bg-gray-100 text-cyan-900 rounded-full text-sm border border-gray-200 font-semibold">
              • Our Principles
            </button>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-cyan-900">Values</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are guided by six key principles that shape our work and our relationships with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-cyan-900 rounded-xl flex items-center justify-center mb-6 text-white">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence Section */}
      <div className="min-h-screen flex items-center py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <button className="mb-6 px-6 py-2 bg-white text-cyan-900 rounded-full text-sm border border-gray-200 font-semibold flex items-center gap-2 mx-auto">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              Our Global Presence
            </button>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We Support Clients <span className="text-cyan-900">Worldwide</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              We support clients in 20+ countries and drive continued growth through innovation and transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {office.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{office.country}</h3>
                    <p className="text-gray-500 text-sm">{office.location}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-900 text-xs font-semibold rounded-full">
                    {office.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {office.address}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;