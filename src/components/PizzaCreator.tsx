import { FunctionComponent } from "react";
import PizzaForm from "./PizzaForm";
import { Pizza } from "../typescript/Pizza";
import { useNavigate } from "react-router-dom";

const api = "http://localhost:3000/pizzas";

const PizzaCreator: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleCreatePizza = (pizza: Pizza) => {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizza),
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error creating pizza:", error));
  };

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
};

export default PizzaCreator;
