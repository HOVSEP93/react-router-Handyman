import "./App.scss";
import { BrowserRouter, NavLink } from "react-router-dom";

import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Handyman ⚒️</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
