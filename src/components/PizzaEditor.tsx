import { useState, useEffect } from "react";
import Page from "./shared/Page";
import { useParams, useNavigate } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import { PIZZA_EDITOR } from "@utilities/locale.json";
import { deletePizza, getPizza, updatePizza } from "@utilities/apiHelpers";
import { ROUTES } from "@/utilities/routes";

import type { JSX } from "react";
import type { Pizza } from "@typescript/Pizza";
import type { NavigateFunction, Params } from "react-router";

export default function PizzaEditor(): JSX.Element {
  const [selectedPizza, setSelectedPizza] = useState<Pizza>({} as Pizza);
  const navigate: NavigateFunction = useNavigate();
  const params: Readonly<Params<string>> = useParams();

  useEffect(() => {
    if (params.id) {
      getPizza(params.id).then((pizza: Pizza) => setSelectedPizza(pizza));
    }
  }, [params.id]);

  function handleEditPizza(pizza: Pizza): void {
    updatePizza(pizza).then(() => navigate(ROUTES.HOME));
  }

  function handleDeletePizza(id: string): void {
    deletePizza(id).then(() => navigate(ROUTES.HOME));
  }

  return (
    <Page className="PizzasEditor">
      <Page.Heading>
        <Page.Title title={PIZZA_EDITOR.TITLE} />
        <Page.Button
          onClick={() => navigate(ROUTES.HOME)}
          title={PIZZA_EDITOR.GO_BACK}
          className="go-back-button"
        />
      </Page.Heading>

      <Page.Content>
        <PizzaForm
          selectedPizza={selectedPizza}
          onSubmit={handleEditPizza}
          onDelete={handleDeletePizza}
        />
      </Page.Content>
    </Page>
  );
}
