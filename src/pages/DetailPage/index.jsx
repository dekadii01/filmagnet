import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import CardMovie from "../../components/CardMovie";
import SkeletonLoader from "../../components/SkeletonLoader";
import CardPoster from "../../components/CardPoster";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const DetailPage = () => {
  const { movieId } = useParams();
  const { data: movieDetail, error: errorMovieDetail, loading: loadingMovieDetail } = useFetch(`/movie/${movieId}`);
  const { data, error, loading } = useFetch("/trending/movie/day");
  const { data: dataMoviePopuler, error: errorMoviePopuler, loading: loadingMoviePopuler } = useFetch("/movie/popular");
  const top5movies = dataMoviePopuler?.results.slice(10, 14) || [];
  const posterMovie = dataMoviePopuler?.results.slice(0, 10) || [];
  const posterMovie2 = dataMoviePopuler?.results.slice(11, 19) || [];
  const urlImage = "https://image.tmdb.org/t/p/w500";
  const releaseYear = movieDetail?.release_date.split("-")[0];

  return (
    <div>
      <div className="bg-cover bg-no-repeat min-h-lvh bg-gray-500 bg-blend-multiply py-5" style={{ backgroundImage: `url(${urlImage}/${movieDetail?.backdrop_path})` }}>
        <div className="container min-h-lvh">
          <Navbar />
          <div className="min-h-[80vh] flex justify-center items-center">
            <div className="grid md:grid-cols-12 gap-x-16 h-full items-center mt-10">
              <div className="md:col-span-3 mx-auto">
                <img src={`${urlImage}/${movieDetail?.poster_path}`} alt="poster-film" className="" loading="lazy" />
              </div>
              <div className="md:col-span-9">
                <h3 className="uppercase text-primary font-medium text-lg mt-5 md:mt-0">n e w e p i s o d e</h3>
                <h1 className="capitalize text-white font-bold text-5xl font-homenaje my-1">{movieDetail?.title}</h1>
                <div className="flex flex-col md:flex-row">
                  <div className="flex gap-x-3 md:gap-x-5 mt-3 items-center flex-wrap gap-y-2 md:gap-y-0">
                    <div className="bg-white py-1 px-2 text-black w-fit text-sm font-poppins font-medium ">Movie</div>
                    <div className="bg-transparent py-1 px-2 border-2 border-white text-white w-fit text-sm font-poppins font-medium ">HD</div>
                    <p className="text-white text-sm font-poppins font-medium">
                      {movieDetail?.genres.map((genre, index) => {
                        return (
                          <span key={genre.id}>
                            {genre.name}
                            {index < movieDetail.genres.length - 1 && ", "}
                          </span>
                        );
                      })}
                    </p>
                    <div className="flex font-poppins items-center gap-x-2">
                      <FaEye className="text-primary w-5 h-7" />
                      <p className="font-medium text-white text-sm">{movieDetail?.popularity}</p>
                    </div>
                    <div className="flex font-poppins items-center gap-x-2">
                      <FaRegCalendarAlt className="text-primary w-5 h-7" />
                      <p className="font-medium text-white text-sm">{releaseYear}</p>
                    </div>
                  </div>
                </div>
                <div className="flex bg-[#3F3F3F]/40 justify-between w-full md:w-fit rounded-2xl p-5 items-center mt-5 md:gap-x-10 ">
                  <div className="flex flex-col items-center text-white capitalize">
                    <FaShareAlt className="text-white text-3xl" />
                    <p className="text-sm font-light mt-1">share</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="capitalize text-white text-base hidden md:block">rate the show</h3>
                    <div className="flex text-white items-center gap-x-2">
                      <FaStar className="text-3xl" />
                      <h3 className="text-xl">{Number(movieDetail?.vote_average.toFixed(1))}</h3>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#242424] py-2 px-4 w-fit text-white text-sm md:text-base uppercase border-2 border-primary cursor-pointer flex items-center">
                    <FaPlay className="mr-2" />
                    Play Now
                  </div>
                </div>
                <h3 className="text-white mt-5">{movieDetail?.overview}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-no-repeat bg-[url('/img/bg-upcoming-movies.jpg')] bg-gray-500 bg-blend-multiply py-20">
        <div className="container">
          <div className="mb-10">
            <h4 className="text-primary text-2xl uppercase text-center font-homenaje">best tv series</h4>
            <h4 className="text-white text-5xl text-center font-homenaje">World's Best TV Series</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-2 gap-x-10">
            {loading && (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            )}
            {top5movies.map((movie) => {
              return <CardMovie key={movie.id} movieId={movie.id} image={urlImage + movie.poster_path} title={movie.title} year={releaseYear} popularity={movie.popularity} rating={Math.round(movie.vote_average)} />;
            })}
          </div>
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
                  1024: {
                    perPage: 6,
                  },
                  800: {
                    perPage: 4,
                  },
                  640: {
                    perPage: 2,
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
          <div className="mt-20 ">
            <Splide
              options={{
                arrows: false,
                pagination: true,
                gap: "20px",
                autoplay: true,
                interval: 3000,
                perPage: 6,
                breakpoints: {
                  1024: {
                    perPage: 6,
                  },
                  800: {
                    perPage: 4,
                  },
                  640: {
                    perPage: 2,
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
