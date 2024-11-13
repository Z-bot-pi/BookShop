import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { BsFillSearchHeartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
<nav className="flex justify-between items-center ">
    {/*Left*/}
    <div>
      <Link to="/">
      <HiMiniBars3CenterLeft className="size-6"/>
      </Link>

      {/*input search*/}
      <div>
      <BsFillSearchHeartFill />
      <input type="text" placeholder="Enter your search term" 
      className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" 
      />
      </div>
    </div>

    {/*Right*/}
    <div>
        nav items
    </div>
</nav>
    </header>
  )
}

export default Navbar