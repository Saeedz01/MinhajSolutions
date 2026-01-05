import React from 'react';
import Image from 'next/image';

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Wajid Maqsood",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Javed Ahmad",
      position: "Marketplace Operations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    },
    {
      name: "Imdad Hussain",
      position: "Mobile Application Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    },
    {
      name: "Abd ul Rehman Zaki",
      position: "Senior mern stack developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
    },
    {
      name: "Hassan Raza",
      position: "Junior mern stack developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Sadia Aziz",
      position: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "Waqar Rafique",
      position: "Motion Graphic Designer",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&q=80"
    },
    {
      name: "Zeeshan",
      position: "Mobile Application Developer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80"
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="mb-6 px-6 py-2 bg-white text-cyan-900 rounded-full text-sm border border-gray-200 font-semibold flex items-center gap-2 mx-auto">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Our Leadership
          </button>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-cyan-900">Leadership Team</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our capability and competencies are bolstered by diverse global leadership
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;