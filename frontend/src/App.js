import { Helmet } from "react-helmet";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {HomePage, LoginPage, RegisterPage} from "./pages";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Facebaki</title>
      </Helmet>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
