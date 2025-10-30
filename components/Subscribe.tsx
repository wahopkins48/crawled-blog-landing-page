import React from 'react';

const Subscribe: React.FC = () => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form and does not send data.');
    }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Have a project in mind or just want to chat about the future of search? I'm always open to new conversations.
        </p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Wesley Hopkins" 
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="wesley@example.com" 
                        required 
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    placeholder="Tell me about your project..." 
                    className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-200 transition-colors">
              Send Work Inquiry
            </button>
          </form>
           <div className="mt-12 text-center text-gray-400">
            <p className="mb-4">...or subscribe to my thoughts on the generative search era.</p>
            <a 
                href="https://crawled.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-600 text-white font-medium py-3 px-8 rounded-sm hover:bg-white hover:text-black transition-colors"
            >
                Subscribe to Crawled
            </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;