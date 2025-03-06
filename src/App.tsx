import { BrowserRouter, Route, Routes } from "react-router-dom";
import PizzasPage from "@components/PizzasPage";
import PizzaEditor from "@components/PizzaEditor";
import PizzaCreator from "@components/PizzaCreator";
import { ROUTES } from "./utilities/routes";
import { ASSETS } from "./utilities/constants";

import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <img src={ASSETS.LOGO} alt="" className="logo" />
        </nav>

        <main className="main">
          <Routes>
            <Route path={ROUTES.HOME} element={<PizzasPage />} />
            <Route path={ROUTES.PIZZA_CREATOR} element={<PizzaCreator />} />
            <Route path={ROUTES.PIZZA_EDITOR} element={<PizzaEditor />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
