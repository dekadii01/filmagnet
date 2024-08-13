import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  return (
    <Link to={`/detail/${props.movieId}`}>
      <img src={props.image} alt="film-image" className="h-5/6 mb-5 w-full object-cover" loading="lazy" />
      <div className="flex justify-between mb-3 gap-x-2">
        <h3 className="text-white capitalize truncate">{props.title}</h3>
        <h3 className="text-primary capitalize">{props.year}</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="bg-transparent border border-white text-xs text-white px-1">HD</div>
        <div className="flex gap-x-2">
          <div className="flex">
            <FaEye className="text-primary" />
            <p className="text-white text-xs ml-1">{props.popularity}</p>
          </div>
          <div className="flex">
            <FaStar className="text-primary" />
            <p className="text-white text-xs ml-1">{props.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
