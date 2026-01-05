'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import CTASection from '../Components/CTA/CTAsec';

const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Technology',
    'Mobile Development',
    'Business',
    'Cloud Computing',
    'Design',
    'Security',
    'Methodology',
    'E-Commerce'
  ];

  const articles = [
    {
      id: 1,
      category: 'Business',
      readTime: '7 min',
      title: 'Digital Transformation Strategies for Modern Businesses',
      description: 'Learn how businesses can successfully navigate digital transformation to stay competitive in today\'s market.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      author: {
        name: 'Minhaj Ahmed',
        avatar: 'M'
      },
      date: 'Jan 5',
      tags: ['Digital Transformation', 'Business Strategy']
    },
    {
      id: 2,
      category: 'Cloud Computing',
      readTime: '5 min',
      title: 'Cloud Computing Benefits for Small Businesses',
      description: 'Discover how cloud computing can help small businesses compete with larger enterprises while reducing costs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      author: {
        name: 'Usman Malik',
        avatar: 'U'
      },
      date: 'Dec 28',
      tags: ['Cloud Computing', 'Small Business']
    },
    {
      id: 3,
      category: 'Design',
      readTime: '6 min',
      title: 'UI/UX Design Principles for Modern Web Applications',
      description: 'Explore the essential UI/UX design principles that create engaging and effective user experiences.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      author: {
        name: 'Fatima Hassan',
        avatar: 'F'
      },
      date: 'Dec 20',
      tags: ['UI/UX', 'Design']
    },
    {
      id: 4,
      category: 'Security',
      readTime: '8 min',
      title: 'Cybersecurity Best Practices for Developers',
      description: 'Learn essential cybersecurity practices that every developer should implement to protect applications and user data.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      author: {
        name: 'Zain Abbas',
        avatar: 'Z'
      },
      date: 'Dec 15',
      tags: ['Cybersecurity', 'Security']
    },
    {
      id: 5,
      category: 'Methodology',
      readTime: '7 min',
      title: 'Agile Development Methodology: A Complete Guide',
      description: 'Understand how Agile methodology can improve your development process and deliver better results faster.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      author: {
        name: 'Ahmed Khan',
        avatar: 'A'
      },
      date: 'Dec 10',
      tags: ['Agile', 'Development']
    },
    {
      id: 6,
      category: 'E-Commerce',
      readTime: '6 min',
      title: 'E-Commerce Platform Comparison: Choosing the Right...',
      description: 'Compare popular e-commerce platforms to find the best solution for your business needs and goals.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      author: {
        name: 'Usman Malik',
        avatar: 'U'
      },
      date: 'Dec 5',
      tags: ['E-Commerce', 'Platforms']
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-3 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Article Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-900 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 leading-tight hover:text-cyan-900 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {article.description}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-white font-bold text-sm">
                      {article.author.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{article.author.name}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-4">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get in Touch  */}
        <CTASection/>
      </div>
    </section>
  );
};

export default BlogListing;