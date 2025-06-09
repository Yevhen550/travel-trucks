import { useState } from "react";
import s from "./FiltersSidebar.module.css";

const equipmentOptions = ["AC", "Kitchen", "Bathroom", "TV"];
const typeOptions = ["Van", "Fully Integrated", "Alcove"];

const FiltersSidebar = ({ onFilterChange }) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const toggleEquipment = (feature) => {
    setSelectedEquipment((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleTypeSelect = (type) => {
    setSelectedType((prev) => (prev === type ? "" : type));
  };

  const handleSearch = () => {
    onFilterChange({
      equipment: selectedEquipment,
      type: selectedType,
    });
  };

  return (
    <div className={s.sidebar}>
      <div className={s.section}>
        <p className={s.label}>Vehicle equipment</p>
        <div className={s.options}>
          {equipmentOptions.map((item) => (
            <button
              key={item}
              className={`${s.btn} ${
                selectedEquipment.includes(item) ? s.active : ""
              }`}
              onClick={() => toggleEquipment(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.label}>Vehicle type</p>
        <div className={s.options}>
          {typeOptions.map((type) => (
            <button
              key={type}
              className={`${s.btn} ${selectedType === type ? s.active : ""}`}
              onClick={() => handleTypeSelect(type)}
              type="button"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button className={s.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FiltersSidebar;
