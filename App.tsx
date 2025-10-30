import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedPosts from './components/FeaturedPosts';
import Capabilities from './components/Capabilities';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-200 font-sans leading-relaxed selection:bg-white/30">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedPosts />
        <Capabilities />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default App;