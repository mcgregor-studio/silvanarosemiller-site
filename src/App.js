import React from "react";
import Header from "../src/components/Header/Header";
import "./App.scss";
import Testimonials from "./sections/Testimonials/Testimonials";

export default function App() {
  return (
    <main className="App">
          <Header />
          <About />
          <DEI />
          <Testimonials />
          <Contact />
    </main>
  );
}
