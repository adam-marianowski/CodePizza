import { FunctionComponent, useEffect, useState } from "react";
import { Pizza } from "../typescript/Pizza";

type Props = {
  selectedPizza?: Pizza;
  onSubmit: (pizza: Pizza) => void;
  onDelete?: (id: string) => void;
};

const imageOptions = [
  "pizza-bacon",
  "pizza-hawaiian-special",
  "pizza-italiana",
  "pizza-margherita",
  "pizza-pepperoni",
  "pizza-mediterranean",
  "pizza-prosciutto",
  "pizza-special",
  "pizza-spicy",
  "pizza-tangy",
  "pizza-veg-special",
  "pizza-vegetarian",
];

const PizzaForm: FunctionComponent<Props> = ({
  selectedPizza,
  onSubmit,
  onDelete,
}) => {
  const [pizza, setPizza] = useState<Pizza>({} as Pizza);

  useEffect(() => {
    setPizza(selectedPizza ?? ({} as Pizza));
  }, [selectedPizza]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (name === "ingredients") {
      return setPizza((p) => ({
        ...p,
        ingredients: value.split(",").map((i) => i.trim()),
      }));
    }

    setPizza((prevPizza) => ({
      ...prevPizza,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000).toString();
    onSubmit({ ...pizza, id: selectedPizza?.id ?? id });
  };

  return (
    <form onSubmit={handleSubmit} className="PizzaForm">
      <div className="form-container">
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={pizza.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <input
            type="text"
            name="ingredients"
            value={pizza.ingredients?.join(", ")}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Price:</span>
          <input
            type="number"
            name="price"
            value={pizza.price}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Description:</span>
          <textarea
            name="description"
            value={pizza.description}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Image:</span>
          <select
            name="image"
            value={pizza.image ?? "pizza-margherita"}
            onChange={handleChange}
          >
            {imageOptions.map((option) => (
              <option key={option} value={option}>
                {option.replace("pizza-", "").replace("-", " ")}
              </option>
            ))}
          </select>
        </label>

        <div className="buttons">
          {selectedPizza && (
            <button
              type="button"
              className="delete-button"
              onClick={() => onDelete && onDelete(selectedPizza.id)}
            >
              Remove
            </button>
          )}
          <button type="submit">Save Pizza</button>
        </div>
      </div>

      <img
        src={`/assets/pizzas/${pizza.image ?? "pizza-margherita"}.svg`}
        alt=""
        className="form-pizza-image"
      />
    </form>
  );
};

export default PizzaForm;
