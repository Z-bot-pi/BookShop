import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="rounded-lg transition-shadow duration-300 p-4 border shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-60 gap-4">
        <div className="sm:w-1/3 sm:h-full border rounded-md overflow-hidden flex items-center justify-center">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt=""
              className="w-28 h-40 object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="sm:w-2/3">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-lg font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4">
            {book?.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <p className="font-medium mb-4">
            ${book?.newPrice}{' '}
            <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
          </p>
          <button className="btn-primary px-4 py-2 space-x-1 flex items-center gap-1">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;