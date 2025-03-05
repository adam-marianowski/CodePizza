import type { JSX } from "react";
import type { Pizza } from "../typescript/Pizza";

type Props = { pizza: Pizza; onClick: () => void };

export default function PizzaCard(props: Props): JSX.Element {
  return (
    <li className="PizzaCard" onClick={props.onClick}>
      <img
        src={`/assets/pizzas/${props.pizza.image}.svg`}
        alt="image of pizza"
        className="card-image"
      />

      <div className="card-content">
        <h2>{props.pizza.name}</h2>
        <p className="card-description">{props.pizza.description}</p>

        <div className="card-footer">
          <span>${props.pizza.price}</span>
        </div>
      </div>
    </li>
  );
}
