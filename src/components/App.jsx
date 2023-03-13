import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";

import Home from "pages/Home";
export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
};