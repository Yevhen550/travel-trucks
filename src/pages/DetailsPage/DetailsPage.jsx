import { useParams, useNavigate, Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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

  if (loading) return <p>Loading...</p>;
  if (!camper) return null;

  return (
    <div className={s.container}>
      <button onClick={() => navigate(-1)} className={s.backButton}>
        &larr; Back
      </button>

      <h1 className={s.title}>{camper.name}</h1>
      <img className={s.image} src={camper.gallery?.[0]} alt={camper.name} />

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

      <Outlet context={{ camper }} />
    </div>
  );
};

export default DetailsPage;
