'use client'

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Brain, Circle } from 'lucide-react';
import { 
  normalizeSlug, 
  getParentServiceTitle, 
  getParentServiceBadge,
  getServiceDetails,
  generateDefaultServiceDetails,
  getRelatedServicesByBadge,
} from '../../utils/servicesData';
import CTASection from '@/app/Components/CTA/CTAsec';

export default function ServiceSubCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const subslug = params?.subslug;

  const normalizedSlug = normalizeSlug(slug);
  const normalizedSubslug = normalizeSlug(subslug);

  // Get service details from shared data utility
  let serviceData = getServiceDetails(normalizedSubslug);
  
  // If service details not found, generate default details
  // This provides a fallback for services that might not have detailed pages yet
  if (!serviceData) {
    // Try to get basic info from the subslug itself
    const titleFromSlug = normalizedSubslug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    serviceData = generateDefaultServiceDetails(
      titleFromSlug,
      'Professional service solutions tailored to your business needs.',
      normalizedSlug
    );
  }

  const parentServiceTitle = getParentServiceTitle(normalizedSlug);
  const parentServiceBadge = getParentServiceBadge(normalizedSlug);
  const parentServiceSlug = normalizedSlug || 'ai-data-intelligent-automation';
  
  // Determine if this is an AI-related service for conditional brain icon
  const isAIService = normalizedSlug.includes('ai') || normalizedSlug.includes('data') || normalizedSlug.includes('automation') || 
        normalizedSubslug.includes('ai') || normalizedSubslug.includes('data') || normalizedSubslug.includes('automation');

  // Derived dynamic blocks with sensible defaults
  const benefits = serviceData.benefits && serviceData.benefits.length > 0
    ? serviceData.benefits
    : (serviceData.keyFeatures?.features || []).slice(0, 5);

  const useCases = serviceData.useCases && serviceData.useCases.length > 0
    ? serviceData.useCases
    : [
        'Retail stores needing streamlined operations',
        'Restaurants and cafes with multi-channel needs',
        'Multi-location teams requiring centralized reporting',
        'Pop-up or mobile teams needing offline capability',
      ];

      const relatedServices = getRelatedServicesByBadge(serviceData.badge,parentServiceSlug)
      // console.log(relatedServices);
  // const relatedServices = serviceData.relatedServices && serviceData.relatedServices.length > 0
    // ? serviceData.relatedServices
    // : [
    //     {
    //       title: 'Custom Web-Based Business Systems',
    //       image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    //       href: `/Services/${parentServiceSlug}/custom-web-based-business-systems`,
    //     },
    //     {
    //       title: 'Enterprise-Grade Software Development',
    //       image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    //       href: `/Services/${parentServiceSlug}/enterprise-grade-software-development`,
    //     },
    //     {
    //       title: 'ERP System Design & Implementation',
    //       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    //       href: `/Services/${parentServiceSlug}/erp-system-design-implementation`,
    //     },
    //   ];

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#0a2540] overflow-hidden">
        {/* Glowing Brain Icon Background - Only for AI services */}
        {isAIService && (
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-30">
            <div className="relative">
              <Brain className="w-[700px] h-[700px] text-cyan-400/60 blur-2xl" strokeWidth={0.3} fill="currentColor" />
              <div className="absolute inset-0">
                <Brain className="w-[700px] h-[700px] text-cyan-300/40 blur-3xl" strokeWidth={0.2} fill="currentColor" />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          {/* Breadcrumbs Navigation */}
          <div className="mb-8 flex items-center gap-2 text-white">
            <Link 
              href={`/Services/${parentServiceSlug}`}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <span>←</span>
              <span>{parentServiceTitle}</span>
            </Link>
            <span className="text-white/60">•</span>
            <span className="text-white/80">{parentServiceBadge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {serviceData.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
            {serviceData.heroDescription}
          </p>

          {/* CTA Button */}
          <a href='/Contact'
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {/* About Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                <span className="text-cyan-600 text-sm font-semibold uppercase tracking-wide">
                  About This Service
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {serviceData.aboutSection.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {serviceData.aboutSection.description}
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={serviceData.aboutSection.image}
                alt={serviceData.aboutSection.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Key Features Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Circle className="w-4 h-4 fill-cyan-600 text-cyan-600" />
              <span className="text-cyan-600 text-sm font-semibold uppercase tracking-wide">
                Key Features
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {serviceData.keyFeatures.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.keyFeatures.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={serviceData.aboutSection.image}
              alt={serviceData.aboutSection.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Benefits
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose This Service
            </h3>

            <div className="space-y-3">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <p className="text-gray-800">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Use Cases
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Real-World <span className="text-blue-700">Applications</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how businesses like yours benefit from this service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-4 py-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore More {parentServiceTitle}
            </h3>
            <p className="text-gray-600 mt-3">
              Discover other services that complement your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-end p-5">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/Services/${parentServiceSlug}`}
              className="inline-flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-lg text-sm font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-700 transition-colors"
            >
              View All {parentServiceTitle} Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* cta Section  */}
      <CTASection/>
    </div>
  );
}
