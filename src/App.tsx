import React from "react";
import { Layout } from "./layout/Layout";
import { Search } from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import { Informer } from "./components/Informer/Informer";
import { CreatingLibrary } from "./pages/CreatingLibrary";

import "bootstrap/dist/css/bootstrap.min.css";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Search />} />
        <Route path="/create" element={<CreatingLibrary />} />
        <Route
          path="*"
          element={<Informer message="This page is not available" />}
        />
      </Route>
    </Routes>
  );
};
