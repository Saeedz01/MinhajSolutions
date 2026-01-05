import React from 'react';
import Image from 'next/image';
import CoreValues from './CoreValues';
import LeadershipTeam from './LeadershipTeam';
import CodeOfConduct from './CodeOfConduct';
import CTASection from '../Components/CTA/CTAsec';

const AboutSection = () => {
    return (
        <section className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
                        alt="Technology Background"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <button className="mb-8 px-6 py-2 bg-slate-800/80 text-white rounded-full text-sm border border-slate-700 hover:bg-slate-700 transition-colors">
                        • About Minhaj Solutions
                    </button>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Empowering Businesses,<br />
                        Inspiring Innovation
                    </h1>

                    <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
                        At Minhaj Solutions, we specialize in transforming businesses with enterprise-grade
                        software solutions tailored to their needs. With a legacy of technical excellence, a
                        global team of experts, and a passion for innovation, we help organizations thrive in an
                        ever-evolving digital landscape.
                    </p>
                </div>
            </div>


            {/* Philosophy Section */}
            <div className="min-h-screen flex items-center py-20 px-6">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-block mb-6">
                                <span className="text-cyan-900 font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-cyan-900 rounded-full"></span>
                                    Our Philosophy
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Building Tomorrow's{' '}
                                <span className="text-cyan-900">Solutions Today</span>
                            </h2>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We believe technology should empower, not overwhelm. Our approach
                                centers on understanding your unique challenges and crafting solutions
                                that drive measurable results while scaling with your growth.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                Every project is an opportunity to innovate, collaborate, and exceed
                                expectations. We combine technical expertise with strategic thinking to
                                deliver software that transforms how you do business.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
                                alt="Innovative technology sculpture"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Mission and Vision Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mt-20">
                        {/* Mission Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                            <div className="w-12 h-12 bg-cyan-900 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="3" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="8" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="11" strokeWidth="2" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>

                            <p className="text-gray-600 leading-relaxed">
                                To empower businesses with cutting-edge technology solutions, unlocking
                                their growth potential by connecting them with passionate and skilled
                                engineers. We strive to deliver exceptional value through innovative
                                solutions that transform how businesses operate and compete in the
                                digital age.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                            <div className="w-12 h-12 bg-cyan-900 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>

                            <p className="text-gray-600 leading-relaxed">
                                At Minhaj Solutions, we envision transforming IT systems into smart, agile,
                                and AI-driven digital assets. With years of expertise, we empower global
                                clients through innovative, adaptive solutions, shaping a future where
                                technology meets the dynamic demands of a connected world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our core values  */}
             <CoreValues/>

             {/* LeadershipTeam */}
             <LeadershipTeam/>

             {/* CodeOfConduct */}
             <CodeOfConduct/>

             {/* Get in touch */}
             <CTASection/>
        </section>

    );
};

export default AboutSection;