import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import CardMovie from "../../components/CardMovie";
import SkeletonLoader from "../../components/SkeletonLoader";
import CardPoster from "../../components/CardPoster";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import useSearch from "../../hooks/useSearch";
import { useState } from "react";

const HomePage = () => {
  const { data, error, loading } = useFetch("/trending/movie/day");
  const { results, loading: loadingSearch, error: errorSearch, setQuery, handleSearch, query, isSearching } = useSearch();
  const { data: movieWeek, error: errorMovieWeek, loading: loadingMovieWeek } = useFetch("/trending/movie/week");
  const top5movies = data?.results.slice(0, 5) || [];
  const posterMovie = movieWeek?.results.slice(2, 9) || [];
  const posterMovie2 = movieWeek?.results.slice(10, 20) || [];
  const urlImage = "https://image.tmdb.org/t/p/w500";
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  return (
    <>
      <section id="jumbotron" className="bg-cover bg-no-repeat bg-[url('/img/landing-bg.jpg')] h-lvh">
        <div className="container h-full">
          <Navbar setResults={setSearchResults} setQuerySearch={setSearchQuery} />
          <div className="h-[80%] flex flex-col justify-center">
            <div className="font-homenaje">
              <h3 className="text-2xl md:text-2xl text-primary md:tracking-widest mb-1">Filmagnet</h3>
              <h1 className="text-3xl md:text-5xl text-white md:leading-tight">
                Unlimited <span className="text-primary">E n t e r t a i n m e n t</span>, <br></br> Movies, TVs shows, & More.
              </h1>
            </div>
            <div className="flex gap-x-3 md:gap-x-5 mt-3 items-center">
              <div className="bg-white py-1 px-2 text-black w-fit text-sm font-poppins font-medium ">Movie</div>
              <div className="bg-transparent py-1 px-2 border-2 border-white text-white w-fit text-sm font-poppins font-medium ">HD</div>
              <p className="text-white text-sm font-poppins font-medium">Action, Drama</p>
              <div className="flex font-poppins items-center gap-x-2">
                <FaRegCalendarAlt className="text-primary w-5 h-7" />
                <p className="font-medium text-white text-sm">2023</p>
              </div>
            </div>
            <a href="#upcoming-movies" className="rounded-full bg-[#242424] py-2 px-4 w-fit text-white mt-6 uppercase border-2 border-primary cursor-pointer flex items-center">
              <FaPlay className="mr-2" />
              Play Now
            </a>
          </div>
        </div>
      </section>
      <section id="upcoming-movies" className="bg-cover bg-no-repeat bg-[url('/img/bg-upcoming-movies.jpg')] bg-gray-500 bg-blend-multiply ">
        <div className="container py-14">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <div>
              <h1 className="uppercase text-primary text-base text-center md:text-left">online streaming</h1>
              {searchResults && searchResults.length > 0 ? (
                <h1 className="capitalize text-white text-[2.50rem] font-homenaje">the results of {searchQuery}</h1>
              ) : (
                <h1 className="capitalize text-white text-[2.50rem] font-homenaje">trending movies today</h1>
              )}
            </div>
            <div className="flex gap-x-3">
              <div className="rounded-full bg-[#242424] py-2 px-5 w-fit text-white  capitalize text-sm cursor-pointer flex items-center h-fit">Movies</div>
              <div className="rounded-full bg-[#242424] py-2 px-5 w-fit text-white  capitalize text-sm cursor-pointer flex items-center h-fit">Tvs Shows</div>
              <div className="rounded-full bg-[#242424] py-2 px-5 w-fit text-white  capitalize text-sm cursor-pointer flex items-center h-fit">Anime</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 mt-5 gap-10">
            {loading || loadingSearch ? (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : null}
            {searchQuery && searchResults.length > 0 ? (
              searchResults.map((movie) => <CardMovie key={movie.id} movieId={movie.id} image={urlImage + movie.poster_path} title={movie.title} year="2023" popularity={movie.popularity} rating={Math.round(movie.vote_average)} />)
            ) : searchQuery && searchResults.length === 0 ? (
              <p className="text-center text-xl font-bold text-red-600 col-span-5">Maaf, film {searchQuery} tidak ditemukan.</p>
            ) : (
              top5movies.map((movie) => <CardMovie key={movie.id} movieId={movie.id} image={urlImage + movie.poster_path} title={movie.title} year="2023" popularity={movie.popularity} rating={Math.round(movie.vote_average)} />)
            )}
          </div>
          {searchResults.length == 0 && (
            <>
              <div className="mt-10">
                <Splide
                  options={{
                    arrows: false,
                    pagination: true,
                    gap: "20px",
                    autoplay: true,
                    interval: 3000,
                    perPage: 6,
                    breakpoints: {
                      640: {
                        perPage: 2,
                      },
                      800: {
                        perPage: 4,
                      },
                      1024: {
                        perPage: 6,
                      },
                    },
                  }}
                >
                  {posterMovie.map((poster) => {
                    return (
                      <SplideSlide key={poster.id}>
                        <CardPoster idPoster={poster.id} urlImage={`${urlImage}/${poster.poster_path}`} />
                      </SplideSlide>
                    );
                  })}
                </Splide>
              </div>
              <div className="gap-10 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-5 md:mx-24">
                <img src="https://i.pinimg.com/564x/14/fa/dd/14fadd993578b9916f855cebafb71e62.jpg" alt="logo-film" className="w-full" loading="lazy" />
                <img src="https://i.pinimg.com/564x/b2/12/a5/b212a547f362e1dbb08071bd85451d30.jpg" alt="logo-film" loading="lazy" />
                <img src="https://i.pinimg.com/564x/2a/f1/30/2af13038f4bf60ac0f86b3d564a6353f.jpg" alt="logo-film" loading="lazy" />
                <img src="https://i.pinimg.com/564x/75/50/c5/7550c549b8558f450dee255a50e57503.jpg" alt="logo-film" loading="lazy" />
              </div>
              <div className="mt-5">
                <Splide
                  options={{
                    arrows: false,
                    pagination: true,
                    gap: "20px",
                    autoplay: true,
                    interval: 3000,
                    perPage: 6,
                    breakpoints: {
                      640: {
                        perPage: 2,
                      },
                      800: {
                        perPage: 4,
                      },
                      1024: {
                        perPage: 6,
                      },
                    },
                  }}
                >
                  {posterMovie2.map((poster) => {
                    return (
                      <SplideSlide key={poster.id}>
                        <CardPoster idPoster={poster.id} urlImage={`${urlImage}/${poster.poster_path}`} />
                      </SplideSlide>
                    );
                  })}
                </Splide>
              </div>
            </>
          )}
        </div>

        <Footer />
      </section>
    </>
  );
};

export default HomePage;
