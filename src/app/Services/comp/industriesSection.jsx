import React from 'react';
import { Check } from 'lucide-react';

const IndustriesSection = ({slug}) => {

  const getIndustriesKey = (slug) => {
    if (!slug) return 'SoftwareEnterpriseSol';
    
    // Map slugs to service data keys
    if (slug.includes('custom-software') || slug.includes('enterprise')) {
      return 'SoftwareEnterpriseIndustries';
    } else if (slug.includes('web') || slug.includes('platform')) {
      return 'webPlatformIndustries';
    } else if (slug.includes('mobile') || slug.includes('app')) {
      return 'mobileAppIndustries';
    } else if (slug.includes('ai') || slug.includes('data') || slug.includes('automation')) {
      return 'aiDataIndustries';
    } else if (slug.includes('academic') || slug.includes('scientific') || slug.includes('writing')) {
      return 'academicWritingIndustries';
    }
  };

  const serviceIndustries= {

   SoftwareEnterpriseIndustries :[
    {
      title: "Manufacturing",
      description: "Streamline production workflows, inventory management, and quality control with custom ERP and MES solutions tailored for manufacturing operations."
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant patient management systems, electronic health records, and healthcare operations platforms that improve patient care."
    },
    {
      title: "Finance & Banking",
      description: "Secure financial software for transaction processing, compliance management, and customer relationship management."
    },
    {
      title: "Retail & Distribution",
      description: "Integrated retail management systems covering POS, inventory, supply chain, and omnichannel customer experiences."
    }
  ],
   webPlatformIndustries :[
    { title: "E-commerce", description: "Custom web platforms for online stores with secure payment gateways, product management, and personalized shopping experiences." },
    { title: "Education", description: "Learning management systems and educational portals that enhance teaching, learning, and student engagement." },
    { title: "Media & Entertainment", description: "Interactive platforms for streaming, content management, and audience engagement across digital channels." },
    { title: "Travel & Hospitality", description: "Booking, reservation, and management systems that provide seamless user experiences for customers and staff." },
    { title: "Logistics & Supply Chain", description: "Web-based systems for real-time tracking, inventory management, and operational optimization." }
  ],

   mobileAppIndustries :[
    { title: "Healthcare", description: "Mobile apps for patient monitoring, appointment scheduling, telemedicine, and health tracking." },
    { title: "Finance & Banking", description: "Secure mobile banking and payment apps with account management, transactions, and notifications." },
    { title: "Fitness & Wellness", description: "Mobile apps for workout tracking, health monitoring, and personalized fitness programs." },
    { title: "Retail & E-commerce", description: "Shopping and delivery apps providing seamless customer experiences and mobile commerce solutions." },
    { title: "Transportation & Ride-Sharing", description: "Mobile solutions for booking, tracking, and managing transport services efficiently." }
  ],

   aiDataIndustries :[
    { title: "Healthcare", description: "AI-driven diagnostics, patient data analysis, and predictive models for better healthcare outcomes." },
    { title: "Finance & Banking", description: "Automated fraud detection, credit scoring, and intelligent risk management solutions." },
    { title: "Retail & E-commerce", description: "AI-powered recommendation engines, demand forecasting, and customer behavior analysis." },
    { title: "Manufacturing", description: "Predictive maintenance, production optimization, and quality control using AI and automation." },
    { title: "Telecommunications", description: "Network optimization, customer support automation, and data-driven service improvements." }
  ],

   academicWritingIndustries :[
    { title: "Higher Education", description: "Academic writing, research papers, and publication support for universities and scholars." },
    { title: "Research Institutes", description: "Scientific writing, data analysis, and report generation for research organizations." },
    { title: "Corporate Training", description: "Customized learning content, manuals, and documentation for corporate education programs." },
    { title: "Healthcare & Pharma", description: "Scientific documentation, clinical trial reports, and research publications in life sciences." },
    { title: "Government & Policy Research", description: "Policy papers, technical reports, and research documentation for governmental bodies." }
  ],
}
  const industryKey = getIndustriesKey(slug);
const industries = serviceIndustries[industryKey]

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-900 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-cyan-900 rounded-full"></span>
              INDUSTRIES WE FOCUS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Industries We Serve with Our{' '}
            <span className="text-cyan-600">Custom Software & Enterprise Solutions</span>{' '}
            Services
          </h1>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-cyan-200"
            >
              <div className="flex items-start gap-4">
                {/* Check Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-900 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;