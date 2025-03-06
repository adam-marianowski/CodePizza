export const ROUTES = {
  HOME: "/",
  PIZZA_CREATOR: "/pizzas/add",
  PIZZA_EDITOR: "/pizzas/edit/:id",

  getEditorRoute: (id: string) => `/pizzas/edit/${id}`,
};
