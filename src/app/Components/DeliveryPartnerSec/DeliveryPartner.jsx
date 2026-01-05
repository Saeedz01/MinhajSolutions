'use client';

import { Target, Zap, Shield, Users, Award, Headphones } from 'lucide-react';

export default function DeliveryPartnerSection() {
  const features = [
    {
      id: 1,
      badge: 'Strategy',
      icon: Target,
      title: 'Outcome-led roadmaps',
      description: 'Co-create a measurable roadmap in week one with KPIs, milestones, and success criteria everyone agrees on.',
      highlight: 'Roadmap ready in week one'
    },
    {
      id: 2,
      badge: 'Delivery',
      icon: Zap,
      title: 'Momentum every sprint',
      description: 'Two-week increments with demos and release-ready builds that shorten time-to-value without sacrificing quality.',
      highlight: 'Demo every Friday'
    },
    {
      id: 3,
      badge: 'Reliability',
      icon: Shield,
      title: 'Quality baked in',
      description: 'Automated checks, QA gates, and peer reviews prevent rework and keep launches calm and predictable.',
      highlight: 'Zero missed release windows in the last 12 months'
    },
    {
      id: 4,
      badge: 'Team',
      icon: Users,
      title: 'Embedded leadership',
      description: 'Product and engineering leads stay on your account—not a rotating bench—so decisions stay sharp and consistent.',
      highlight: 'Same leads from kickoff to scale'
    },
    {
      id: 5,
      badge: 'Expertise',
      icon: Award,
      title: 'Cross-industry depth',
      description: 'Fintech, healthcare, retail, and growth-stage SaaS experience means fewer surprises and compliant builds.',
      highlight: '500+ launches shipped'
    },
    {
      id: 6,
      badge: 'Support',
      icon: Headphones,
      title: 'Follow-the-sun care',
      description: '24/7 support with clear SLAs, proactive monitoring, and calm incident management when you need it most.',
      highlight: '12 min average first response'
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-1">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-cyan-800 rounded-full"></div>
              <span className="text-cyan-800 font-semibold text-sm">Why partners stay with us</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A delivery partner that feels in-house
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Small, senior squads that move fast, stay transparent, and keep every milestone measurable.
            </p>

            {/* Key Points */}
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-2 h-2 bg-cyan-800 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Hands-on partnership</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Senior leads stay engaged from discovery to post-launch, so context never gets lost.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-800 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Transparent delivery</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Weekly demos, sprint scorecards, and open channels keep you clear on progress without chasing updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-4xl font-bold text-cyan-800 mb-2">98%</div>
                <p className="text-gray-600 text-sm">client satisfaction across 500+ launches</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-4xl font-bold text-cyan-800 mb-2">12 yrs</div>
                <p className="text-gray-600 text-sm">average leadership experience per squad</p>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                  >
                    {/* Badge */}
                    <div className="inline-block bg-cyan-50 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {feature.badge}
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight pt-2">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Highlight */}
                    <p className="text-cyan-800 font-semibold text-sm">
                      {feature.highlight}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section - How We Work Together */}
        <div className="w-full max-w-[840px] mx-auto lg:mx-0 lg:w-[840px] lg:ml-[440px] mt-16 bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">How we work together</h3>
              <p className="text-gray-600">
                Simple rituals that keep collaboration calm, predictable, and human.
              </p>
            </div>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Roadmap and success metrics defined together in week one
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Dedicated Slack or Teams pod with the same senior leads
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Post-launch care with runbooks, monitoring, and optimizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}