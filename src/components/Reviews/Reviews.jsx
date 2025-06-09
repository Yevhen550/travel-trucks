import { useOutletContext } from "react-router-dom";
import s from "./Reviews.module.css";

const Reviews = () => {
  const { camper } = useOutletContext();
  const { reviews } = camper;

  return (
    <div className={s.reviews}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
        <div key={index} className={s.reviewItem}>
          <div className={s.avatar}>{reviewer_name.charAt(0)}</div>
          <div>
            <p className={s.name}>
              {reviewer_name}
              <span className={s.stars}>
                {"★".repeat(reviewer_rating)}
                {"☆".repeat(5 - reviewer_rating)}
              </span>
            </p>
            <p className={s.comment}>{comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
