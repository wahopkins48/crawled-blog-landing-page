import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="https://picsum.photos/seed/wesley/500/600" 
              alt="Wesley Hopkins" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">About Wesley</h2>
            <p className="text-lg text-gray-300 mb-6">
              Wesley Hopkins is a writer, editor, and digital strategist who blends SEO, GEO, AI, and UX to help brands thrive in the age of generative search. His work is about making brands not just searchable, but truly understandable to both people and machines.
            </p>
            <p className="text-lg text-gray-400">
              A minor in Human-Computer Interaction and User Experience brought him to bridge the gap between technical systems and human needs. Wesley believes that AI doesn't replace human creativity — it amplifies it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;