'use client';

import CTASection from '@/app/Components/CTA/CTAsec';
import { useParams } from 'next/navigation';

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params?.slug;

  // Helper function to generate slug from title
  function titleToSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // Normalize slug (handle URL encoding, trim, lowercase)
  const normalizedSlug = slug?.toString().toLowerCase().trim() || '';

  const caseStudies = [
    {
      id: 1,
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2074",
      industry: "Retail",
      title: "AI-Powered Analytics Platform for Retail",
      duration: "8 months",
      team: "11 developers",
      client: "RetailIQ",
      tags: ["AI", "Analytics", "Retail", "Machine Learning"],
      challenge:
        "The client needed deep insights into customer behavior, inventory trends, and sales forecasting using large-scale retail data while ensuring accuracy and performance.",
      solution:
        "We built an AI-driven analytics platform with predictive modeling, real-time dashboards, demand forecasting, and automated reporting. The system enabled data-driven decisions that directly improved revenue and operational efficiency."
    },
    {
      id: 2,
      category: "Healthcare Technology",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2074",
      industry: "Healthcare",
      title: "Mobile Healthcare Platform for Telemedicine",
      duration: "7 months",
      team: "9 developers",
      client: "HealthConnect",
      tags: ["Healthcare", "Mobile App", "Telemedicine", "Cloud"],
      challenge:
        "Healthcare providers needed a secure, user-friendly telemedicine platform to reach patients remotely without compromising quality of care or data privacy.",
      solution:
        "We delivered a HIPAA-compliant mobile platform with video consultations, appointment scheduling, digital prescriptions, patient records, and secure messaging, enabling scalable remote healthcare delivery."
    },
    {
      id: 3,
      category: "Enterprise Software",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074",
      industry: "Retail",
      title: "Enterprise ERP Solution for National Retail Chain",
      duration: "12 months",
      team: "18 developers",
      client: "NationMart",
      tags: ["ERP", "Enterprise", "Retail", "Data Management"],
      challenge:
        "The retail chain required a centralized ERP system to unify inventory, finance, HR, and supply chain operations across hundreds of locations.",
      solution:
        "We engineered a scalable ERP solution with real-time inventory tracking, financial reporting, supply chain optimization, and role-based access, forming the operational backbone of the organization."
    },
    {
      id: 4,
      category: "Cloud Engineering",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2074",
      industry: "Manufacturing",
      title: "Cloud Migration for Enterprise Manufacturing",
      duration: "6 months",
      team: "10 engineers",
      client: "IndusManufacturing",
      tags: ["Cloud Migration", "Infrastructure", "DevOps"],
      challenge:
        "Legacy on-premise systems were limiting scalability, increasing downtime, and driving high operational costs.",
      solution:
        "We executed a zero-downtime cloud migration, modernized infrastructure using microservices, implemented CI/CD pipelines, and significantly improved reliability, scalability, and cost efficiency."
    },
    {
      id: 5,
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?q=80&w=2074",
      industry: "Fashion",
      title: "E-Commerce Platform for Luxury Fashion Brands",
      duration: "5 months",
      team: "8 developers",
      client: "LuxeMode",
      tags: ["E-Commerce", "Luxury Brands", "UI/UX", "Payments"],
      challenge:
        "Luxury brands needed a premium e-commerce experience that reflected exclusivitye of their identity while driving conversions and global reach.",
      solution:
        "We created a high-end e-commerce platform with immersive design, advanced product catalogs, secure payments, multi-currency support, and performance optimization to maximize online sales."
    },
    {
      id: 6,
      category: "FinTech",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2074",
      industry: "Financial Services",
      title: "Mobile Banking Application for FinTech Startup",
      duration: "9 months",
      team: "12 developers",
      client: "FinNova",
      tags: ["FinTech", "Mobile Banking", "Security", "Payments"],
      challenge:
        "The startup needed a highly secure, intuitive mobile banking app capable of handling rapid user growth and strict regulatory requirements.",
      solution:
        "We developed a secure mobile banking solution with biometric authentication, real-time transactions, digital wallets, fraud detection, and regulatory compliance."
    },
    {
      id: 7,
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074",
      industry: "Technology",
      title: "SaaS Project Management Platform",
      duration: "9 months",
      team: "13 developers",
      client: "ProjectFlow",
      tags: ["Software Development", "Web Design", "Cloud Solutions"],
      challenge:
        "ProjectFlow needed a modern, scalable SaaS platform that could compete with established project management tools.",
      solution:
        "We developed a full-featured SaaS platform with real-time collaboration, task management, Gantt charts, analytics, mobile apps, and enterprise-grade integrations."
    },
    {
      id: 8,
      category: "Web Design & Branding",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2074",
      industry: "Corporate",
      title: "Complete Website Redesign for Corporate Brand",
      duration: "4 months",
      team: "6 designers & developers",
      client: "CorpEdge",
      tags: ["Web Design", "Branding", "UI/UX"],
      challenge:
        "The corporate brand needed a modern digital presence that aligned with its evolving identity and improved lead generation.",
      solution:
        "We delivered a complete website redesign with a refined brand system, responsive layouts, performance optimization, and conversion-focused UX."
    }
  ];

  // Find the matching case study based on slug
  const studyData = caseStudies.find(study => {
    return titleToSlug(study.title) === normalizedSlug;
  });

  // If no match found, log for debugging and use first as fallback
  if (!studyData) {
    console.warn(`No case study found for slug: "${normalizedSlug}". Available slugs:`, 
      caseStudies.map(s => titleToSlug(s.title))
    );
  }

  const finalStudyData = studyData || caseStudies[0];

  // Technologies mapping
  const technologiesMap = {
    "AI-Powered Analytics Platform for Retail": ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS', 'Apache Spark'],
    "Mobile Healthcare Platform for Telemedicine": ['React Native', 'Node.js', 'MongoDB', 'AWS', 'WebRTC', 'HIPAA Compliance'],
    "Enterprise ERP Solution for National Retail Chain": ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'AWS', 'Docker'],
    "Cloud Migration for Enterprise Manufacturing": ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Ansible', 'CI/CD'],
    "E-Commerce Platform for Luxury Fashion Brands": ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
    "Mobile Banking Application for FinTech Startup": ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Biometric Auth', 'Security'],
    "SaaS Project Management Platform": ['React', 'Node.js', 'MongoDB', 'AWS', 'WebSockets', 'REST API'],
    "Complete Website Redesign for Corporate Brand": ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'WordPress', 'SEO']
  };

  const technologies = technologiesMap[finalStudyData.title] || ['React', 'Node.js', 'AWS'];

  // Gallery images mapping
  const galleryImagesMap = {
    "Enterprise ERP Solution for National Retail Chain": [
      {
        src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
        alt: "ERP Business Dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
        alt: "Retail Management System"
      },
      {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        alt: "Enterprise Software Team"
      }
    ],
    "Mobile Healthcare Platform for Telemedicine": [
      {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
        alt: "Telemedicine Consultation"
      },
      {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
        alt: "Healthcare Mobile App"
      },
      {
        src: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=400&h=300&fit=crop",
        alt: "Doctor Video Call"
      }
    ],
    "Cloud Migration for Enterprise Manufacturing": [
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        alt: "Cloud Infrastructure"
      },
      {
        src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
        alt: "Manufacturing Facility"
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        alt: "Enterprise Data Center"
      }
    ],
    "E-Commerce Platform for Luxury Fashion Brands": [
      {
        src: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=400&h=300&fit=crop",
        alt: "Luxury Fashion Store"
      },
      {
        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop",
        alt: "Online Fashion Shopping"
      },
      {
        src: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=300&fit=crop",
        alt: "Premium Fashion Brand"
      }
    ],
    "Mobile Banking Application for FinTech Startup": [
      {
        src: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=300&fit=crop",
        alt: "Mobile Banking App"
      },
      {
        src: "https://images.unsplash.com/photo-1616077168712-fc6c788db4d5?w=400&h=300&fit=crop",
        alt: "Digital Wallet"
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        alt: "FinTech Payment System"
      }
    ],
    "SaaS Project Management Platform": [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        alt: "Project Management Dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        alt: "Team Collaboration"
      },
      {
        src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop",
        alt: "Task Management Software"
      }
    ],
    "Complete Website Redesign for Corporate Brand": [
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        alt: "Corporate Website Design"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        alt: "Modern Web UI"
      },
      {
        src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=300&fit=crop",
        alt: "Brand Identity Design"
      }
    ],
    "AI-Powered Analytics Platform for Retail": [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        alt: "AI Analytics Dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        alt: "Retail Data Visualization"
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        alt: "AI Data Network"
      }
    ]
  };

  const galleryImages = galleryImagesMap[finalStudyData.title] || [
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      alt: 'Project Gallery'
    },
    {
      src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      alt: 'Project Showcase'
    },
    {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      alt: 'Project Overview'
    }
  ];

  const testimonialsData = [
    {
      topic: "AI-Powered Analytics Platform for Retail",
      quote:
        "The AI platform has transformed how we make business decisions. The predictive insights are incredibly accurate and have directly contributed to our bottom line.",
      author: "Patricia Lee"
    },
    {
      topic: "Mobile Healthcare Platform for Telemedicine",
      quote:
        "The mobile platform has revolutionized how we deliver healthcare. Our patients love the convenience, and we've been able to serve more people efficiently while maintaining the highest standards of care.",
      author: "Dr. John Doe"
    },
    {
      topic: "Enterprise ERP Solution for National Retail Chain",
      quote:
        "Minhaj Solutions transformed our entire operation. The ERP system they built has become the backbone of our business, enabling us to scale efficiently and make data-driven decisions.",
      author: "John Smith"
    },
    {
      topic: "Complete Website Redesign for Corporate Brand",
      quote:
        "The new website perfectly represents our brand and has significantly improved our online presence. We're generating more qualified leads than ever before.",
      author: "Jane Doe"
    },
    {
      topic: "Cloud Migration for Enterprise Manufacturing",
      quote:
        "The cloud migration was executed flawlessly with zero business disruption. Our systems are now more reliable, scalable, and cost-effective than ever before.",
      author: "Michael Brown"
    },
    {
      topic: "E-Commerce Platform for Luxury Fashion Brands",
      quote:
        "The new platform perfectly captures the essence of our luxury brands. The design is stunning, and the functionality has exceeded our expectations. Our online sales have never been better.",
      author: "Emily White"
    },
    {
      topic: "Mobile Banking Application for FinTech Startup",
      quote:
        "The security and user experience of our mobile banking app have set a new standard in the industry. Our users trust the platform, and we've seen incredible growth.",
      author: "—"
    },
    {
      topic: "SaaS Project Management Platform",
      quote:
        "ProjectFlow has become essential to how we work. The platform is intuitive, powerful, and has significantly improved our team's productivity and project outcomes.",
      author: "—"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-cyan-900 text-white px-6">
        <div className="max-w-4xl w-full">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 text-cyan-100">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <span>/</span>
            <span className="text-white">{finalStudyData.title}</span>
          </div>

          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-cyan-700/50 rounded text-sm font-medium mb-6">
            {finalStudyData.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-12">
            {finalStudyData.title}
          </h1>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mb-8 max-w-xl">
            <div>
              <p className="text-cyan-200 text-sm mb-1">Client</p>
              <p className="font-semibold text-lg">{finalStudyData.client}</p>
            </div>

            <div>
              <p className="text-cyan-200 text-sm mb-1">Industry</p>
              <p className="font-semibold text-lg">{finalStudyData.industry}</p>
            </div>

            <div>
              <p className="text-cyan-200 text-sm mb-1">Duration</p>
              <p className="font-semibold text-lg">{finalStudyData.duration}</p>
            </div>

            <div>
              <p className="text-cyan-200 text-sm mb-1">Team Size</p>
              <p className="font-semibold text-lg">{finalStudyData.team}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {finalStudyData.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-cyan-700/50 rounded text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>


      {/* Featured Image */}
      <section className="px-6 mt-16 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={finalStudyData.image}
              alt={finalStudyData.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* The Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {finalStudyData.challenge}
            </p>
          </div>

          {/* Our Solution */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Solution
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {finalStudyData.solution}
            </p>
          </div>

          {/* Results (if provided) */}
          {finalStudyData.results && (
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {finalStudyData.results.map((result, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                    <p className="text-4xl md:text-5xl font-bold text-cyan-800 mb-3">
                      {result.metric}
                    </p>
                    <p className="text-gray-600 text-base">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


      <div className="w-full">
        {/* Technologies Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Technologies Used
            </h2>
            <p className="text-gray-600 mb-12">
              The tech stack that powered this project
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white px-8 py-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-gray-800 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Project Gallery
              </h2>
              <p className="text-gray-600">
                Visual showcase of the project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-cyan-900 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg
                className="w-16 h-16 mx-auto text-cyan-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>

            {(() => {
              const testimonial = testimonialsData.find(t => t.topic === finalStudyData.title) || testimonialsData[0];
              const authorInitial = testimonial.author && testimonial.author !== "—" ? testimonial.author.charAt(0).toUpperCase() : "C";
              return (
                <>
                  <blockquote className="text-white text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {testimonial.author && testimonial.author !== "—" && (
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {authorInitial}
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold">{testimonial.author}</div>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </section>

        {/* cta section  */}
        <CTASection/>
      </div>
    </div>
  );
}