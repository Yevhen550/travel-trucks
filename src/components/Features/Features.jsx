import { useOutletContext } from "react-router-dom";
import s from "./Features.module.css";

const Features = () => {
  const { camper } = useOutletContext();

  if (!camper) return null;

  const { form, length, width, height, tank, consumption } = camper;

  const rawFeatures = {
    AC: camper.AC,
    Bathroom: camper.bathroom,
    TV: camper.TV,
    Radio: camper.radio,
    Microwave: camper.microwave,
    Water: camper.water,
    Transmission: camper.transmission,
    Engine: camper.engine,
    Kitchen: camper.kitchen,
    Petrol: camper.gas,
  };

  const features = Object.entries(rawFeatures)
    .filter(([_, value]) => value === true || typeof value === "string")
    .map(([key]) => key);

  const iconMap = {
    AC: "wind",
    Bathroom: "ph_shower",
    TV: "tv",
    Radio: "ui-radios",
    Microwave: "lucide_microwave",
    Water: "ion_water-outline",
    Transmission: "bi_grid-1x2",
    Engine: "diagram",
    Kitchen: "hugeicons_gas-stove",
    Petrol: "fuel-pump",
  };

  return (
    <div className={s.container}>
      <ul className={s.badges}>
        {features.map((feature) => (
          <li key={feature} className={s.badge}>
            <svg className={s.icon} width="20" height="20">
              <use
                href={`${import.meta.env.BASE_URL}icons/sprite.svg#${
                  iconMap[feature]
                }`}
              />
            </svg>
            <span className={s.badgeLabel}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={s.detailsBox}>
        <h3 className={s.subtitle}>Vehicle details</h3>
        <ul className={s.table}>
          <li className={s.row}>
            <span className={s.label}>Form</span>
            <span className={s.value}>{form}</span>
          </li>
          <li className={s.row}>
            <span className={s.label}>Length</span>
            <span className={s.value}>{length} m</span>
          </li>
          <li className={s.row}>
            <span className={s.label}>Width</span>
            <span className={s.value}>{width} m</span>
          </li>
          <li className={s.row}>
            <span className={s.label}>Height</span>
            <span className={s.value}>{height} m</span>
          </li>
          <li className={s.row}>
            <span className={s.label}>Tank</span>
            <span className={s.value}>{tank} l</span>
          </li>
          <li className={s.row}>
            <span className={s.label}>Consumption</span>
            <span className={s.value}>{consumption}l/100km</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
