import { FiRadio } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="bg-blue-900 p-2 shadow-lg flex justify-between px-10 items-center fixed z-[1] w-[100%] ">
      <a href="/">
        <div className="flex flex-col items-center bg-white text-blue-700  px-2">
          <FiRadio className="text-3xl" />
          <h1 className=" text-xl uppercase font-bold ">Abu Jabir Data Sub</h1>
        </div>
      </a>

      <div className="hidden lg:inline">
        <ul className=" flex gap-10  uppercase text-2xl font-bold text-white cursor-pointer ">
          <a href="/" className="hover:text-blue-400">
            <li>home</li>
          </a>

          <a href="#About " className="hover:text-blue-400">
            <li>About Us</li>
          </a>
          <a href="#Service" className="hover:text-blue-400">
            <li> our Service</li>
          </a>
        </ul>
      </div>
      <FiMenu className="text-2xl lg:hidden text-white " />
    </div>
  );
};

export default NavBar;
