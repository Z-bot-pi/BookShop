import React from 'react'

const categories = ['Choose a genre', 'Horror','Fiction','Adventure','Business']

const TopSellers = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json').
        then(res => res.json())
        .then((data) => setBooks(data))
        } , [])



  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top selling books</h2>
        {/*Categorizing filter*/}
        <div>
            <select name='category' id='category'>
                {
                    categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default TopSellers