import { useParams, useNavigate, Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "../../components/BookingForm/BookingForm";
import s from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { truckId } = useParams();
  const navigate = useNavigate();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCamper = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${truckId}`
        );
        setCamper(data);
      } catch (error) {
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };

    fetchCamper();
  }, [truckId, navigate]);

  if (loading) return <p className={s.loading}>Loading...</p>;
  if (!camper) return null;

  return (
    <div className={s.container}>
      <button onClick={() => navigate(-1)} className={s.backButton}>
        &larr; Back
      </button>

      <div className={s.headerRow}>
        <div>
          <h1 className={s.title}>{camper.name}</h1>
          <div className={s.meta}>
            <span className={s.rating}>⭐ {camper.rating} Reviews</span>
            <span className={s.location}>📍 {camper.location}</span>
          </div>
          <p className={s.price}>€{camper.price.toFixed(2)}</p>
        </div>
      </div>

      <div className={s.galleryGrid}>
        {camper.gallery?.map((img, index) => (
          <div key={index} className={s.imageWrapper}>
            <img
              src={img.original}
              alt={`Gallery ${index + 1}`}
              className={s.galleryImage}
            />
          </div>
        ))}
      </div>

      <p className={s.description}>{camper.description}</p>

      <nav className={s.tabs}>
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive ? `${s.tabLink} ${s.tabLinkActive}` : s.tabLink
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? `${s.tabLink} ${s.tabLinkActive}` : s.tabLink
          }
        >
          Reviews
        </NavLink>
      </nav>

      <div className={s.mainSection}>
        <div className={s.left}>
          <Outlet context={{ camper }} />
        </div>
        <div className={s.right}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
