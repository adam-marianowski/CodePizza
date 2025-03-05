import PizzaForm from "./PizzaForm";
import { useNavigate } from "react-router-dom";

import type { JSX } from "react";
import type { Pizza } from "../typescript/Pizza";
import type { NavigateFunction } from "react-router";

const api = "http://localhost:3000/pizzas";

export default function PizzaCreator(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  function handleCreatePizza(pizza: Pizza): void {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizza),
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error creating pizza:", error));
  }

  return (
    <div className="PizzasCreator">
      <div className="page-heading">
        <h1>Create Pizza</h1>
        <button className="go-back-button" onClick={() => navigate("/")}>
          Back to Pizzas
        </button>
      </div>
      <PizzaForm onSubmit={handleCreatePizza} />
    </div>
  );
}
