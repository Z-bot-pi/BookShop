import React, { useState, useEffect } from 'react'; // Import useEffect
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const categories = ['Select a genre', 'Horror', 'Fiction', 'Adventure', 'Business'];

const TopSellers = () => {
    const [books, setBooks] = useState([]); // Store the fetched books data
    const [selectedCategory, setSelectedCategory] = useState('Select a genre'); // Store the selected category

    useEffect(() => {
        // Fetch data from books.json
        fetch('books.json')
            .then((res) => res.json())
            .then((data) => setBooks(data)); // Set the books data to state
    }, []); // Empty dependency array, so it runs only once when the component mounts

const filteredBooks =  selectedCategory === 'Select a genre' ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

console.log(filteredBooks);

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">Top selling books</h2>
            
            {/* Categorizing filter */}
            <div className='mb-8 flex items-center'>
                <select 
                onChange={(e) => setSelectedCategory(e.target.value)}
                name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                    categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))
                    }
                </select>
            </div>

            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {slidesPerView: 3,
            spaceBetween: 50,
          },

        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
{
    filteredBooks.length >0 && filteredBooks.map((book, index) => (
        <SwiperSlide key={index}>
            <BookCard book={book}/>
        </SwiperSlide>     
    ))
}     
        
        
      </Swiper>

            
      </div>
    )
}

export default TopSellers;