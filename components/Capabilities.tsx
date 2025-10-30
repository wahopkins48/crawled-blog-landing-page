import React from 'react';

const capabilitiesList = [
  'Generative Engine Optimization',
  'Technical SEO & Auditing',
  'Content Strategy & AI-driven search',
  'Reputation & Visibility Management',
  'Local SEO & GMB',
  'User Experience & Conversion Strategy',
  'Analytics & Reporting',
  'E-E-A-T & Trust Signals',
  'Internal Linking & Topical Clustering',
  'Keyword Research & Analysis',
  'Link-building & Citation Building',
  'Semantic & Schema Markup',
];

const CheckIcon = () => (
  <svg className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-white text-center mb-4">Full Capabilities</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Everything that gets businesses found on the web.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {capabilitiesList.map((item, index) => (
            <div key={index} className="flex items-center">
              <CheckIcon />
              <span className="text-lg text-gray-300">{item}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#contact" className="border border-white text-white font-bold py-3 px-8 rounded-sm text-lg hover:bg-white hover:text-black transition-colors">
                Work With Me
            </a>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;