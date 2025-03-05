import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PizzaCard from "./PizzaCard";

import type { JSX } from "react";
import type { Pizza } from "../typescript/Pizza";
import type { NavigateFunction } from "react-router";

const api = "http://localhost:3000/pizzas";

export default function PizzasPage(): JSX.Element {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div className="PizzasPage">
      <div className="page-heading">
        <h1>Our Pizzas</h1>
        <button className="add-button" onClick={() => navigate("/pizzas/add")}>
          Add new Pizza
        </button>
      </div>

      <ul className="PizzasList">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onClick={() => navigate(`/pizzas/edit/${pizza.id}`)}
          />
        ))}
      </ul>
    </div>
  );
}
