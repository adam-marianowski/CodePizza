import { FunctionComponent, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Pizza } from "../typescript/Pizza";
import PizzaForm from "./PizzaForm";

const api = "http://localhost:3000/pizzas";

const PizzaEditor: FunctionComponent = () => {
  const [selectedPizza, setSelectedPizza] = useState<Pizza>({} as Pizza);
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (params.id) {
      fetch(`${api}/${params.id}`)
        .then((response) => response.json())
        .then((data) => setSelectedPizza(data))
        .catch((error) => console.error("Error fetching pizza:", error));
    }
  }, [params.id]);

  const handleEditPizza = (pizza: Pizza) => {
    fetch(`${api}/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizza),
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating pizza:", error));
  };

  const handleDeletePizza = (id: string) => {
    fetch(`${api}/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting pizza:", error));
  };

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
};

export default PizzaEditor;
