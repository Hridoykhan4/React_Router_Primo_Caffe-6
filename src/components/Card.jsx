import { Link } from "react-router-dom";

const Card = ({ coffee, handleRemove, fromDash }) => {
  const { name, image, category, origin, type, rating, popularity, id } =
    coffee || {};

  const Card = (
    <div className="transition   shadow-xl rounded-xl">
      <figure className="w-full h-48 overflow-hidden">
        <img className="" src={image} alt="" />
      </figure>
      <div className="p-4">
        <h1 className="text-xl">Name: {name}</h1>
        <p>Category: {category}</p>
        <p>Type: {type}</p>
        <p>Origin: {origin}</p>
        <p>Rating: {rating}</p>
        <p>Popular: {popularity}</p>
        {fromDash && (
          <div className="card-actions justify-end">
            <button
              onClick={() => handleRemove(id)}
              className="btn btn-primary"
            >
              Remove From Board
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return fromDash ? (
    Card
  ) : (
    <Link
      to={`/coffee/${id}`}
      className="transition  hover:scale-102 shadow-xl rounded-xl"
    >
      {Card}
    </Link>
  );
};
export default Card;
