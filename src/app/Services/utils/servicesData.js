import { useState, useEffect } from "react";
// Helper function to convert title to slug
export function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Helper function to normalize slug
export function normalizeSlug(slugParam) {
  if (!slugParam) return '';
  try {
    return decodeURIComponent(slugParam.toString())
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/%26/gi, "and");
  } catch (e) {
    return slugParam.toString().toLowerCase().trim().replace(/&/g, "and").replace(/%26/gi, "and");
  }
}

// Get parent service title based on slug
export function getParentServiceTitle(slug) {
  if (!slug) return 'AI, Data & Intelligent Automation';

  if (slug.includes('custom-software') || slug.includes('enterprise')) {
    return 'Custom Software & Enterprise Solutions';
  } else if (slug.includes('web') || slug.includes('platform')) {
    return 'Web & Platform Development';
  } else if (slug.includes('mobile') || slug.includes('app')) {
    return 'Mobile App Development';
  } else if (slug.includes('ai') || slug.includes('data') || slug.includes('automation')) {
    return 'AI, Data & Intelligent Automation';
  } else if (slug.includes('academic') || slug.includes('scientific') || slug.includes('writing')) {
    return 'Smart Academic & Scientific Writing';
  }
  return 'AI, Data & Intelligent Automation';
}

// Get parent service badge based on slug
export function getParentServiceBadge(slug) {
  if (!slug) return 'AI & DATA';

  if (slug.includes('custom-software') || slug.includes('enterprise')) {
    return 'SOFTWARE & ENTERPRISE';
  } else if (slug.includes('web') || slug.includes('platform')) {
    return 'WEB & PLATFORM';
  } else if (slug.includes('mobile') || slug.includes('app')) {
    return 'MOBILE APP';
  } else if (slug.includes('ai') || slug.includes('data') || slug.includes('automation')) {
    return 'AI & DATA';
  } else if (slug.includes('academic') || slug.includes('scientific') || slug.includes('writing')) {
    return 'ACADEMIC & WRITING';
  }
  return 'AI & DATA';
}

