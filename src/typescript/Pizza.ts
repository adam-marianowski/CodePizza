export interface Pizza {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  description: string;
  image:
    | "pizza-bacon"
    | "pizza-hawaiian-special"
    | "pizza-italiana"
    | "pizza-margherita"
    | "pizza-mediterranean"
    | "pizza-pepperoni"
    | "pizza-prosciutto"
    | "pizza-special"
    | "pizza-spicy"
    | "pizza-tangy"
    | "pizza-veg-special"
    | "pizza-vegetarian";
}
