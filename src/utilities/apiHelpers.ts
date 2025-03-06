import { API_URL } from "./constants";

import type { Pizza } from "../typescript/Pizza";

const headers = { "Content-Type": "application/json" };

export function getPizzas(): Promise<Pizza[]> {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching pizzas:", error));
}

export function getPizza(id: string): Promise<Pizza> {
  return fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching pizza:", error));
}

export function createPizza(pizza: Pizza): Promise<void> {
  return fetch(API_URL, { method: "POST", headers, body: JSON.stringify(pizza) })
    .then(() => console.log("Pizza created successfully!"))
    .catch((error) => console.error("Error creating pizza:", error));
}

export function updatePizza(pizza: Pizza): Promise<void> {
  return fetch(`${API_URL}/${pizza.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(pizza),
  })
    .then(() => console.log("Pizza updated successfully!"))
    .catch((error) => console.error("Error updating pizza:", error));
}

export function deletePizza(id: string): Promise<void> {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(() => console.log("Pizza deleted successfully!"))
    .catch((error) => console.error("Error deleting pizza:", error));
}
