import Box from "../components/layout/containers/Box";
import Container from "../components/layout/containers/Container";
import Wrapper from "../components/layout/containers/Wrapper";
import BoostDeskt from "../assets/images/bg-boost-desktop.svg";
import BoostMobile from "../assets/images/bg-boost-mobile.svg";

function Boost() {
  return (
    <Container>
      <Wrapper>
        <Box className="relative ">
          <div className="flex items-center justify-center w-full ">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={BoostDeskt}
                className="w-full"
              />
              <img
                src={BoostMobile}
                alt="boost"
                className="bg-purple-950/95 w-[450px] md:w-full h-auto object-cover"
              />
            </picture>

            <div className="absolute flex flex-col items-center gap-8 ">
              <h1 className=" text-4xl font-bold text-white ">
                Boost your link today
              </h1>

              <button className="bg-teal-300 hover:bg-teal-200 rounded-full h-10 w-40 text-white">
                {" "}
                Get Started
              </button>
            </div>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Boost;
