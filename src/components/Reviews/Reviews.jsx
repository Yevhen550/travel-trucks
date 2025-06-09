import s from "./Reviews.module.css";
import { useOutletContext } from "react-router-dom";

const Reviews = () => {
  const { camper } = useOutletContext();
  const { reviews } = camper;

  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ reviewer_name, comment }, idx) => (
          <li key={idx}>
            <strong>{reviewer_name}</strong>: {comment}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
