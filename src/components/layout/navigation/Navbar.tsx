import { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import Box from "../containers/Box";
import Container from "../containers/Container";
import Wrapper from "../containers/Wrapper";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="">
      <Wrapper>
        <Box className="p-10 w-full overflow-x-hidden cursor-pointer ">
          <nav className="md:min-w-screen  md:gap-6 ">
            <div className="flex justify-around items-center  gap-6 text-gray-400 font-bold">
              <img src={Logo} alt="Logo" className=" max-w-full h-auto" />
              <ul className="hidden md:flex gap-8 items-center ">
                <li className="hover:text-black">
                  <a> Features </a>
                </li>
                <li className="hover:text-black">
                  <a> Pricing </a>
                </li>
                <li className="hover:text-black">
                  <a> Resources </a>
                </li>
              </ul>
              <div className="hidden md:flex items-center gap-4">
                <p>Login</p>
                <button className="bg-teal-300 hover:bg-teal-200 text-white h-10 w-30 rounded-full cursor-pointer">
                  {" "}
                  Sign Up{" "}
                </button>
              </div>
              <div className="flex justify-end items-end">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden focus:outline-none text-2xl cursor-pointer "
                >
                  {isOpen ? <FaBars /> : <FaBars />}
                </button>
              </div>
            </div>
            {isOpen && (
              <div className="flex justify-end cursor-pointer">
                <ul className="md:hidden flex flex-col w-[120px] text-center bg-teal-400/40 gap-4 mt-4 pt-4 ">
                  <li className="hover:bg-teal-300 ">
                    <a> Features </a>
                  </li>{" "}
                  <li>
                    <a> Pricing </a>
                  </li>{" "}
                  <li>
                    <a> Resources </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
