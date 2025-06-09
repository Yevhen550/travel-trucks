import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div className={s.catalogContainer}>
      {loading && <p>Loading campers...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={s.list}>
        {items.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;
