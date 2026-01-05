'use client'

import { useState } from 'react';

// Case Study Detail Page Component
export function CaseStudyDetail({ study, onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-800 to-cyan-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 text-cyan-100">
            <button onClick={onBack} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={onBack} className="hover:text-white transition-colors">
              Portfolio
            </button>
            <span>/</span>
            <span className="text-white">{study.title}</span>
          </div>

          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-cyan-700 text-white rounded text-sm font-medium mb-6">
            {study.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {study.title}
          </h1>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-cyan-200 text-sm mb-2">Client</p>
              <p className="font-semibold text-lg">{study.client}</p>
            </div>
            <div>
              <p className="text-cyan-200 text-sm mb-2">Industry</p>
              <p className="font-semibold text-lg">{study.industry}</p>
            </div>
            <div>
              <p className="text-cyan-200 text-sm mb-2">Duration</p>
              <p className="font-semibold text-lg">{study.duration}</p>
            </div>
            <div>
              <p className="text-cyan-200 text-sm mb-2">Team Size</p>
              <p className="font-semibold text-lg">{study.team}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {study.tags?.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-cyan-700 text-white rounded text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 -mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={study.image}
              alt={study.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* The Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Our Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Solution
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Results (if provided) */}
          {study.results && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {study.results.map((result, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-4xl font-bold text-cyan-800 mb-2">
                      {result.metric}
                    </p>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-cyan-800 font-semibold hover:gap-3 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}

// Main Featured Case Studies Component
export default function FeaturedCaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);

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
      description: "Created a premium e-commerce platform supporting multiple luxury brands, resulting in 250% increase in online sales and 45%...",
      duration: "6 months",
      team: "10 developers",
      client: "LuxuryStyle",
      tags: ["E-Commerce", "React", "Node.js"],
      challenge: "LuxuryStyle needed a modern, scalable SaaS platform that could compete with established e-commerce solutions. The platform needed to support team collaboration, real-time updates, integrations with popular tools, and comprehensive analytics.",
      solution: "We developed a full-featured SaaS platform with real-time collaboration, advanced task management, Gantt charts, resource allocation, time tracking, and detailed analytics. The platform includes mobile apps, API for integrations, and white-label options for enterprise clients.",
      results: [
        { metric: "250%", description: "Increase in online sales" },
        { metric: "45%", description: "Higher customer retention" },
        { metric: "180%", description: "Growth in mobile traffic" }
      ]
    },
    {
      id: 2,
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
      industry: "Financial Services",
      title: "Mobile Banking Application for FinTech Startup",
      description: "Developed a secure mobile banking app with biometric authentication, enabling 100,000+ users to manage their finances...",
      duration: "10 months",
      team: "14 developers",
      client: "FinFlow",
      tags: ["Mobile App", "React Native", "Security"],
      challenge: "FinFlow needed a modern banking app that prioritized security while maintaining ease of use. The platform needed to support biometric authentication, real-time transactions, and comprehensive financial management tools.",
      solution: "We developed a comprehensive mobile banking application with biometric authentication, real-time transaction processing, budgeting tools, and investment tracking. The app includes advanced security features, push notifications, and seamless integration with banking APIs.",
      results: [
        { metric: "100K+", description: "Active users in first year" },
        { metric: "99.9%", description: "Transaction success rate" },
        { metric: "4.8/5", description: "App store rating" }
      ]
    },
    {
      id: 3,
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074",
      industry: "Technology",
      title: "SaaS Project Management Platform",
      description: "Built a comprehensive SaaS project management platform serving 5,000+ teams worldwide, with features for task...",
      duration: "9 months",
      team: "13 developers",
      client: "ProjectFlow",
      tags: ["Software Development", "Web Design", "Cloud Solutions"],
      challenge: "ProjectFlow needed a modern, scalable SaaS platform that could compete with established project management tools. The platform needed to support team collaboration, real-time updates, integrations with popular tools, and comprehensive analytics.",
      solution: "We developed a full-featured SaaS platform with real-time collaboration, advanced task management, Gantt charts, resource allocation, time tracking, and detailed analytics. The platform includes mobile apps, API for integrations, and white-label options for enterprise clients.",
      results: [
        { metric: "5,000+", description: "Teams using the platform" },
        { metric: "92%", description: "Customer satisfaction rate" },
        { metric: "3x", description: "Faster project completion" }
      ]
    },
    {
      id: 4,
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
      industry: "Technology",
      title: "Complete Website Redesign for Corporate Brand",
      description: "Redesigned and rebuilt corporate website with modern design, resulting in 180% increase in organic traffic and 65%...",
      duration: "4 months",
      team: "6 developers",
      client: "TechCorp",
      tags: ["Web Design", "UX/UI", "SEO"],
      challenge: "TechCorp's outdated website was hurting their brand image and conversion rates. They needed a complete redesign that would improve user experience, increase organic traffic, and better showcase their products and services.",
      solution: "We redesigned and rebuilt the corporate website with a modern, responsive design. Implemented SEO best practices, improved page load speeds, created an intuitive navigation structure, and integrated a content management system for easy updates.",
      results: [
        { metric: "180%", description: "Increase in organic traffic" },
        { metric: "65%", description: "Improved conversion rate" },
        { metric: "2.5s", description: "Average page load time" }
      ]
    },
    {
      id: 5,
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      industry: "Retail & Analytics",
      title: "AI-Powered Analytics Platform for Retail",
      description: "Developed an AI-powered analytics platform that provides predictive insights for retail operations, increasing sales by 22% and...",
      duration: "11 months",
      team: "16 developers",
      client: "RetailInsights",
      tags: ["Software Development", "AI/ML", "Analytics"],
      challenge: "RetailInsights needed an advanced analytics platform that could provide predictive insights for retail operations. The platform needed to process large amounts of data, provide actionable recommendations, and integrate with existing retail systems.",
      solution: "We developed an AI-powered analytics platform using machine learning algorithms to analyze sales data, customer behavior, and market trends. The platform provides real-time dashboards, predictive analytics, inventory optimization recommendations, and automated reporting.",
      results: [
        { metric: "22%", description: "Increase in sales" },
        { metric: "35%", description: "Reduction in inventory costs" },
        { metric: "50+", description: "Retail stores deployed" }
      ]
    }
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  // If a study is selected, show the detail page
  if (selectedStudy) {
    return <CaseStudyDetail study={selectedStudy} onBack={() => setSelectedStudy(null)} />;
  }

  // Otherwise, show the main portfolio grid
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
                <button 
                  onClick={() => setSelectedStudy(study)}
                  className="inline-flex items-center gap-2 text-cyan-800 font-semibold hover:gap-3 transition-all duration-200"
                >
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}