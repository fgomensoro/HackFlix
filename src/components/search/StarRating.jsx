import { Rating } from "react-simple-star-rating";

const StarRating = ({ setRating }) => (
  <div className="sticky">
    <h3 className="textRed font4 mt-5 mb-4">Filter movies by rating: </h3>
    <Rating onClick={(rate) => setRating((rate - 1) * 2)} />
  </div>
);

export default StarRating;
