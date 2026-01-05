import React from 'react';
import Image from 'next/image';
import BlogListing from './BlogListing';

const BlogSection = () => {
  const featuredPost = {
    category: "Technology",
    date: "January 15, 2025",
    readTime: "8 min read",
    title: "The Future of Web Development in 2025: Trends and Technologies",
    description: "Explore the cutting-edge technologies and trends shaping the future of web development, from AI-powered tools to serverless architectures.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    author: {
      name: "Ahmed Khan",
      role: "Chief Technology Officer",
      avatar: "A"
    }
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background overlay with data visualization effect */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
            alt="Data visualization background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Insights & Resources
          </h1>
          
          <p className="text-3xl text-gray-300 mb-4">
            Stay updated with the latest trends, insights, and best practices
          </p>

          <div className='my-10'></div>
          
          <p className="text-gray-300 text-lg">
            Explore our collection of articles covering technology, business strategies, and industry
            insights to help you stay ahead.
          </p>
        </div>
      </div>

      {/* Featured Post Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-900 rounded-full text-sm font-semibold">
            Featured Article
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Post</h2>

        {/* Featured Post Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Image */}
            <div className="relative h-80 lg:h-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <span className="px-3 py-1 bg-cyan-50 text-cyan-900 rounded-full font-semibold">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {featuredPost.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {featuredPost.description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-900 flex items-center justify-center text-white font-bold text-lg">
                  {featuredPost.author.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{featuredPost.author.name}</p>
                  <p className="text-sm text-gray-600">{featuredPost.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="group px-8 py-4 bg-cyan-900 text-white rounded-xl font-semibold hover:bg-cyan-800 transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Articles
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* BlogListing */}
      <BlogListing/>

    </section>
  );
};

export default BlogSection;