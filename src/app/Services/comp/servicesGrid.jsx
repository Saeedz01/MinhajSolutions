'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Code, Database, Package, CreditCard, Users, Workflow, Cloud, RefreshCw, LayoutDashboard, Monitor, Plug, ArrowRight } from "lucide-react";

const ServicesGrid = ({ slug }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Helper function to convert title to slug (matching the subslug page format)
  const titleToSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Helper function to normalize the parent slug
  const normalizeSlug = (slugParam) => {
    if (!slugParam) return 'custom-software-enterprise-solutions';
    try {
      return decodeURIComponent(slugParam.toString())
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/%26/gi, "and");
    } catch (e) {
      return slugParam.toString().toLowerCase().trim().replace(/&/g, "and").replace(/%26/gi, "and");
    }
  };

  // Helper function to get the correct service data key based on slug
  const getServiceDataKey = (slug) => {
    if (!slug) return 'SoftwareEnterpriseSol';
    
    // Map slugs to service data keys
    if (slug.includes('custom-software') || slug.includes('enterprise')) {
      return 'SoftwareEnterpriseSol';
    } else if (slug.includes('web') || slug.includes('platform')) {
      return 'webPlatformServices';
    } else if (slug.includes('mobile') || slug.includes('app')) {
      return 'mobileAppServices';
    } else if (slug.includes('ai') || slug.includes('data') || slug.includes('automation')) {
      return 'aiDataServices';
    } else if (slug.includes('academic') || slug.includes('scientific') || slug.includes('writing')) {
      return 'academicWritingServices';
    }
    return 'SoftwareEnterpriseSol'; // default
  };
  
  // Get service title based on slug
  const getServiceTitle = (slug) => {
    if (!slug) return 'Custom Software & Enterprise Solutions Services';
    
    if (slug.includes('custom-software') || slug.includes('enterprise')) {
      return 'Custom Software & Enterprise Solutions Services';
    } else if (slug.includes('web') || slug.includes('platform')) {
      return 'Web & Platform Development Services';
    } else if (slug.includes('mobile') || slug.includes('app')) {
      return 'Mobile App Development Services';
    } else if (slug.includes('ai') || slug.includes('data') || slug.includes('automation')) {
      return 'AI, Data & Intelligent Automation Services';
    } else if (slug.includes('academic') || slug.includes('scientific') || slug.includes('writing')) {
      return 'Smart Academic & Scientific Writing Services';
    }
    return 'Our Services';
  };
    
  const serviceData = {

   SoftwareEnterpriseSol :[
    {id:'1', title:"Custom Web-Based Business Systems", description:"We design and develop fully customized web-based business systems that automate operations, improve workflow efficiency, reduce manual effort, and scale seamlessly as your organization grows.", icon:<Monitor className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" },
    {id:'2', title:"Enterprise-Grade Software Development", description:"Our enterprise software solutions are engineered for high performance, strong security, and long-term scalability while following industry best practices and modern architectural standards.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800" },
    {id:'3', title:"ERP System Design & Implementation", description:"We build integrated ERP systems that centralize finance, operations, inventory, HR, and reporting into a single intelligent platform to enhance decision-making and productivity.", icon:<Database className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
    {id:'4', title:"CRM Systems", description:"Our CRM solutions help businesses manage leads, track customer interactions, improve sales pipelines, and build long-term customer relationships using data-driven insights.", icon:<Users className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800" },
    {id:'5', title:"HRMS & Payroll Management Systems", description:"We develop HRMS and payroll platforms that simplify employee management, automate salary processing, handle attendance, and ensure compliance with organizational policies.", icon:<CreditCard className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" },
    {id:'6', title:"Inventory & Warehouse Management", description:"Our inventory systems provide real-time stock tracking, automated alerts, supplier management, and warehouse optimization to reduce losses and operational costs.", icon:<Package className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800" },
    {id:'7', title:"Workflow & Business Process Automation", description:"We automate repetitive business processes using intelligent workflows that increase speed, reduce errors, and improve overall operational efficiency.", icon:<Workflow className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
    {id:'8', title:"API Development & Third-Party Integrations", description:"Our API solutions enable secure communication between systems, allowing seamless integration with third-party platforms, payment gateways, and external services.", icon:<Plug className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" },
    {id:'9', title:"SaaS Product Architecture & Development", description:"We build scalable SaaS platforms with cloud-ready architecture, multi-tenancy support, subscription management, and performance optimization.", icon:<Cloud className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" },
    {id:'10', title:"Legacy System Modernization & Migration", description:"We modernize outdated legacy systems by migrating them to modern stacks while preserving core business logic and ensuring data integrity.", icon:<RefreshCw className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" },
    {id:'11', title:"Internal Tools & Admin Dashboards", description:"We create powerful internal tools and admin dashboards that provide real-time analytics, operational control, and efficient system management.", icon:<LayoutDashboard className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" }
  ],

  // 2. Web & Platform Development
  webPlatformServices : [
    {id:'1', title:"Responsive Web Design", description:"We create visually stunning, mobile-friendly websites that adapt to any device and screen size. Our designs focus on usability, speed, and modern aesthetics.", icon:<Monitor className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"},
    {id:'2', title:"Custom Web Applications", description:"We develop custom web applications tailored to your business needs, ensuring scalability, security, and seamless user experiences across platforms.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"},
    {id:'3', title:"Platform Integrations", description:"Our team integrates your web platforms with third-party services, APIs, and tools to enhance functionality, automation, and connectivity.", icon:<Plug className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800"},
    {id:'4', title:"Performance Optimization", description:"We optimize your web platforms for speed, SEO, and reliability to ensure the best user experience and maximum business impact.", icon:<Cloud className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"},
    {id:'5', title:"UI/UX Enhancements", description:"We refine user interfaces and user experiences to maximize engagement, improve usability, and convert visitors into loyal users.", icon:<Monitor className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800"},
    {id:'6', title:"Content Management Systems", description:"We build flexible CMS platforms that allow you to easily manage website content, blogs, and media without technical expertise.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800"},
    {id:'7', title:"E-Commerce Platform Development", description:"We create scalable and secure e-commerce websites with payment integration, inventory management, and order tracking.", icon:<Cloud className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"}
  ],  
  
  // 3. Mobile App Development
  mobileAppServices :[
    {id:'1', title:"iOS & Android Apps", description:"We design and build mobile applications for iOS and Android platforms with seamless user experiences, fast performance, and strong security.", icon:<Monitor className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"},
    {id:'2', title:"Cross-Platform Development", description:"We develop cross-platform apps using React Native or Flutter to ensure maximum reach and cost efficiency while maintaining a native feel.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800"},
    {id:'3', title:"App Maintenance & Support", description:"We provide continuous support and updates to your mobile apps, ensuring compatibility with new OS versions and smooth performance.", icon:<Workflow className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091870624-3e9b1ec8ce96?w=800"},
    {id:'4', title:"Mobile UI/UX Design", description:"We craft engaging and intuitive mobile interfaces that provide a seamless user experience, enhancing user retention and satisfaction.", icon:<Monitor className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1590608897129-79b1238b5b09?w=800"},
    {id:'5', title:"Push Notifications & Analytics", description:"We implement push notifications, analytics, and tracking features to keep users engaged and measure app performance effectively.", icon:<Cloud className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092795360-6adf5b0cde30?w=800"},
    {id:'6', title:"App Security & Compliance", description:"Our apps follow industry standards for security and privacy, ensuring data protection and regulatory compliance.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091870625-1f1a01a0d3b1?w=800"},
    {id:'7', title:"Enterprise Mobile Solutions", description:"We build enterprise-grade mobile apps that integrate with your business systems, streamlining operations and improving workforce productivity.", icon:<Workflow className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581090700225-9e1c0b0f1f5a?w=800"}
  ],  
  
  // 4. AI, Data & Intelligent Automation
  aiDataServices : [
    {id:'1', title:"AI-Powered Automation", description:"We implement AI solutions to automate repetitive tasks, improve efficiency, and reduce human error in your operations.", icon:<Workflow className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092331245-1e3d5b8c5c02?w=800"},
    {id:'2', title:"Data Analytics & Insights", description:"We transform raw data into actionable insights, helping businesses make informed decisions and predict trends accurately.", icon:<Database className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092331246-2c4f5b8c5d03?w=800"},
    {id:'3', title:"Intelligent Business Processes", description:"Our AI-driven workflows and intelligent systems optimize operations, reduce manual effort, and enhance productivity.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092331247-3d5f5b8c5e04?w=800"},
    {id:'4', title:"Predictive Analytics", description:"We use predictive modeling and machine learning to anticipate trends and support proactive decision-making.", icon:<Cloud className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092331248-4e6f5b8c5f05?w=800"},
    {id:'5', title:"Natural Language Processing", description:"We leverage NLP to analyze text, automate responses, and extract meaningful insights from large datasets.", icon:<Workflow className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092331249-5f7f5b8c5g06?w=800"},
    {id:'6', title:"Robotic Process Automation", description:"We implement RPA bots to automate repetitive processes, saving time and reducing operational costs.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092331250-6g8f5b8c5h07?w=800"},
    {id:'7', title:"AI Consulting & Strategy", description:"We guide organizations on AI adoption, strategy, and implementation to maximize impact and ROI.", icon:<Database className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581092331251-7h9f5b8c5i08?w=800"}
  ],  
  
  // 5. Smart Academic & Scientific Writing
  academicWritingServices : [
    {id:'1', title:"Research Paper Writing", description:"We create high-quality, well-structured research papers with proper citations, ensuring academic standards and originality.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091215365-8d3f3b0a1f09?w=800"},
    {id:'2', title:"Thesis & Dissertation Assistance", description:"Our team supports students and researchers in preparing theses and dissertations, providing guidance, structure, and proofreading.", icon:<Monitor className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091215366-9e4f3b0b2f0a?w=800"},
    {id:'3', title:"Scientific Article Writing", description:"We produce precise and clear scientific articles suitable for journals, conferences, or publications with adherence to formatting and standards.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091215367-0f5f3b0c3f0b?w=800"},
    {id:'4', title:"Technical Documentation", description:"We provide professional technical documentation for software, systems, and research projects to ensure clarity and usability.", icon:<Workflow className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091215368-1g6f3b0d4f0c?w=800"},
    {id:'5', title:"Academic Editing & Proofreading", description:"We edit and proofread academic manuscripts to improve grammar, clarity, and adherence to publication standards.", icon:<Code className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091215369-2h7f3b0e5f0d?w=800"},
    {id:'6', title:"Grant & Proposal Writing", description:"We assist researchers and institutions in preparing grant proposals with clear objectives, methodology, and impact statements.", icon:<Monitor className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091215370-3i8f3b0f6f0e?w=800"},
    {id:'7', title:"Conference Paper Preparation", description:"We help in preparing papers for conferences with proper formatting, referencing, and professional presentation.", icon:<Workflow className="w-7 h-7"/>, image:"https://images.unsplash.com/photo-1581091215371-4j9f3b0g7f0f?w=800"}
  ]
  
  };
  
  // Normalize the parent slug
  const normalizedSlug = normalizeSlug(slug) || 'custom-software-enterprise-solutions';
  
  // Get the correct service data based on the normalized slug
  const serviceKey = getServiceDataKey(normalizedSlug);
  const services = serviceData[serviceKey] || serviceData.SoftwareEnterpriseSol;
  const serviceTitle = getServiceTitle(normalizedSlug);
 
  return (

    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {serviceTitle}
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4]"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Default State - Title */}
                <div className={`transition-opacity duration-300 ${hoveredCard === service.id ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Hover State - Description */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredCard === service.id ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/Services/${normalizedSlug}/${titleToSlug(service.title)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 w-fit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesGrid;
