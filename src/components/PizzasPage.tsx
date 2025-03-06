import Page from "./shared/Page";
import PizzaCard from "./PizzaCard";
import { useEffect, useState } from "react";
import { PIZZAS_PAGE } from "@utilities/locale.json";
import { getPizzas } from "@utilities/apiHelpers";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utilities/routes";

import type { JSX } from "react";
import type { Pizza } from "../typescript/Pizza";
import type { NavigateFunction } from "react-router";

export default function PizzasPage(): JSX.Element {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    getPizzas().then((data: Pizza[]) => setPizzas(data));
  }, []);

  return (
    <Page className="PizzasPage">
      <Page.Heading>
        <Page.Title title={PIZZAS_PAGE.TITLE} />
        <Page.Button
          onClick={() => navigate(ROUTES.PIZZA_CREATOR)}
          title={PIZZAS_PAGE.ADD_NEW_PIZZA}
          className="add-button"
        />
      </Page.Heading>

      <Page.Content>
        <ul className="PizzasList">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onClick={() => navigate(ROUTES.getEditorRoute(pizza.id))}
            />
          ))}
        </ul>
      </Page.Content>
    </Page>
  );
}
