import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { HomePage, RegisterPage } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
