import React from 'react'

import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
      <div className="flex flex-col md:flex-row-reverse py-10 gap-4 items-center justify-between"> {/* Smaller gap */}
        
        {/* Left Container with Heading and Image */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
          <h1 className="md:text-4xl text-2xl font-medium mb-2">This week's new release</h1> {/* Reduced bottom margin */}
          <img src={bannerImg} alt="Banner" className="w-1/2 mb-2 flex items-center md:justify-end" /> {/* Removed extra space below */}
        </div>
        
        {/* Right Container with Paragraph and Button */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Welcome! We’re excited to bring you the latest releases in fiction and non-fiction, carefully selected to inspire, entertain, and enlighten. Dive into fresh stories, discover new authors, and find your next favorite read. Thank you for joining our community of book lovers—let’s explore new adventures, one book at a time!
          </p>
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    );
  };
  
  export default Banner;