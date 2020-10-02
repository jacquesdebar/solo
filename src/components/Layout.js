import React from "react";
import "../css/layout.css";
import { Header, Footer } from "./";

export default ({ children }) => (
  <div className="narrowPanel">
    <Header />
    {children}
    <div
      className="col-2 mx-auto mt-5"
      style={{ borderTop: "2px solid black" }}
    />
    <Footer />
  </div>
);
