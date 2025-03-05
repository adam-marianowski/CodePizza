import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PizzaForm from "./PizzaForm";

import type { JSX } from "react";
import type { Pizza } from "../typescript/Pizza";
import type { NavigateFunction, Params } from "react-router";

const api = "http://localhost:3000/pizzas";

export default function PizzaEditor(): JSX.Element {
  const [selectedPizza, setSelectedPizza] = useState<Pizza>({} as Pizza);
  const navigate: NavigateFunction = useNavigate();
  const params: Readonly<Params<string>> = useParams();

  useEffect(() => {
    if (params.id) {
      fetch(`${api}/${params.id}`)
        .then((response) => response.json())
        .then((data) => setSelectedPizza(data))
        .catch((error) => console.error("Error fetching pizza:", error));
    }
  }, [params.id]);

  function handleEditPizza(pizza: Pizza): void {
    fetch(`${api}/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pizza),
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating pizza:", error));
  }

  function handleDeletePizza(id: string): void {
    fetch(`${api}/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting pizza:", error));
  }

  return (
    <div className="PizzasEditor">
      <div className="page-heading">
        <h1>Edit Pizza</h1>
        <button className="go-back-button" onClick={() => navigate("/")}>
          Back to Pizzas
        </button>
      </div>
      <PizzaForm
        selectedPizza={selectedPizza}
        onSubmit={handleEditPizza}
        onDelete={handleDeletePizza}
      />
    </div>
  );
}
