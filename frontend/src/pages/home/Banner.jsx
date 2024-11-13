import React from 'react'

import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
    <div>
        <div>
                <h1 className='md:text-5xl text-2xl font-medium mb-7'>This week's new release</h1>
                <p className='mb-10'>Welcome!

We’re excited to bring you the latest releases in fiction and non-fiction, carefully selected to inspire, entertain, and enlighten. Dive into fresh stories, discover new authors, and find your next favorite read. Thank you for joining our community of book lovers—let’s explore new adventures, one book at a time!</p>
<button className='btn-primary'>Subscribe</button>
           
        </div>
        <div>
            <img src={bannerImg} alt=''/>
        </div>
    </div>
  )
}

export default Banner