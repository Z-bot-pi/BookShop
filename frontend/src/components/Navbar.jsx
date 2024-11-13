import { Link } from "react-router-dom";
import { HiHeart, HiMiniBars3CenterLeft, HiShoppingCart } from "react-icons/hi2";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
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
    <div>
    <HiOutlineUserCircle className="size-6" />
    <button className="hidden sm:block">
    <HiHeart className="size-6"/>
    </button>

    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
    <HiShoppingCart className="" />
    <span>0</span>
    </Link>
    </div>
</nav>
    </header>
  )
}

export default Navbar