import { Link } from "react-router-dom";

const CardPoster = (props) => {
  return (
    <>
      <Link to={`/detail/${props.idPoster}`}>
        <img src={props.urlImage} alt="" className="h-full object-cover" />;
      </Link>
    </>
  );
};

export default CardPoster;
