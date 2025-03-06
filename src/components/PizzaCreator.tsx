import Page from "./shared/Page";
import PizzaForm from "./PizzaForm";
import { useNavigate } from "react-router-dom";
import { PIZZA_CREATOR } from "@utilities/locale.json";
import { createPizza } from "@utilities/apiHelpers";
import { ROUTES } from "@/utilities/routes";
import useStyles from "@/styles/common.styles";

import type { JSX } from "react";
import type { Pizza } from "@typescript/Pizza";
import type { NavigateFunction } from "react-router";

export default function PizzaCreator(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const classes = useStyles().classes;

  function handleCreatePizza(pizza: Pizza): void {
    createPizza(pizza).then(() => navigate(ROUTES.HOME));
  }

  return (
    <Page className="PizzasCreator">
      <Page.Heading>
        <Page.Title title={PIZZA_CREATOR.TITLE} />
        <Page.Button
          title={PIZZA_CREATOR.GO_BACK}
          onClick={() => navigate(ROUTES.HOME)}
          className={classes.goBackButton}
        />
      </Page.Heading>
      <PizzaForm onSubmit={handleCreatePizza} />
    </Page>
  );
}
