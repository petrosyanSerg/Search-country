import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import Homepage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
