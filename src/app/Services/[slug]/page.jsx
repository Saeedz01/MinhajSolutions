'use client'
import React from 'react';
import { useParams } from 'next/navigation';

import ServicesGrid from '../comp/servicesGrid';
import ProcessTimeline from '../comp/ourProcess';
import IndustriesSection from '../comp/industriesSection';
import TechStackSection from '../comp/TechStack';
import CTASection from '../../Components/CTA/CTAsec';

export default function EnterpriseSolutionsPage() {

  const params = useParams();
  const slug = params?.slug;


  // Helper function to generate slug from title
  function titleToSlug(title) {
    return title
    .toLowerCase()
    .replace(/&/g, "and") // replace & with and to avoid URL encoding issues
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "") // allow word characters and dashes
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
  }


  // Normalize slug (handle URL encoding, trim, lowercase, and convert & to and)
  let normalizedSlug = '';
  if (slug) {
    try {
      normalizedSlug = decodeURIComponent(slug.toString())
        .toLowerCase()
        .trim()
        .replace(/&/g, "and") // normalize & to and
        .replace(/%26/gi, "and"); // also handle URL-encoded & (case-insensitive)
    } catch (e) {
      // If decoding fails, use the slug as-is
      normalizedSlug = slug.toString().toLowerCase().trim().replace(/&/g, "and").replace(/%26/gi, "and");
    }
  }

  const servicesData = [
    {
      badge: "ENTERPRISE SOLUTIONS",
      heading: "Custom Software & Enterprise Solutions",
      description: "Transform your business operations with tailor-made software solutions designed to streamline processes, enhance productivity, and drive sustainable growth.",
      cta: "Get in Touch",
      heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop",
      overview: {
        paragraphs: [
          "Every business has unique challenges that require custom-built solutions. Our enterprise software development services are engineered to address your specific operational needs.",
          "From comprehensive ERP systems to custom CRM platforms, we build scalable, secure, and high-performance applications that integrate seamlessly with your existing infrastructure.",
          "We focus on delivering measurable ROI through process automation, data-driven insights, and systems that grow alongside your business."
        ],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
      }
    },
    // 1. Web & Platform Development
    {
      badge: "WEB & PLATFORM DEVELOPMENT",
      heading: "Web & Platform Development",
      description: "We deliver robust web and platform solutions that scale with your business, improve engagement, and drive operational efficiency.",
      cta: "Explore Solutions",
      heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop",
      overview: {
        paragraphs: [
          "We build web platforms tailored to your business needs, from simple websites to complex SaaS solutions.",
          "Our solutions are secure, scalable, and optimized for performance to support your long-term growth.",
          "We ensure seamless integration with third-party services and provide user-friendly interfaces for better customer experiences."
        ],
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop"
      }
    },

    // 2. Mobile App Development
    {
      badge: "MOBILE APP DEVELOPMENT",
      heading: "Mobile App Development",
      description: "Our team creates high-performance mobile apps for iOS and Android that engage users, optimize workflows, and drive business growth.",
      cta: "Start Your App",
      heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop",
      overview: {
        paragraphs: [
          "We design and develop mobile apps that are intuitive, secure, and fast.",
          "Our solutions include native and cross-platform apps, tailored to your business objectives.",
          "We focus on delivering apps that improve user engagement, enhance productivity, and generate measurable ROI."
        ],
        image: "https://images.unsplash.com/photo-1581092795362-22d7074f56d6?w=800&h=600&fit=crop"
      }
    },

    // 3. AI, Data & Intelligent Automation
    {
      badge: "AI, DATA & INTELLIGENT AUTOMATION",
      heading: "AI, Data & Intelligent Automation",
      description: "We harness AI, machine learning, and intelligent automation to transform data into actionable insights and streamline business processes.",
      cta: "Discover AI Solutions",
      heroImage: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1600&h=900&fit=crop",
      overview: {
        paragraphs: [
          "Our AI and automation solutions analyze data, detect patterns, and enable predictive decision-making.",
          "We implement intelligent workflows that reduce manual effort and increase operational efficiency.",
          "From data analytics platforms to AI-powered tools, we deliver solutions that drive innovation and growth."
        ],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee9812?w=800&h=600&fit=crop"
      }
    },

    // 4. Smart Academic & Scientific Writing
    {
      badge: "SMART ACADEMIC & SCIENTIFIC WRITING",
      heading: "Smart Academic & Scientific Writing",
      description: "We provide smart tools and platforms that assist in academic research, scientific writing, and publication workflows with precision and efficiency.",
      cta: "Learn More",
      heroImage: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1600&h=900&fit=crop",
      overview: {
        paragraphs: [
          "Our solutions help researchers, students, and professionals streamline the writing process.",
          "We integrate AI-assisted research tools, plagiarism detection, and reference management.",
          "Our platforms are designed to enhance accuracy, collaboration, and productivity in academic and scientific work."
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
      }
    },
  ]

  const enterpriseData = servicesData.find(study => {
    return titleToSlug(study.heading) === normalizedSlug;
  });

  if (!enterpriseData) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section with Overlay */}
      <section className="relative min-h-[600px] flex items-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url('${enterpriseData.heroImage}')` }}
  />

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-cyan-900 opacity-80" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 sm:mb-8">
      <div className="w-2 h-2 bg-white rounded-full" />
      <span className="text-black text-xs sm:text-sm font-bold flex items-center gap-1">
        <span className="w-2 h-2 bg-black rounded-full inline-block"></span> {enterpriseData.badge}
      </span>
    </div>

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-full sm:max-w-3xl leading-tight">
      {enterpriseData.heading}
    </h1>

    {/* Description */}
    <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 mb-6 sm:mb-8 max-w-full sm:max-w-2xl leading-relaxed">
      {enterpriseData.description}
    </p>

    {/* CTA Button */}
    <a 
    href='/Contact'
    className="bg-white text-cyan-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2 text-sm sm:text-base">
      {enterpriseData.cta}
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</section>

      {/* Overview Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2">
              <div className="w-2 h-2 bg-cyan-900 rounded-full" />
              <span className="text-cyan-900 text-sm font-semibold uppercase tracking-wide">Overview</span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {enterpriseData.overview.paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 text-lg leading-relaxed">{para}</p>
              ))}
            </div>

            {/* Right Column - Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={enterpriseData.overview.image}
                alt="Enterprise Software Blueprint"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* services grid  */}
      <ServicesGrid slug={normalizedSlug}/>

      {/* our process  */}
      <ProcessTimeline slug={normalizedSlug}/>

      {/* Indestries Section  */}
      <IndustriesSection slug={normalizedSlug}/>

      {/* Tech Stack  */}
      <TechStackSection slug={normalizedSlug}/>

      {/* CTA Section  */}
      <CTASection />
    </div>
  );
}