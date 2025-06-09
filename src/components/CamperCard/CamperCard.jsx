import s from "./CamperCard.module.css";
import { Link } from "react-router-dom";

const CamperCard = ({ camper }) => {
  const { id, name, price, location, description, gallery, features } = camper;

  return (
    <div className={s.card}>
      <img
        src={
          camper.gallery?.[0]?.thumb ||
          "https://via.placeholder.com/200x140?text=No+Image"
        }
        alt={camper.name}
        className={s.image}
      />
      <div className={s.info}>
        <h2>{name}</h2>
        <p className={s.location}>📍 {location}</p>
        <p className={s.description}>{description}</p>
        <p className={s.price}>€{price}</p>

        <ul className={s.tags}>
          {Array.isArray(features) &&
            features.slice(0, 3).map((feature) => (
              <li key={feature} className={s.tag}>
                {feature}
              </li>
            ))}
        </ul>

        <Link to={`/catalog/${id}`} className={s.button}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
