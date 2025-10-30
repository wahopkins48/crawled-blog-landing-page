import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-white leading-tight animate-fade-in-down">
          Wesley Hopkins
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-300 mt-4 animate-fade-in-up">
          Tuning signals for the generative search era.
        </p>
        <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
          Digital Visibility Architect
        </p>
        <div className="mt-12">
          <a
            href="https://crawled.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-sm text-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Read The Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;