import CTASection from "../Components/CTA/CTAsec";
import Articles from "./Articles";
import FeaturedCaseStudies from "./CaseStudies";



export default function HeroSection() {
    return (
        <>
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Work
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8">
            Success Stories & Case Studies
          </h2>
          
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects across various industries and technologies.
            Each case study showcases our expertise and the results we deliver for our clients.
          </p>
        </div>
      </section>
        {/* case studies section */}
        <FeaturedCaseStudies/>

        <Articles/>

        {/* CTA Section  */}
        <CTASection/>
        </>
    );
  }