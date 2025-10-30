import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode, name: string }> = ({ href, children, name }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    {children}
    <span className="sr-only">{name}</span>
  </a>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
            <p className="mb-4 md:mb-0 text-sm">&copy; {new Date().getFullYear()} Wesley Hopkins. All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
                 <a href="https://crawled.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                    Crawled on Substack
                </a>
                <SocialIcon href="#" name="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </SocialIcon>
                <SocialIcon href="#" name="X/Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </SocialIcon>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;