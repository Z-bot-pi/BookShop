import React, { useState, useEffect } from 'react'; // Import useEffect

const categories = ['Choose a genre', 'Horror', 'Fiction', 'Adventure', 'Business'];

const TopSellers = () => {
    const [books, setBooks] = useState([]); // Store the fetched books data

    useEffect(() => {
        // Fetch data from books.json
        fetch('books.json')
            .then((res) => res.json())
            .then((data) => setBooks(data)); // Set the books data to state
    }, []); // Empty dependency array, so it runs only once when the component mounts

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">Top selling books</h2>
            
            {/* Categorizing filter */}
            <div className='mb-8 flex items-center'>
                <select name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                    categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))
                    }
                </select>
            </div>
      </div>
    )
}

export default TopSellers;