import React from 'react';

const ProcessTimeline = ({slug}) => {

  const getprocessesKey = (slug) => {
    if (!slug) return 'SoftwareEnterpriseSol';
    
    // Map slugs to service data keys
    if (slug.includes('custom-software') || slug.includes('enterprise')) {
      return 'SoftwareEnterpriseProcesses';
    } else if (slug.includes('web') || slug.includes('platform')) {
      return 'webPlatformProcesses';
    } else if (slug.includes('mobile') || slug.includes('app')) {
      return 'mobileAppProcesses';
    } else if (slug.includes('ai') || slug.includes('data') || slug.includes('automation')) {
      return 'aiDataProcesses';
    } else if (slug.includes('academic') || slug.includes('scientific') || slug.includes('writing')) {
      return 'academicWritingProcesses';
    }
  };

  const processesData = {
  SoftwareEnterpriseProcesses :[
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We conduct in-depth analysis of your business processes, pain points, and objectives to define clear requirements and project scope."
    },
    {
      number: "02",
      title: "Solution Architecture",
      description: "Our architects design a scalable, secure solution blueprint that aligns with your technical requirements and business goals."
    },
    {
      number: "03",
      title: "Agile Development",
      description: "We develop your solution iteratively with regular demos, ensuring transparency and flexibility to adapt to changing needs."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "We handle deployment, training, and provide ongoing support to ensure your system delivers lasting value."
    }
  ],

  webPlatformProcesses : [
    {
      number: "01",
      title: "Requirement Gathering",
      description: "We collect detailed requirements from stakeholders to understand business goals, target users, and technical constraints."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our designers create wireframes and prototypes to ensure intuitive interfaces and engaging user experiences."
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "We build responsive websites and web platforms, integrating necessary APIs and third-party services for full functionality."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Our QA team performs thorough testing to ensure cross-browser compatibility, performance, and bug-free delivery."
    },
    {
      number: "05",
      title: "Launch & Maintenance",
      description: "We deploy the platform, monitor performance, and provide ongoing support to ensure smooth operations."
    }
  ],

  mobileAppProcesses : [
    {
      number: "01",
      title: "Concept & Strategy",
      description: "We define the app concept, target audience, and features, ensuring alignment with business goals."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "We design intuitive mobile interfaces that provide seamless user experiences across devices."
    },
    {
      number: "03",
      title: "App Development",
      description: "Our team develops native or cross-platform apps using modern frameworks, focusing on performance and security."
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "We rigorously test the app on multiple devices and optimize for speed, stability, and usability."
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "We publish the app on App Store/Play Store and provide continuous updates and support."
    }
  ],

  aiDataProcesses :[
    {
      number: "01",
      title: "Data Collection & Cleaning",
      description: "We gather and preprocess structured and unstructured data to ensure accuracy and consistency for AI models."
    },
    {
      number: "02",
      title: "Model Design & Development",
      description: "Our data scientists design machine learning and AI models tailored to business requirements."
    },
    {
      number: "03",
      title: "Integration & Automation",
      description: "We integrate AI solutions into existing systems and automate workflows to increase efficiency."
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "We monitor model performance, refine algorithms, and ensure continuous improvement and reliability."
    },
    {
      number: "05",
      title: "Insight & Reporting",
      description: "We provide actionable insights through dashboards, reports, and visualizations for informed decision-making."
    }
  ],
  
  academicWritingProcesses :[
    {
      number: "01",
      title: "Research & Topic Analysis",
      description: "We analyze the topic thoroughly, reviewing literature and gathering relevant sources for accuracy and credibility."
    },
    {
      number: "02",
      title: "Drafting & Structure",
      description: "Our writers create well-structured drafts with clear arguments, logical flow, and proper academic formatting."
    },
    {
      number: "03",
      title: "Editing & Proofreading",
      description: "We refine language, grammar, and formatting to ensure high-quality, publication-ready documents."
    },
    {
      number: "04",
      title: "Plagiarism Check & References",
      description: "We verify originality and properly cite sources according to academic standards and style guides."
    },
    {
      number: "05",
      title: "Final Review & Submission",
      description: "We conduct a final review and prepare the document for submission, ensuring compliance with all guidelines."
    }
  ]
}
const processKey = getprocessesKey(slug);
const processes = processesData[processKey]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-cyan-600">Process</span>
          </h1>
          <p className="text-lg text-gray-600">
            A systematic, collaborative approach that ensures we deliver measurable results
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-white rounded-xl shadow-md p-8 mx-auto max-w-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  {/* Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-cyan-900 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {process.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>

                {/* Connector line to next item (except last) */}
                {index < processes.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-8 bottom-0 translate-y-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;