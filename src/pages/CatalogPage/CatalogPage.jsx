import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers, resetCampers } from "../../redux/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const {
    items = [],
    loading,
    error,
    page,
    hasMore,
  } = useSelector((state) => state.campers);

  const [filters, setFilters] = useState({
    equipment: [],
    type: "",
  });

  useEffect(() => {
    dispatch(getCampers(1));
    return () => dispatch(resetCampers());
  }, [dispatch]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    dispatch(resetCampers());
    setTimeout(() => {
      dispatch(getCampers(1));
    }, 0);
  };

  const handleLoadMore = () => {
    dispatch(getCampers(page));
  };

  const filteredItems = items?.filter((item) => {
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
          {filteredItems?.map((camper) => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>

        {!loading && hasMore && (
          <button className={s.loadMore} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
