import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { detail, home } from "../src/constants/paths";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Layout from "./elements/layout";

const Routing = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={detail} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default Routing;
