import { useOutletContext } from "react-router-dom";
import s from "./Features.module.css";

const Features = () => {
  const { camper } = useOutletContext();
  const { details, features } = camper;

  return (
    <>
      <h3>Details</h3>
      <ul>
        {Object.entries(details).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>

      <h3>Features</h3>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </>
  );
};

export default Features;
