import Box from "../containers/Box";
import Container from "../containers/Container";
import Wrapper from "../containers/Wrapper";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <Container className="">
      <Wrapper>
        <Box className=" bg-gray-900/90 w-full md:h-[190px] flex flex-col md:flex-row items-center gap-6 justify-around">
          <div className="">
            <h1 className="font-bold text-white text-3xl">Shortly</h1>
          </div>
          <div className="flex md:gap-7 gap-8 flex-col md:flex-row text-center cursor-pointer ">
            <div className="flex flex-col gap-2 font-bold">
              <h2 className="text-white font-bold text-xl">Features</h2>
              <ol className="hover:text-cyan-400 text-gray-400">
                Link Shortening
              </ol>
              <ol className="hover:text-cyan-400  text-gray-400">
                Branded Links
              </ol>
              <ol className="hover:text-cyan-400  text-gray-400">Analytics</ol>
            </div>{" "}
            <div className="flex flex-col gap-2 font-bold">
              <h2 className="text-white font-bold text-xl">Resources</h2>
              <ol className="hover:text-cyan-400  text-gray-400">Blog</ol>
              <ol className="hover:text-cyan-400  text-gray-400">Developers</ol>
              <ol className="hover:text-cyan-400  text-gray-400">Support</ol>
            </div>{" "}
            <div className="flex flex-col gap-2 font-bold">
              <h2 className="text-white font-bold text-xl">Company</h2>
              <ol className="hover:text-cyan-400  text-gray-400">About</ol>
              <ol className="hover:text-cyan-400  text-gray-400">Our Team</ol>
              <ol className="hover:text-cyan-400  text-gray-400">Careers</ol>
              <ol className="hover:text-cyan-400  text-gray-400">Contact</ol>
            </div>
          </div>
          <div className="flex justify-end gap-4  ">
            <a
              href="https://facebook.com"
              className="group"
              aria-label="Facebook"
            >
              <FaFacebook className="text-white text-2xl transition-colors duration-200s group-hover:text-cyan-400" />
            </a>
            <a href="#" className="group" aria-label="Twitter">
              {" "}
              <FaTwitter className="text-white text-2xl transition-colors duration-200s group-hover:text-cyan-400" />{" "}
            </a>
            <a href="#" className="group" aria-label="Pinterest">
              {" "}
              <FaPinterest className="text-white text-2xl transition-colors duration-200s group-hover:text-cyan-400" />{" "}
            </a>
            <a href="#" className="group" aria-label="Instagram">
              {" "}
              <FaInstagram className="text-white text-2xl transition-colors duration-200s group-hover:text-cyan-400" />{" "}
            </a>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Footer;
