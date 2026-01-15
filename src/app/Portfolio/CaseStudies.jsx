export default function FeaturedCaseStudies() {
    const caseStudies = [
      {
        id: 1,
        category: "Software Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
        industry: "Retail & E-Commerce",
        title: "Enterprise ERP Solution for National Retail Chain",
        slug: "enterprise-erp-solution-for-national-retail-chain",
        description: "Developed a comprehensive ERP system that streamlined operations across 200+ retail locations, reducing operational costs by 35...",
        duration: "12 months",
        team: "15 developers"
      },
      {
        id: 2,
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
        industry: "Healthcare",
        title: "Mobile Healthcare Platform for Telemedicine",
        slug: "mobile-healthcare-platform-for-telemedicine",
        description: "Built a comprehensive telemedicine platform with mobile apps for iOS and Android, enabling 50,000+ patients to access...",
        duration: "8 months",
        team: "12 developers"
      },
      {
        id: 3,
        category: "Cloud Solutions",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
        industry: "Manufacturing",
        title: "Cloud Migration for Enterprise Manufacturing",
        slug: "cloud-migration-for-enterprise-manufacturing",
        description: "Migrated legacy systems to AWS cloud infrastructure, improving system reliability to 99.9% uptime and reducing IT costs by 50...",
        duration: "14 months",
        team: "18 developers"
      }
    ];
  
    return (
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-4">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured Case Studies
            </h2>
          </div>
  
          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image with Category Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-cyan-800 text-white rounded text-sm font-medium">
                    {study.category}
                  </span>
                </div>
  
                {/* Content */}
                <div className="p-6">
                  <p className="text-cyan-800 text-sm font-semibold mb-2">
                    {study.industry}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
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