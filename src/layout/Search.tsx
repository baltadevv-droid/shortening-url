import { useState, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import DesktSearch from "../assets/images/bg-shorten-desktop.svg";
import MobileSearch from "../assets/images/bg-shorten-mobile.svg";
import Container from "../components/layout/containers/Container";
import Wrapper from "../components/layout/containers/Wrapper";
import Box from "../components/layout/containers/Box";
import { fetchSearch } from "../features/cardshortener/slice";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [change, setChange] = useState(false);
  const [error, setError] = useState(false);
  const {
    shortUrl,
    longUrl,
    error: apiError,
  } = useAppSelector((state) => state.shortener);

  const hasError = error || apiError;

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    if (inputValue.trim() === "") {
      setError(true);
      return;
    }

    dispatch(fetchSearch(inputValue));
    setInputValue("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setChange(true);

      setTimeout(() => {
        setChange(false);
      }, 2000);
    } catch (error) {
      console.error("Error al cortar:", error);
    }
  };

  return (
    <Container className="relative">
      <Wrapper>
        <Box className="flex justify-center ">
          <form
            className="absolute z-10 -translate-y-10"
            onSubmit={handleSubmit}
          >
            <div className="md:w-[920px] w-[280px] h-[100px] md:h-[120px] justify-center items-center p-2 rounded flex">
              <picture className="absolute ">
                <source media="(min-width:768px)" srcSet={DesktSearch} />

                <img
                  src={MobileSearch}
                  alt="Fondo form"
                  className="h-[130px] md:w-[1100px] bg-purple-900/70 object-cover -z-10 rounded-2xl"
                />
              </picture>

              <div className="md:gap-4 gap-5 flex flex-col md:flex-row">
                <input
                  required
                  className={`md:w-[500px] md:h-12 h-10 bg-white text-gray-400 px-2 rounded-xl relative z-10 outline-non  border-2 ${
                    hasError
                      ? "border-red-500 text-red-500"
                      : "border-transparent text-gray-400"
                  } `}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Shortener a link here..."
                  type="text"
                />
                <button
                  type="submit"
                  className="md:h-12 h-10 md:w-26 bg-teal-300 hover:bg-teal-200 text-white rounded-xl font-bold relative z-10"
                >
                  Shorten IT!
                </button>
              </div>
              {hasError && (
                <div className="md:translate-y-8 md:-translate-x-58 -translate-y-3 -translate-x-6 w-32 absolute flex justify-start">
                  <span className="text-red-500 md:text-sm text-xs absolute ">
                    {" "}
                    Please add a link
                  </span>
                </div>
              )}
            </div>
          </form>

          <div className="absolute md:translate-y-28 translate-y-24">
            {shortUrl && (
              <div className="flex flex-col items-center md:flex-row p-4 bg-white rounded md:gap-6 md:w-[920px] w-[330px] rounded-l font-bold cursor-pointer">
                <p className=" p-2 min-h-10 text-black rounded text-sm break-all">
                  {longUrl}
                </p>

                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" p-2 min-h-10 text-teal-400 text-sm underline rounded break-all flex items-center justify-center text-center"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className={` rounded-xl text-white cursor-pointer w-[100px] transition-all ${change ? "bg-black" : "bg-teal-300"}`}
                >
                  {change ? "Copiado" : "Copiar"}
                </button>
              </div>
            )}
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Search;
