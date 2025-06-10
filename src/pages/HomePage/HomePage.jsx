import { useNavigate } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={s.heroSection}>
      <div className={s.overlay}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.subtitle}>
          You can find everything you want in our catalog
        </p>
        <button className={s.button} onClick={handleViewClick}>
          View Now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
