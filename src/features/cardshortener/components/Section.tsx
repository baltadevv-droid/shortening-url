import Box from "../../../components/layout/containers/Box";
import Container from "../../../components/layout/containers/Container";
import Wrapper from "../../../components/layout/containers/Wrapper";
import Brand from "../../../assets/images/icon-brand-recognition.svg";
import Detailed from "../../../assets/images/icon-detailed-records.svg";
import Fully from "../../../assets/images/icon-fully-customizable.svg";

function Section() {
  return (
    <Container className=" flex justify-center items-center bg-gray-400/40 w-full py-50 pb-28 ">
      <Wrapper className="flex flex-col gap-7">
        <Box className="p-20">
          <div className="flex gap-4 flex-col">
            <h1 className="font-bold text-5xl text-center">
              {" "}
              Advanced Statistics{" "}
            </h1>
            <p className="font-bold text-gray-400 text-center">
              Track how your links are performing across the web with our
              advenced statistics dashboard
            </p>
          </div>
        </Box>
        <Box className="flex flex-col md:flex-row md:gap-6 items-center justify-center relative ">
          <div className="absolute z-0 w-2 h-[700px] top-0 translate-y-8  bg-cyan-400 md:h-2 md:w-full md:top-1/2 md:left-0  md:translate-x-0 md:translate-y-11" />
          <div className="relative z-10">
            <div className="flex items-center justify-center ">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center md:translate-y-6 md:-translate-x-20 translate-y-8 ">
                <img src={Brand} className="h-8 w-8" />
              </div>
            </div>
            <div className="h-[200px] w-[290px]  bg-white pt-4 flex flex-col justify-center items-center abs rounded-xl">
              <h1 className="font-bold text-xl text-blue-900">
                Brand Recognition{" "}
              </h1>
              <p className="text-gray-500 text-center">
                {" "}
                Boost your brand recognition with each click. Generic links
                don´t mean a thing. Branded links help instill confidence in
                your content{" "}
              </p>
            </div>
          </div>
          <div className="md:translate-y-8 relative z-10">
            <div className="flex items-center justify-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center md:translate-y-6 md:-translate-x-20  translate-y-8">
                <img src={Detailed} className="h-8 w-8" />
              </div>
            </div>
            <div className="h-[200px] w-[290px] bg-white flex flex-col pt-4 justify-center rounded-xl ">
              <h1 className="font-bold text-xl text-center text-blue-900 ">
                Detailed Records{" "}
              </h1>
              <p className="text-gray-500 text-center">
                {" "}
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions
              </p>
            </div>
          </div>
          <div className="md:translate-y-16 relative <-10 ">
            <div className="flex items-center justify-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center md:translate-y-6 md:-translate-x-20 translate-y-8 ">
                <img src={Fully} className="h-8 w-8" />
              </div>
            </div>
            <div className="h-[200px] w-[290px] bg-white flex flex-col pt-4 justify-center items-center rounded-xl">
              <h1 className="font-bold text-xl text-blue-900">
                {" "}
                Fully Customizable{" "}
              </h1>
              <p className="text-gray-500 text-center">
                {" "}
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Section;
