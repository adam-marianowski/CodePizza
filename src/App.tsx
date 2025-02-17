import { BrowserRouter, Route, Routes } from "react-router-dom";
import PizzasPage from "./components/PizzasPage";
import PizzaEditor from "./components/PizzaEditor";
import PizzaCreator from "./components/PizzaCreator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <img src="/assets/logo/logo.svg" alt="" className="logo" />
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<PizzasPage />} />
            <Route path="/pizzas/add" element={<PizzaCreator />} />
            <Route path="/pizzas/edit/:id" element={<PizzaEditor />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
