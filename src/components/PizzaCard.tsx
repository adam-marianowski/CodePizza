import { FunctionComponent } from "react";
import { Pizza } from "../typescript/Pizza";

type Props = {
  pizza: Pizza;
  onClick: () => void;
};

const PizzaCard: FunctionComponent<Props> = ({ pizza, onClick }) => {
  return (
    <li className="PizzaCard" onClick={onClick}>
      <img
        src={`/assets/pizzas/${pizza.image}.svg`}
        alt="image of pizza"
        className="card-image"
      />

      <div className="card-content">
        <h2>{pizza.name}</h2>
        <p className="card-description">{pizza.description}</p>

        <div className="card-footer">
          <span>${pizza.price}</span>
        </div>
      </div>
    </li>
  );
};

export default PizzaCard;
