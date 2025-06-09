import { useOutletContext } from "react-router-dom";
import s from "./Features.module.css";

const Features = () => {
  const { camper } = useOutletContext();

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    transmission,
    engine,
  } = camper;

  const featuresList = [
    { label: "AC", value: AC },
    { label: "Bathroom", value: bathroom },
    { label: "Kitchen", value: kitchen },
    { label: "TV", value: TV },
    { label: "Radio", value: radio },
    { label: "Refrigerator", value: refrigerator },
    { label: "Microwave", value: microwave },
    { label: "Gas", value: gas },
    { label: "Water", value: water },
    { label: "Transmission", value: transmission },
    { label: "Engine", value: engine },
  ];

  return (
    <div className={s.wrapper}>
      <ul className={s.tags}>
        {featuresList.map(
          (item) =>
            item.value && (
              <li key={item.label} className={s.tag}>
                {item.label}
              </li>
            )
        )}
      </ul>

      <div className={s.table}>
        <p>
          <b>Form:</b> {form}
        </p>
        <p>
          <b>Length:</b> {length}
        </p>
        <p>
          <b>Width:</b> {width}
        </p>
        <p>
          <b>Height:</b> {height}
        </p>
        <p>
          <b>Tank:</b> {tank}
        </p>
        <p>
          <b>Consumption:</b> {consumption}
        </p>
      </div>
    </div>
  );
};

export default Features;
