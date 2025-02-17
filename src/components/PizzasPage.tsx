import { FunctionComponent, useEffect, useState } from "react";
import { Pizza } from "../typescript/Pizza";
import { useNavigate } from "react-router-dom";
import PizzaCard from "./PizzaCard";

const api = "http://localhost:3000/pizzas";

const PizzasPage: FunctionComponent = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const navigate = useNavigate();

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
};

export default PizzasPage;
