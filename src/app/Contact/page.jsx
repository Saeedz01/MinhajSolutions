'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Check, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    location: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className=" relative bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white min-h-screen flex items-center mb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-80">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full inline-flex items-center justify-center"></span>
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Talk Business
            </h1>
            
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Get in touch with Minhaj Solutions for all your technology needs and inquiries. 
              We're here to help you transform your business with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-16 lg:-mt-20 relative z-20 pb-20">
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-8">
          {/* Offices Card */}
          <aside className="bg-cyan-900 text-white rounded-xl shadow-2xl p-6 lg:p-8 h-fit">
            <h2 className="text-2xl font-bold mb-6">Offices</h2>
            
            <div className="space-y-6">
              <OfficeItem
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                content="info@minhajsolutions.com"
              />
              
              <OfficeItem
                icon={<Phone className="w-5 h-5" />}
                title="Phone (UK)"
                content="+44 7400 719523"
              />
              
              <OfficeItem
                icon={<MessageSquare className="w-5 h-5" />}
                title="WhatsApp (Pakistan)"
                content="+92 322 0681998"
              />
              
              <OfficeItem
                icon={<MapPin className="w-5 h-5" />}
                title="Locations"
                content={
                  <>
                    <p className="mb-3">
                      <strong>Pakistan:</strong><br />
                      84 A, Sahara City, Renala Khurrad, Okara, Punjab, Pakistan
                    </p>
                    <p>
                      <strong>United Kingdom:</strong><br />
                      124 City Road, London
                    </p>
                  </>
                }
              />
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 space-y-3">
              <FeatureItem text="24/7 Support Available" />
              <FeatureItem text="Free Consultation" />
              <FeatureItem text="Quick Response Time" />
            </div>
          </aside>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-10">
            <h2 className="text-3xl font-bold text-cyan-800 mb-3">
              Let's discuss your project
            </h2>
            <p className="text-gray-600 mb-8">
              We are committed to understanding your requirements and crafting a tailored 
              solution that aligns with your goals. Enter your details and someone from our 
              team will reach out to find a time to connect with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
                
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </div>

              <FormField
                label="Business Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@company.com"
                required
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                />
                
                <FormField
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="CEO, CTO, Manager"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select Country</option>
                    <option value="pk">Pakistan</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="ae">United Arab Emirates</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to Minhaj Solutions processing my personal information as set 
                  out in the Privacy Policy for marketing purposes and therefore to be 
                  contacted via the contact information I provided. Given the global nature 
                  of Minhaj Solution's business, such processing may take place outside of 
                  my home jurisdiction. The consent can be withdrawn at any time under the 
                  contact in the Privacy Policy. <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-900 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg">
              Choose your preferred method to reach out to us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
            <ContactMethod
              icon={<Mail className="w-7 h-7 " />}
              title="Email Us"
              description="Send us an email and we'll get back to you within 24 hours"
              contact="info@minhajsolutions.com"
            />
            
            <ContactMethod
              icon={<Phone className="w-7 h-7" />}
              title="Call Us"
              description="Speak directly with our team during business hours"
              contact="+44 7400 719523 (UK)"
              extraContact="+92 322 0681998 (WhatsApp)"
            />
            
            <ContactMethod
              icon={<MapPin className="w-7 h-7" />}
              title="Our Locations"
              description="We have offices in two countries"
              location="Pakistan"
              locationDetails="84 A, Sahara City, Renala Khurrad, Okara, Punjab, Pakistan"
              location2="United Kingdom"
              locationDetails2="124 City Road, London"
            />
          </div>
        </div>
      </section>

      {/* <style jsx global>{`
        @keyframes grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style> */}
    </div>
  );
}

// Helper Components
function OfficeItem({ icon, title, content }) {
  return (
    <div className="flex gap-4 pb-6 border-b border-white/10 last:border-0">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="text-sm text-cyan-100 opacity-90">{content}</div>
      </div>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3 text-emerald-300" />
      </div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
      />
    </div>
  );
}

function ContactMethod({
  icon,
  title,
  description,
  contact,
  extraContact,
  location,
  locationDetails,
  location2,
  locationDetails2,
}) {
  return (
    <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-5 text-cyan-900">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-cyan-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
      {contact && (
        <div className="text-center">
          <a href={`mailto:${contact}`} className="text-cyan-700 font-semibold hover:underline text-sm">
            {contact}
          </a>
        </div>
      )}
      {extraContact && (
        <div className="text-center mt-2">
          <a href={`tel:${extraContact}`} className="text-cyan-700 font-semibold hover:underline text-sm">
            {extraContact}
          </a>
        </div>
      )}
      {location && (
        <div className="mt-4 text-center">
          <p className="font-semibold text-sm text-cyan-800">{location}</p>
          <p className="text-xs text-gray-500 mt-1">{locationDetails}</p>
        </div>
      )}
      {location2 && (
        <div className="mt-3 text-center">
          <p className="font-semibold text-sm text-cyan-800">{location2}</p>
          <p className="text-xs text-gray-500 mt-1">{locationDetails2}</p>
        </div>
      )}
    </div>
  );
}