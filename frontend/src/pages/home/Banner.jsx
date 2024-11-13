import React from 'react'

import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
      <div className="flex flex-col md:flex-row py-16 gap-6 items-center justify-between"> {/* Reduced gap from 12 to 6 */}
        
        {/* Left Container with Heading and Image */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
          <h1 className="md:text-5xl text-2xl font-medium mb-4">This week's new release</h1>
          <img src={bannerImg} alt="Banner" className="w-1/2" /> {/* Removed extra bottom margin */}
        </div>
        
        {/* Right Container with Paragraph and Button */}
        <div className="md:w-1/2 w-full">
          <p className="mb-8">
            Welcome! We’re excited to bring you the latest releases in fiction and non-fiction, carefully selected to inspire, entertain, and enlighten. Dive into fresh stories, discover new authors, and find your next favorite read. Thank you for joining our community of book lovers—let’s explore new adventures, one book at a time!
          </p>
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    );
  };
  
  export default Banner;