// Comprehensive each service details mapping in subslug
// Maps service titles (from servicesGrid) to their detailed subslug page data
export const serviceDetailsMap = {
  // Custom Software & Enterprise Solutions
  'custom-web-based-business-systems': {
    title: 'Custom Web-Based Business Systems',
    slug: 'cutom-web-based-business-system',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'We design and develop fully customized web-based business systems that automate operations, improve workflow efficiency, reduce manual effort, and scale seamlessly as your organization grows.',
    aboutSection: {
      title: 'Custom Web-Based Business Systems',
      description: 'Our custom web-based business systems are built to transform how your organization operates. We analyze your unique business processes and create tailored solutions that integrate seamlessly into your workflow. From automated reporting to intelligent data processing, our systems reduce manual work, minimize errors, and provide real-time insights that drive better decision-making. Every system is designed with scalability in mind, ensuring it grows alongside your business.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Comprehensive business systems designed to streamline operations and boost productivity.',
      features: [
        'Automated Workflow Management',
        'Real-time Data Processing',
        'Custom Reporting & Analytics',
        'Scalable Architecture',
        'Integration with Existing Systems',
        'User-Friendly Interfaces'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
  },
  'enterprise-grade-software-development': {
    title: 'Enterprise-Grade Software Development',
    slug: 'enterprise-grade-software-development',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'Our enterprise software solutions are engineered for high performance, strong security, and long-term scalability while following industry best practices and modern architectural standards.',
    aboutSection: {
      title: 'Enterprise-Grade Software Development',
      description: 'We build enterprise software that meets the highest standards of quality, security, and performance. Our solutions are designed to handle large-scale operations, support thousands of concurrent users, and maintain reliability under heavy loads. We follow industry best practices, implement robust security measures, and use modern architectural patterns to ensure your software remains maintainable and scalable for years to come.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Enterprise solutions built for performance, security, and scalability.',
      features: [
        'High-Performance Architecture',
        'Enterprise-Grade Security',
        'Scalable Infrastructure',
        'Industry Best Practices',
        'Modern Tech Stack',
        'Comprehensive Documentation'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop'
  },
  'erp-system-design-implementation': {
    title: 'ERP System Design & Implementation',
    slug: 'erp-system-design-&-implementation',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'Build integrated ERP systems that centralize finance, operations, inventory, HR, and reporting into a single intelligent platform.',
    aboutSection: {
      title: 'ERP System Design & Implementation',
      description: 'We build comprehensive ERP systems that integrate all critical business functions into a unified platform. Our approach focuses on understanding your unique workflows, then designing systems that enhance decision-making and productivity. We ensure seamless integration with existing systems, provide comprehensive training, and offer ongoing support to maximize your investment.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Complete ERP solutions tailored to your business operations.',
      features: [
        'Finance & Accounting Management',
        'Inventory & Supply Chain',
        'Human Resources & Payroll',
        'Sales & Customer Management',
        'Reporting & Analytics',
        'Multi-Location Support'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop'
  },
  'crm-systems': {
    title: 'CRM Systems & Customer Management',
    slug: 'crm-systems-&-customer-management',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'Manage leads, track customer interactions, and build long-term relationships using data-driven insights and automation.',
    aboutSection: {
      title: 'CRM Systems & Customer Management',
      description: 'Our CRM solutions help businesses manage the entire customer lifecycle from lead generation to retention. We build systems that track every interaction, automate follow-ups, and provide insights that help your sales team close more deals. With features like pipeline management, email integration, and advanced analytics, our CRM platforms become the central hub for all customer-related activities.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Customer management solutions that drive sales and retention.',
      features: [
        'Lead Management & Tracking',
        'Sales Pipeline Automation',
        'Customer Interaction History',
        'Email & Communication Integration',
        'Analytics & Performance Metrics',
        'Mobile Access & Real-time Updates'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=900&fit=crop'
  },
  'hrms-payroll-management-systems': {
    title: 'HRMS & Payroll Management Systems',
    slug: 'hrms-&-payroll-management-systems',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'We develop HRMS and payroll platforms that simplify employee management, automate salary processing, handle attendance, and ensure compliance with organizational policies.',
    aboutSection: {
      title: 'HRMS & Payroll Management Systems',
      description: 'Streamline your human resources and payroll operations with our comprehensive HRMS solutions. Our platforms automate employee onboarding, attendance tracking, leave management, and payroll processing. We ensure compliance with labor laws and organizational policies while providing employees with self-service portals for accessing their information and managing requests.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Complete HR and payroll solutions for modern organizations.',
      features: [
        'Employee Management & Onboarding',
        'Automated Payroll Processing',
        'Attendance & Leave Management',
        'Performance Reviews & Appraisals',
        'Compliance & Policy Management',
        'Employee Self-Service Portal'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop'
  },
  'inventory-warehouse-management': {
    title: 'Inventory & Warehouse Management',
    slug: 'inventory-and-warehouse-management',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'Our inventory systems provide real-time stock tracking, automated alerts, supplier management, and warehouse optimization to reduce losses and operational costs.',
    aboutSection: {
      title: 'Inventory & Warehouse Management',
      description: 'Take control of your inventory and warehouse operations with our intelligent management systems. We provide real-time visibility into stock levels, automate reordering processes, optimize warehouse layouts, and track inventory movements. Our solutions help reduce carrying costs, minimize stockouts, and improve order fulfillment accuracy.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Intelligent inventory and warehouse management solutions.',
      features: [
        'Real-time Stock Tracking',
        'Automated Reorder Alerts',
        'Supplier Management',
        'Warehouse Optimization',
        'Barcode & RFID Integration',
        'Multi-Location Support'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop'
  },
  'workflow-business-process-automation': {
    title: 'Workflow & Business Process Automation',
    slug: 'workflow-&-business-process-automation',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'We automate repetitive business processes using intelligent workflows that increase speed, reduce errors, and improve overall operational efficiency.',
    aboutSection: {
      title: 'Workflow & Business Process Automation',
      description: 'Transform your business operations with intelligent workflow automation. We analyze your processes, identify bottlenecks, and implement automated workflows that eliminate manual tasks, reduce errors, and accelerate operations. Our solutions integrate seamlessly with your existing systems and can be customized to match your unique business requirements.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Automation solutions that streamline business processes.',
      features: [
        'Process Mapping & Analysis',
        'Automated Workflow Design',
        'Integration with Existing Systems',
        'Real-time Process Monitoring',
        'Exception Handling & Alerts',
        'Performance Analytics'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop'
  },

  'api-development-third-party-integrations': {
    title: 'API Development & Third-Party Integrations',
    slug: 'api-development-&-third-party-integrations',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'Our API solutions enable secure communication between systems, allowing seamless integration with third-party platforms, payment gateways, and external services.',
    aboutSection: {
      title: 'API Development & Third-Party Integrations',
      description: 'Connect your systems with the world through our robust API development and integration services. We build secure, scalable APIs that enable seamless data exchange between your applications and third-party services. Whether you need payment gateway integration, CRM connectivity, or custom API development, we ensure reliable, secure, and efficient integrations.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Powerful APIs and integrations for seamless connectivity.',
      features: [
        'RESTful & GraphQL APIs',
        'Payment Gateway Integration',
        'Third-Party Service Integration',
        'API Security & Authentication',
        'Real-time Data Synchronization',
        'Comprehensive API Documentation'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=900&fit=crop'
  },

  'internal-tools-admin-dashboards': {
    title: 'Internal Tools & Admin Dashboards',
    slug: 'internal-tools-&-admin-dashboards',
    badge: 'SOFTWARE & ENTERPRISE',
    heroDescription: 'We create powerful internal tools and admin dashboards that provide real-time analytics, operational control, and efficient system management.',
    aboutSection: {
      title: 'Internal Tools & Admin Dashboards',
      description: 'Empower your team with powerful internal tools and intuitive admin dashboards. We build custom solutions that provide real-time insights, streamline administrative tasks, and give you complete control over your systems. Our dashboards are designed for usability, providing actionable insights at a glance while maintaining security and access controls.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Powerful tools and dashboards for internal operations.',
      features: [
        'Real-time Analytics & Reporting',
        'Custom Administrative Tools',
        'User Access Management',
        'Data Visualization',
        'Automated Workflows',
        'Mobile-Responsive Design'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop'
  },


  // Web & Platform Development
  'responsive-web-design': {
  title: 'Responsive Web Design',
  slug: 'responsive-web-design',
  badge: 'WEB & PLATFORM',
  heroDescription: 'Create visually stunning, mobile-friendly websites that adapt to any device and screen size with modern aesthetics.',
  aboutSection: {
    title: 'Responsive Web Design',
    description: 'We create websites that look and perform beautifully on every device. Our responsive design approach ensures your site provides an optimal experience whether visitors are on desktop, tablet, or mobile. We focus on fast loading times, intuitive navigation, and modern aesthetics that reflect your brand while converting visitors into customers.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Websites that excel across all devices and platforms.',
    features: [
      'Mobile-First Responsive Design',
      'Fast Loading & Performance',
      'Modern UI/UX Design',
      'SEO Optimization',
      'Cross-Browser Compatibility',
      'Content Management Integration'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop'
},

'custom-web-applications': {
  title: 'Custom Web Applications',
  slug: 'custom-web-applications',
  badge: 'WEB & PLATFORM',
  heroDescription: 'Develop custom web applications tailored to your business needs, ensuring scalability, security, and seamless user experiences.',
  aboutSection: {
    title: 'Custom Web Applications',
    description: 'We develop custom web applications that are built specifically for your business requirements. Our applications are designed for scalability, security, and optimal performance. Whether you need a simple internal tool or a complex multi-tenant SaaS platform, we leverage modern technologies and best practices to deliver solutions that grow with your business.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Web applications built for performance and scalability.',
    features: [
      'Scalable Architecture Design',
      'Secure Authentication & Authorization',
      'Real-time Features & Updates',
      'Responsive & Mobile-First Design',
      'API Integration & Third-party Services',
      'Cloud Deployment & Hosting'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop'
},

'platform-integrations': {
  title: 'Platform Integrations',
  slug: 'platform-integrations',
  badge: 'WEB & PLATFORM',
  heroDescription: 'Our team integrates your web platforms with third-party services, APIs, and tools to enhance functionality, automation, and connectivity.',
  aboutSection: {
    title: 'Platform Integrations',
    description: 'Extend the functionality of your web platforms through seamless integrations with third-party services and APIs. We connect your platforms with payment gateways, CRM systems, marketing tools, analytics platforms, and more. Our integration solutions are reliable, secure, and designed to enhance your platform\'s capabilities without compromising performance.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Seamless integrations that extend platform capabilities.',
    features: [
      'Payment Gateway Integration',
      'CRM & Marketing Tool Integration',
      'Analytics & Tracking Integration',
      'API Development & Management',
      'Real-time Data Synchronization',
      'Secure Authentication Methods'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1600&h=900&fit=crop'
},

'performance-optimization': {
  title: 'Performance Optimization',
  slug: 'performance-optimization',
  badge: 'WEB & PLATFORM',
  heroDescription: 'We optimize your web platforms for speed, SEO, and reliability to ensure the best user experience and maximum business impact.',
  aboutSection: {
    title: 'Performance Optimization',
    description: 'Boost your website\'s performance and search engine rankings with our comprehensive optimization services. We analyze your site\'s speed, identify bottlenecks, and implement optimizations that improve load times, enhance user experience, and boost SEO rankings. Our approach covers everything from code optimization to server configuration and content delivery.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Optimization solutions that improve speed and visibility.',
    features: [
      'Page Speed Optimization',
      'SEO Enhancement',
      'Code & Asset Optimization',
      'CDN Integration',
      'Database Query Optimization',
      'Performance Monitoring & Analytics'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop'
},

'uiux-enhancements': {
  title: 'UI/UX Enhancements',
  slug: 'uiux-enhancements',
  badge: 'WEB & PLATFORM',
  heroDescription: 'We refine user interfaces and user experiences to maximize engagement, improve usability, and convert visitors into loyal users.',
  aboutSection: {
    title: 'UI/UX Enhancements',
    description: 'Transform your user interface and experience to drive engagement and conversions. We conduct user research, analyze user behavior, and redesign interfaces that are intuitive, accessible, and visually appealing. Our enhancements focus on improving usability, reducing friction, and creating delightful experiences that keep users coming back.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'User-centered design enhancements that drive results.',
    features: [
      'User Research & Analysis',
      'Interface Redesign',
      'Usability Testing',
      'Accessibility Improvements',
      'Conversion Rate Optimization',
      'Responsive Design Updates'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600&h=900&fit=crop'
},

'content-management-systems': {
  title: 'Content Management Systems',
  slug: 'content-management-systems',
  badge: 'WEB & PLATFORM',
  heroDescription: 'We build flexible CMS platforms that allow you to easily manage website content, blogs, and media without technical expertise.',
  aboutSection: {
    title: 'Content Management Systems',
    description: 'Take control of your content with our custom CMS solutions. We build flexible, user-friendly content management systems that allow your team to update website content, publish blog posts, and manage media without needing technical skills. Our CMS platforms are intuitive, secure, and designed to streamline your content workflow.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Flexible CMS solutions for easy content management.',
    features: [
      'User-Friendly Content Editor',
      'Media Library Management',
      'Multi-User Access Control',
      'SEO-Friendly Structure',
      'Custom Content Types',
      'Version Control & History'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1600&h=900&fit=crop'
},

'e-commerce-platform-development': {
  title: 'E-Commerce Platform Development',
  slug: 'e-commerce-platform-development',
  badge: 'WEB & PLATFORM',
  heroDescription: 'We create scalable and secure e-commerce websites with payment integration, inventory management, and order tracking.',
  aboutSection: {
    title: 'E-Commerce Platform Development',
    description: 'Launch your online store with a powerful e-commerce platform built for growth. We develop secure, scalable e-commerce solutions with integrated payment processing, inventory management, order tracking, and customer accounts. Our platforms are optimized for conversions and designed to handle high traffic and large product catalogs.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Complete e-commerce solutions for online retail success.',
    features: [
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing & Tracking',
      'Shopping Cart & Checkout',
      'Customer Account Management',
      'Product Catalog Management'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop'
},
  // Mobile App Development
  'ios-android-apps': {
  title: 'iOS & Android Mobile Apps',
  slug: 'ios-android-apps',
  badge: 'MOBILE APP',
  heroDescription: 'Design and build mobile applications for iOS and Android platforms with seamless user experiences and strong security.',
  aboutSection: {
    title: 'iOS & Android Mobile Apps',
    description: 'We create native mobile applications for both iOS and Android platforms, delivering exceptional user experiences and performance. Our apps are built using platform-specific best practices, ensuring they feel natural and perform optimally on each operating system. From concept to deployment, we handle every aspect of mobile app development.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Native mobile apps that users love to interact with.',
    features: [
      'Native iOS & Android Development',
      'App Store Optimization',
      'Push Notifications & Alerts',
      'Offline Functionality',
      'Biometric Authentication',
      'App Analytics & Performance Monitoring'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop'
},

'cross-platform-development': {
  title: 'Cross-Platform Mobile Development',
  slug: 'cross-platform-development',
  badge: 'MOBILE APP',
  heroDescription: 'Develop cross-platform apps using React Native or Flutter to ensure maximum reach and cost efficiency.',
  aboutSection: {
    title: 'Cross-Platform Mobile Development',
    description: 'Our cross-platform development approach allows you to reach both iOS and Android users with a single codebase. Using React Native or Flutter, we build apps that maintain a native feel while reducing development time and costs. This approach is ideal for businesses that want to launch on multiple platforms quickly without sacrificing quality.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Cross-platform solutions that deliver native performance.',
    features: [
      'React Native & Flutter Development',
      'Single Codebase for Multiple Platforms',
      'Native Performance & Feel',
      'Rapid Development & Deployment',
      'Cost-Effective Solution',
      'Easy Maintenance & Updates'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&h=900&fit=crop'
},

'app-maintenance-support': {
  title: 'App Maintenance & Support',
  slug: 'app-maintenance-support',
  badge: 'MOBILE APP',
  heroDescription: 'We provide continuous support and updates to your mobile apps, ensuring compatibility with new OS versions and smooth performance.',
  aboutSection: {
    title: 'App Maintenance & Support',
    description: 'Keep your mobile apps running smoothly with our comprehensive maintenance and support services. We handle bug fixes, performance optimizations, security updates, and ensure compatibility with new OS versions. Our proactive approach helps prevent issues before they impact your users, maintaining app quality and user satisfaction.',
    image: 'https://images.unsplash.com/photo-1581091870624-3e9b1ec8ce96?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Ongoing support to keep your apps running smoothly.',
    features: [
      'Bug Fixes & Updates',
      'OS Compatibility Updates',
      'Performance Optimization',
      'Security Patches',
      'Feature Enhancements',
      '24/7 Monitoring & Support'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091870624-3e9b1ec8ce96?w=1600&h=900&fit=crop'
},

'mobile-uiux-design': {
  title: 'Mobile UI/UX Design',
  slug: 'mobile-uiux-design',
  badge: 'MOBILE APP',
  heroDescription: 'We craft engaging and intuitive mobile interfaces that provide a seamless user experience, enhancing user retention and satisfaction.',
  aboutSection: {
    title: 'Mobile UI/UX Design',
    description: 'Create mobile experiences that users love with our expert UI/UX design services. We design interfaces that are intuitive, visually appealing, and optimized for mobile interactions. Our designs follow platform guidelines while maintaining your brand identity, resulting in apps that feel natural and delight users.',
    image: 'https://images.unsplash.com/photo-1590608897129-79b1238b5b09?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Beautiful mobile interfaces that enhance user experience.',
    features: [
      'User-Centered Design',
      'Platform-Specific Guidelines',
      'Intuitive Navigation',
      'Accessibility Compliance',
      'Prototyping & Testing',
      'Brand Consistency'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1590608897129-79b1238b5b09?w=1600&h=900&fit=crop'
},

'push-notifications-analytics': {
  title: 'Push Notifications & Analytics',
  slug: 'push-notifications-analytics',
  badge: 'MOBILE APP',
  heroDescription: 'We implement push notifications, analytics, and tracking features to keep users engaged and measure app performance effectively.',
  aboutSection: {
    title: 'Push Notifications & Analytics',
    description: 'Engage users and measure app performance with our push notification and analytics solutions. We implement intelligent push notification systems that deliver timely, relevant messages to users. Combined with comprehensive analytics, you\'ll gain insights into user behavior, app performance, and engagement metrics that drive informed decisions.',
    image: 'https://images.unsplash.com/photo-1581092795360-6adf5b0cde30?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Engagement and analytics tools for mobile apps.',
    features: [
      'Intelligent Push Notifications',
      'User Behavior Analytics',
      'App Performance Metrics',
      'Conversion Tracking',
      'A/B Testing Support',
      'Real-time Dashboards'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581092795360-6adf5b0cde30?w=1600&h=900&fit=crop'
},

'app-security-compliance': {
  title: 'App Security & Compliance',
  slug: 'app-security-compliance',
  badge: 'MOBILE APP',
  heroDescription: 'Our apps follow industry standards for security and privacy, ensuring data protection and regulatory compliance.',
  aboutSection: {
    title: 'App Security & Compliance',
    description: 'Protect your users\' data and ensure regulatory compliance with our comprehensive security solutions. We implement industry-standard security measures, encryption protocols, and privacy controls. Our apps comply with GDPR, CCPA, and other regulations, giving you and your users peace of mind.',
    image: 'https://images.unsplash.com/photo-1581091870625-1f1a01a0d3b1?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Security and compliance solutions for mobile apps.',
    features: [
      'Data Encryption',
      'Secure Authentication',
      'Privacy Controls',
      'GDPR & CCPA Compliance',
      'Security Audits',
      'Regular Security Updates'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091870625-1f1a01a0d3b1?w=1600&h=900&fit=crop'
},

'enterprise-mobile-solutions': {
  title: 'Enterprise Mobile Solutions',
  slug: 'enterprise-mobile-solutions',
  badge: 'MOBILE APP',
  heroDescription: 'We build enterprise-grade mobile apps that integrate with your business systems, streamlining operations and improving workforce productivity.',
  aboutSection: {
    title: 'Enterprise Mobile Solutions',
    description: 'Empower your workforce with enterprise mobile solutions that integrate seamlessly with your business systems. We build secure, scalable mobile apps that enable remote work, streamline field operations, and improve productivity. Our solutions include features like offline capabilities, enterprise authentication, and integration with your existing infrastructure.',
    image: 'https://images.unsplash.com/photo-1581090700225-9e1c0b0f1f5a?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Enterprise mobile solutions for workforce productivity.',
    features: [
      'Business System Integration',
      'Enterprise Authentication',
      'Offline Capabilities',
      'Field Service Management',
      'Workforce Management',
      'Secure Data Synchronization'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581090700225-9e1c0b0f1f5a?w=1600&h=900&fit=crop'
},

  // AI, Data & Intelligent Automation
  'ai-powered-automation': {
  title: 'AI-Powered Business Solutions',
  slug: 'ai-powered-automation',
  badge: 'AI & DATA',
  heroDescription: 'Deploy AI solutions tailored to your business challenges, from demand forecasting and customer segmentation to process optimization and risk assessment.',
  aboutSection: {
    title: 'AI-Powered Business Solutions',
    description: 'AI delivers the most value when it\'s applied to real business problems with clear success metrics. We work with you to identify high-impact opportunities for AI in your organization, then design and implement solutions that deliver measurable ROI. Our approach starts with understanding your business deeply, then applying the right AI techniques —whether machine learning, optimization, or generative AI—to create solutions that integrate seamlessly into your operations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Comprehensive capabilities designed to meet your specific needs and drive measurable business impact.',
    features: [
      'Demand Forecasting & Predictive Analytics',
      'Customer Segmentation & Personalization',
      'Process Optimization & Automation',
      'Risk Assessment & Management',
      'Intelligent Decision Support Systems',
      'Real-time Data Processing & Insights'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1600&h=900&fit=crop'
},

'data-analytics-insights': {
  title: 'Data Analytics & Business Insights',
  slug: 'data-analytics-insights',
  badge: 'AI & DATA',
  heroDescription: 'Transform raw data into actionable insights that drive strategic decision-making and unlock hidden business opportunities.',
  aboutSection: {
    title: 'Data Analytics & Business Insights',
    description: 'We help organizations unlock the power of their data through advanced analytics, machine learning, and visualization. Our team builds custom analytics platforms that process large volumes of data in real-time, identify patterns, and generate insights that inform strategic decisions. From dashboard development to predictive modeling, we create solutions that make data accessible and actionable for stakeholders at every level.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Advanced analytics solutions that turn data into competitive advantages.',
    features: [
      'Real-time Dashboard & Visualization',
      'Predictive Modeling & Forecasting',
      'Business Intelligence Platforms',
      'Data Warehousing & ETL',
      'Statistical Analysis & Reporting',
      'Custom Analytics Solutions'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee9812?w=1600&h=900&fit=crop'
},

'intelligent-business-processes': {
  title: 'Intelligent Business Process Automation',
  slug: 'intelligent-business-processes',
  badge: 'AI & DATA',
  heroDescription: 'Automate complex business processes with AI-driven workflows that learn, adapt, and optimize performance over time.',
  aboutSection: {
    title: 'Intelligent Business Process Automation',
    description: 'Our intelligent automation solutions combine AI, machine learning, and workflow optimization to transform how businesses operate. We analyze your existing processes, identify automation opportunities, and implement intelligent systems that handle complex decision-making. These solutions continuously learn from data, adapt to changing conditions, and optimize performance, resulting in significant efficiency gains and cost reductions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Smart automation that evolves with your business needs.',
    features: [
      'AI-Driven Workflow Automation',
      'Smart Document Processing',
      'Intelligent Email Management',
      'Automated Decision Making',
      'Process Mining & Optimization',
      'Self-Learning Systems'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop'
},

'predictive-analytics': {
  title: 'Predictive Analytics',
  slug: 'predictive-analytics',
  badge: 'AI & DATA',
  heroDescription: 'We use predictive modeling and machine learning to anticipate trends and support proactive decision-making.',
  aboutSection: {
    title: 'Predictive Analytics',
    description: 'Stay ahead of trends and make proactive decisions with our predictive analytics solutions. We use advanced machine learning models to analyze historical data, identify patterns, and forecast future outcomes. Our solutions help you anticipate customer behavior, predict demand, optimize inventory, and make data-driven decisions that give you a competitive edge.',
    image: 'https://images.unsplash.com/photo-1581092331248-4e6f5b8c5f05?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Predictive solutions that forecast future outcomes.',
    features: [
      'Demand Forecasting',
      'Customer Behavior Prediction',
      'Risk Assessment Models',
      'Trend Analysis',
      'Machine Learning Models',
      'Real-time Predictions'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581092331248-4e6f5b8c5f05?w=1600&h=900&fit=crop'
},

'natural-language-processing': {
  title: 'Natural Language Processing',
  slug: 'natural-language-processing',
  badge: 'AI & DATA',
  heroDescription: 'We leverage NLP to analyze text, automate responses, and extract meaningful insights from large datasets.',
  aboutSection: {
    title: 'Natural Language Processing',
    description: 'Unlock insights from unstructured text data with our NLP solutions. We build systems that understand, interpret, and generate human language, enabling applications like chatbots, sentiment analysis, document summarization, and automated content generation. Our NLP solutions help you extract valuable insights from customer feedback, documents, and communications.',
    image: 'https://images.unsplash.com/photo-1581092331249-5f7f5b8c5g06?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'NLP solutions that understand and process human language.',
    features: [
      'Chatbot Development',
      'Sentiment Analysis',
      'Text Classification',
      'Document Summarization',
      'Language Translation',
      'Content Generation'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581092331249-5f7f5b8c5g06?w=1600&h=900&fit=crop'
},

'robotic-process-automation': {
  title: 'Robotic Process Automation',
  slug: 'robotic-process-automation',
  badge: 'AI & DATA',
  heroDescription: 'We implement RPA bots to automate repetitive processes, saving time and reducing operational costs.',
  aboutSection: {
    title: 'Robotic Process Automation',
    description: 'Automate repetitive, rule-based tasks with our RPA solutions. We build software robots that mimic human actions to perform tasks like data entry, form filling, report generation, and system integration. Our RPA bots work 24/7, reduce errors, and free up your team to focus on higher-value work, resulting in significant cost savings and efficiency gains.',
    image: 'https://images.unsplash.com/photo-1581092331250-6g8f5b8c5h07?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'RPA solutions that automate repetitive tasks.',
    features: [
      'Process Automation Bots',
      'Data Entry Automation',
      'Report Generation',
      'System Integration',
      'Error Reduction',
      '24/7 Operation'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581092331250-6g8f5b8c5h07?w=1600&h=900&fit=crop'
},

'ai-consulting-strategy': {
  title: 'AI Consulting & Strategy',
  slug: 'ai-consulting-strategy',
  badge: 'AI & DATA',
  heroDescription: 'We guide organizations on AI adoption, strategy, and implementation to maximize impact and ROI.',
  aboutSection: {
    title: 'AI Consulting & Strategy',
    description: 'Navigate your AI journey with confidence using our strategic consulting services. We help you identify AI opportunities, develop implementation roadmaps, assess readiness, and create strategies that align with your business goals. Our consultants work with you to build AI capabilities, select the right technologies, and ensure successful adoption that delivers measurable ROI.',
    image: 'https://images.unsplash.com/photo-1581092331251-7h9f5b8c5i08?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Strategic guidance for successful AI adoption.',
    features: [
      'AI Opportunity Assessment',
      'Implementation Roadmaps',
      'Technology Selection',
      'ROI Analysis',
      'Change Management',
      'Ongoing Support & Guidance'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581092331251-7h9f5b8c5i08?w=1600&h=900&fit=crop'
},

  // Smart Academic & Scientific Writing
  'research-paper-writing': {
  title: 'Research Paper Writing',
  slug: 'research-paper-writing',
  badge: 'ACADEMIC & WRITING',
  heroDescription: 'We create high-quality, well-structured research papers with proper citations, ensuring academic standards and originality.',
  aboutSection: {
    title: 'Research Paper Writing',
    description: 'Produce high-quality research papers that meet academic standards with our professional writing services. We help researchers structure their work, ensure proper citations, maintain originality, and adhere to formatting guidelines. Our team understands various citation styles and academic requirements, helping you create papers that stand out.',
    image: 'https://images.unsplash.com/photo-1581091215365-8d3f3b0a1f09?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Professional research paper writing services.',
    features: [
      'Structured Research Papers',
      'Proper Citation & Referencing',
      'Academic Standards Compliance',
      'Originality & Plagiarism Checks',
      'Multiple Citation Styles',
      'Formatting & Style Guidelines'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091215365-8d3f3b0a1f09?w=1600&h=900&fit=crop'
},

'thesis-dissertation-assistance': {
  title: 'Thesis & Dissertation Assistance',
  slug: 'thesis-dissertation-assistance',
  badge: 'ACADEMIC & WRITING',
  heroDescription: 'Our team supports students and researchers in preparing theses and dissertations, providing guidance, structure, and proofreading.',
  aboutSection: {
    title: 'Thesis & Dissertation Assistance',
    description: 'Complete your thesis or dissertation with confidence using our comprehensive assistance services. We provide guidance on structure, help with research organization, assist with writing, and offer thorough proofreading and editing. Our team understands the unique requirements of academic writing and helps you create work that meets your institution\'s standards.',
    image: 'https://images.unsplash.com/photo-1581091215366-9e4f3b0b2f0a?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Comprehensive support for thesis and dissertation work.',
    features: [
      'Structure & Organization Guidance',
      'Research Assistance',
      'Writing Support',
      'Proofreading & Editing',
      'Citation Management',
      'Format Compliance'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091215366-9e4f3b0b2f0a?w=1600&h=900&fit=crop'
},

'scientific-article-writing': {
  title: 'Scientific Article Writing',
  slug: 'scientific-article-writing',
  badge: 'ACADEMIC & WRITING',
  heroDescription: 'We produce precise and clear scientific articles suitable for journals, conferences, or publications with adherence to formatting and standards.',
  aboutSection: {
    title: 'Scientific Article Writing',
    description: 'Publish your research with confidence using our scientific article writing services. We help researchers prepare articles for journals, conferences, and publications, ensuring clarity, precision, and adherence to formatting standards. Our team understands the requirements of various publication venues and helps you create articles that meet editorial standards.',
    image: 'https://images.unsplash.com/photo-1581091215367-0f5f3b0c3f0b?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Professional scientific article writing services.',
    features: [
      'Journal Article Preparation',
      'Conference Paper Writing',
      'Formatting & Style Compliance',
      'Clear & Precise Writing',
      'Publication Standards',
      'Editorial Guidelines Adherence'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091215367-0f5f3b0c3f0b?w=1600&h=900&fit=crop'
},

'technical-documentation': {
  title: 'Technical Documentation',
  slug: 'technical-documentation',
  badge: 'ACADEMIC & WRITING',
  heroDescription: 'We provide professional technical documentation for software, systems, and research projects to ensure clarity and usability.',
  aboutSection: {
    title: 'Technical Documentation',
    description: 'Create clear, comprehensive technical documentation that helps users understand and use your systems effectively. We write documentation for software, APIs, systems, and research projects, ensuring clarity, accuracy, and usability. Our documentation helps reduce support burden and improves user adoption.',
    image: 'https://images.unsplash.com/photo-1581091215368-1g6f3b0d4f0c?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Clear and comprehensive technical documentation.',
    features: [
      'Software Documentation',
      'API Documentation',
      'System Documentation',
      'User Guides & Manuals',
      'Clear & Accessible Writing',
      'Visual Aids & Diagrams'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091215368-1g6f3b0d4f0c?w=1600&h=900&fit=crop'
},

'academic-editing-proofreading': {
  title: 'Academic Editing & Proofreading',
  slug: 'academic-editing-proofreading',
  badge: 'ACADEMIC & WRITING',
  heroDescription: 'We edit and proofread academic manuscripts to improve grammar, clarity, and adherence to publication standards.',
  aboutSection: {
    title: 'Academic Editing & Proofreading',
    description: 'Polish your academic work with our professional editing and proofreading services. We improve grammar, enhance clarity, ensure consistency, and verify adherence to publication standards. Our editors understand academic writing conventions and help you create work that communicates your research effectively.',
    image: 'https://images.unsplash.com/photo-1581091215369-2h7f3b0e5f0d?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Professional editing and proofreading for academic work.',
    features: [
      'Grammar & Language Editing',
      'Clarity & Style Improvement',
      'Consistency Checks',
      'Citation Verification',
      'Format Compliance',
      'Publication Standards'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091215369-2h7f3b0e5f0d?w=1600&h=900&fit=crop'
},

'grant-proposal-writing': {
  title: 'Grant & Proposal Writing',
  slug: 'grant-proposal-writing',
  badge: 'ACADEMIC & WRITING',
  heroDescription: 'We assist researchers and institutions in preparing grant proposals with clear objectives, methodology, and impact statements.',
  aboutSection: {
    title: 'Grant & Proposal Writing',
    description: 'Increase your chances of securing funding with our grant and proposal writing services. We help researchers and institutions prepare compelling proposals with clear objectives, robust methodology, and strong impact statements. Our team understands what funders look for and helps you create proposals that stand out.',
    image: 'https://images.unsplash.com/photo-1581091215370-3i8f3b0f6f0e?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Professional grant and proposal writing services.',
    features: [
      'Clear Objectives & Goals',
      'Robust Methodology',
      'Impact Statements',
      'Budget Preparation',
      'Funder Requirements',
      'Proposal Review & Refinement'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091215370-3i8f3b0f6f0e?w=1600&h=900&fit=crop'
},

'conference-paper-preparation': {
  title: 'Conference Paper Preparation',
  slug: 'conference-paper-preparation',
  badge: 'ACADEMIC & WRITING',
  heroDescription: 'We help in preparing papers for conferences with proper formatting, referencing, and professional presentation.',
  aboutSection: {
    title: 'Conference Paper Preparation',
    description: 'Present your research at conferences with confidence using our paper preparation services. We help researchers prepare papers that meet conference requirements, ensuring proper formatting, accurate referencing, and professional presentation. Our team understands various conference formats and helps you create papers that make an impact.',
    image: 'https://images.unsplash.com/photo-1581091215371-4j9f3b0g7f0f?w=800&h=600&fit=crop'
  },
  keyFeatures: {
    description: 'Professional conference paper preparation services.',
    features: [
      'Conference Format Compliance',
      'Proper Formatting',
      'Accurate Referencing',
      'Professional Presentation',
      'Abstract Preparation',
      'Presentation Support'
    ]
  },
  heroImage: 'https://images.unsplash.com/photo-1581091215371-4j9f3b0g7f0f?w=1600&h=900&fit=crop'
}
};

// Function to get service details by slug
export function getServiceDetails(subslug) {
  return serviceDetailsMap[normalizeSlug(subslug)] || null;
}

export function getRelatedServicesByBadge(badge, parentServiceSlug) {
  // Step 1: deterministic server render (first 3 services)
  const serverServices = Object.values(serviceDetailsMap)
    .filter(service => service.badge === badge)
    .slice(0, 3)
    .map(service => ({
      title: service.title,
      image: service.heroImage,
      href: `/Services/${parentServiceSlug}/${service.slug}`,
    }));

  // State to hold client-side randomized services
  const [relatedServices, setRelatedServices] = useState(serverServices);

  // Step 2: client-side shuffle (after hydration)
  useEffect(() => {
    const services = Object.values(serviceDetailsMap).filter(
      service => service.badge === badge
    );

    // Fisher-Yates shuffle
    for (let i = services.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [services[i], services[j]] = [services[j], services[i]];
    }

    // Take 2 random services
    const randomServices = services.slice(0, 3).map(service => ({
      title: service.title,
      image: service.heroImage,
      href: `/Services/${parentServiceSlug}/${service.slug}`,
    }));

    setRelatedServices(randomServices);
  }, [badge, parentServiceSlug]);

  return relatedServices;
}

// Function to generate default service details if not found
export function generateDefaultServiceDetails(title, description, parentSlug) {
  const badge = getParentServiceBadge(parentSlug);

  return {
    title: title,
    badge: badge,
    heroDescription: description,
    aboutSection: {
      title: title,
      description: description + ' Our team works closely with you to understand your specific requirements and deliver solutions that meet your business objectives. We combine technical expertise with industry best practices to ensure successful implementation and long-term value.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    keyFeatures: {
      description: 'Comprehensive solutions designed to meet your specific needs.',
      features: [
        'Customized Solutions',
        'Expert Implementation',
        'Ongoing Support',
        'Best Practices',
        'Scalable Architecture',
        'Quality Assurance'
      ]
    },
    benefits: [
      'Streamlined workflows tailored to your operations',
      'Secure, scalable architecture ready for growth',
      'Data-driven insights for better decisions',
      'Modern user experiences to boost adoption',
      'Ongoing support to keep systems reliable'
    ],
    useCases: [
      'Teams needing a modern, unified workflow',
      'Multi-location operations requiring visibility',
      'Organizations modernizing legacy tools',
      'Fast-growing teams needing scalable systems'
    ],
    relatedServices: [
      {
        title: 'Custom Web-Based Business Systems',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
        href: `/Services/${parentSlug || 'custom-software-enterprise-solutions'}/custom-web-based-business-systems`,
      },
      {
        title: 'Enterprise-Grade Software Development',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
        href: `/Services/${parentSlug || 'custom-software-enterprise-solutions'}/enterprise-grade-software-development`,
      },
      {
        title: 'ERP System Design & Implementation',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        href: `/Services/${parentSlug || 'custom-software-enterprise-solutions'}/erp-system-design-implementation`,
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop'
  };
}
