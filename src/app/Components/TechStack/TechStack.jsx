'use client';

export default function TechStackSection() {
  const topTechnologies = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png' },
    { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'PostgreSQL', logo: 'https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg' },
    { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Bootstrap', logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
    { name: 'Vue', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' }
  ];

  const bottomTechnologies = [
    { name: 'Firebase', logo: 'https://www.gstatic.com/devrel-devsite/prod/v1084788ea273f4f1d99ef0cbbcc97f012678d883c64443835433de800c09f11e/firebase/images/touchicon-180.png' },
    ...topTechnologies
  ];

  return (
    <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
  
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-800 px-4 py-2 rounded-full mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-cyan-800 rounded-full" />
            <span className="font-semibold text-xs sm:text-sm">
              Technologies We Use
            </span>
          </div>
  
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Tech Stack
          </h2>
  
          <p className="text-base sm:text-lg text-gray-600">
            Cutting-edge technologies powering modern solutions
          </p>
        </div>
  
        {/* Rows */}
        <div className="space-y-6 sm:space-y-8">
  
          {/* Top Row */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 sm:gap-6 scroll-left-animation">
              {[...topTechnologies, ...topTechnologies, ...topTechnologies].map(
                (tech, index) => (
                  <div
                    key={`top-${index}`}
                    className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                               bg-white rounded-2xl border-2 border-gray-200
                               flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6
                               hover:border-cyan-800 hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://via.placeholder.com/100x100?text=' + tech.name;
                      }}
                    />
                  </div>
                )
              )}
            </div>
          </div>
  
          {/* Bottom Row */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 sm:gap-6 scroll-right-animation">
              {[...bottomTechnologies, ...bottomTechnologies, ...bottomTechnologies].map(
                (tech, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                               bg-white rounded-2xl border-2 border-gray-200
                               flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6
                               hover:border-cyan-800 hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://via.placeholder.com/100x100?text=' + tech.name;
                      }}
                    />
                  </div>
                )
              )}
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
  
}
