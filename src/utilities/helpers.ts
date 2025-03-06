import { ASSETS } from "./constants";

export function getPizzaImagePath(pizza: string): string {
  return `${ASSETS.PIZZAS}/${pizza}.svg`;
}
