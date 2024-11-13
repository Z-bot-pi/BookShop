import React, { useState, useEffect } from 'react'; // Import useEffect

const categories = ['Choose a genre', 'Horror', 'Fiction', 'Adventure', 'Business'];

const TopSellers = () => {
    const [books, setBooks] = useState([]); // Store the fetched books data
    const [selectedCategory, setSelectedCategory] = useState('Choose a genre'); // Store the selected category

    useEffect(() => {
        // Fetch data from books.json
        fetch('books.json')
            .then((res) => res.json())
            .then((data) => setBooks(data)); // Set the books data to state
    }, []); // Empty dependency array, so it runs only once when the component mounts

const filteredBooks =  selectedCategory === 'Choose a genre' ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

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

            {
                filteredBooks.map((book, index) => (
                    <div>{book.title}</div>
                ))
            }
      </div>
    )
}

export default TopSellers;