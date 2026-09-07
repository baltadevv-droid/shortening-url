import Box from "../components/layout/containers/Box";
import Container from "../components/layout/containers/Container";
import Wrapper from "../components/layout/containers/Wrapper";
import Working from "../assets/images/illustration-working.svg";

function Header() {
  return (
    <Container>
      <Wrapper className="relative overflow-x-hidden pt-4 pb-12">
        <Box className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 md:gap-6 m-10  ">
          <div className="flex flex-col md:gap-6 gap-4">
            <h1 className="md:text-6xl text-4xl text-center font-bold">
              {" "}
              More than just shorter links
            </h1>
            <p className="font-bold text-center text-gray-400">
              Build your brand´s recongnition and get detailed insifhts on how
              yout links are performing
            </p>
            <div className="flex items-start justify-center">
              <button className="bg-teal-300 hover:bg-teal-200 rounded-full h-10 w-40 text-white">
                {" "}
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={Working}
              alt="working"
              className="w-[130%] max-w-none translate-x-12 -mt-4 md:translate-x-0 md:w-full"
            />
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Header;
