import React from 'react';

interface Post {
  title: string;
  excerpt: string;
  imageUrl: string;
  url: string;
}

const posts: Post[] = [
  {
    title: 'The Shift From SEO to GEO',
    excerpt: 'The web isn\'t just being indexed anymore—it\'s being interpreted. AI systems now read and process the way humans do, looking for signals that amount to authority and credibility.',
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    url: 'https://crawled.substack.com/',
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    excerpt: 'GEO prepares your content for discovery in the new search paradigm. It\'s an interdisciplinary practice of content, branding, storytelling, and structured data.',
    imageUrl: 'https://picsum.photos/seed/post2/600/400',
    url: 'https://crawled.substack.com/',
  },
  {
    title: 'Human Insight in an Algorithmic Age',
    excerpt: 'My journey into digital communication began not with code, but with language. With a degree in Creative Writing, I\'ve learned to listen for the nuances that resonate.',
    imageUrl: 'https://picsum.photos/seed/post3/600/400',
    url: 'https://crawled.substack.com/',
  },
];

const PostCard: React.FC<Post> = ({ title, excerpt, imageUrl, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block bg-gray-900 rounded-lg overflow-hidden group transition-transform transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{excerpt}</p>
      <span className="inline-block mt-4 text-white font-semibold group-hover:underline">
        Read More &rarr;
      </span>
    </div>
  </a>
);

const FeaturedPosts: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-white text-center mb-12">From the Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;