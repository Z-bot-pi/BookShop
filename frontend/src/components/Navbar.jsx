import { Link } from "react-router-dom";
import { HiHeart, HiMiniBars3CenterLeft, HiShoppingCart } from "react-icons/hi2";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigation = [
  {name: "Dashboard", href:"/dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart Page", href:"/cart"},
  {name: "CheckOut", href:"/checkout"},
]

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  

  const currentUser = true;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
<nav className="flex justify-between items-center ">

    {/*Left*/}
    <div className="flex items-center md:gap-16 gap-4">
      <Link to="/">
      <HiMiniBars3CenterLeft className="size-6"/>
      </Link>

      {/*input search*/}
      <div className="relative sm:w-72 w-40 space-x-2">

      <BsFillSearchHeartFill className="absolute inline-block left-3 inset-y-2" />

      <input type="text" placeholder="Enter your search term" 
      className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" 
      />
      </div>
    </div>

    {/*Right*/}
    <div className="relative flex items-center md:space-x-3 space-x-2">
      <div>
        {
          currentUser ? <>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
          </button>
          {/*dispay dropdowns*/}
          {
            isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                <ul className="py-2">
                  {
                    navigation.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                        {item.name}
                        </Link>
                      </li>
                            ))}
                          </ul>
              </div>
            )
          }
          </>
          : <Link to="/login"><HiOutlineUserCircle className="size-6" /></Link>
        }
      </div>
    
    <button className="hidden sm:block">
    <HiHeart className="size-6"/>
    </button>

    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
    <HiShoppingCart className="" />
    <span className="text-sm font-semibold sm:ml-1">0</span>
    </Link>
    </div>
</nav>
    </header>
  )
}

export default Navbar