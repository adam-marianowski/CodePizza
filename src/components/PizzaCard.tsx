import { getPizzaImagePath } from "@utilities/helpers";
import useStyles from "@/styles/pizzaCard.styles";

import type { JSX } from "react";
import type { Pizza } from "@typescript/Pizza";

type Props = { pizza: Pizza; onClick: () => void };

export default function PizzaCard(props: Props): JSX.Element {
  const classes = useStyles().classes;

  return (
    <li className={classes.card} onClick={props.onClick}>
      <img
        src={getPizzaImagePath(props.pizza.image)}
        alt="image of pizza"
        className={classes.cardImage}
      />

      <div className={classes.cardContent}>
        <h2>{props.pizza.name}</h2>
        <p className={classes.cardDescription}>{props.pizza.description}</p>

        <div className={classes.cardFooter}>
          <span>${props.pizza.price}</span>
        </div>
      </div>
    </li>
  );
}
