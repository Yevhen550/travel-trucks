import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.campers);

  const [filters, setFilters] = useState({
    equipment: [],
    type: "",
  });

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredItems = items.filter((item) => {
    const matchEquipment = filters.equipment.every((eq) => {
      const key = eq.toLowerCase();
      return item[key] === true;
    });

    const matchType =
      !filters.type ||
      item.form
        .toLowerCase()
        .includes(filters.type.toLowerCase().replace(" ", ""));

    return matchEquipment && matchType;
  });

  return (
    <div className={s.wrapper}>
      <FiltersSidebar onFilterChange={handleFilterChange} />

      <div className={s.content}>
        {loading && <p>Loading campers...</p>}
        {error && <p>Error: {error}</p>}

        <ul className={s.list}>
          {filteredItems.map((camper) => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CatalogPage;
