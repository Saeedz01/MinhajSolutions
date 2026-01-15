'use client'

import { useState } from 'react';

export default function Articles() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Software Development',
    'Mobile App',
    'E-Commerce',
    'Cloud Solutions',
    'Web Design'
  ];

  const caseStudies = [
    {
      id: 1,
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
      industry: "Fashion & Retail",
      title: "E-Commerce Platform for Luxury Fashion Brands",
      slug: "e-commerce-platform-for-luxury-fashion-brands",
      description: "Created a premium e-commerce platform supporting multiple luxury brands, resulting in 250% increase in online sales and 45%...",
      duration: "6 months",
      team: "10 developers"
    },
    {
      id: 2,
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
      industry: "Financial Services",
      title: "Mobile Banking Application for FinTech Startup",
      slug: "mobile-banking-application-for-fintech-startup",
      description: "Developed a secure mobile banking app with biometric authentication, enabling 100,000+ users to manage their finances...",
      duration: "10 months",
      team: "14 developers"
    },
    {
      id: 3,
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074",
      industry: "Technology",
      title: "SaaS Project Management Platform",
      slug: "saas-project-management-platform",
      description: "Built a comprehensive SaaS project management platform serving 5,000+ teams worldwide, with features for task...",
      duration: "9 months",
      team: "13 developers"
    },
    {
      id: 4,
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
      industry: "Technology",
      title: "Complete Website Redesign for Corporate Brand",
      slug: "complete-website-redesign-for-corporate-brand",
      description: "Redesigned and rebuilt corporate website with modern design, resulting in 180% increase in organic traffic and 65%...",
      duration: "4 months",
      team: "6 developers"
    },
    {
      id: 5,
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      industry: "Retail & Analytics",
      title: "AI-Powered Analytics Platform for Retail",
      slug: "ai-powered-analytics-platform-for-retail",
      description: "Developed an AI-powered analytics platform that provides predictive insights for retail operations, increasing sales by 22% and...",
      duration: "11 months",
      team: "16 developers"
    }
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-cyan-800 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image with Category Badge */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-cyan-800 text-white rounded text-sm font-medium">
                  {study.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-cyan-800 text-sm font-semibold mb-2">
                  {study.industry}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{study.team}</span>
                  </div>
                </div>

                {/* CTA Link */}
                <a 
                  href={`/Portfolio/${study.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-800 font-semibold hover:gap-3 transition-all duration-200"
                >
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}