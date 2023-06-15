import React from "react";
import Header from "../src/components/Header/Header";
import Divider from "../src/components/Divider/Divider";
import About from "./sections/About/About";
import DEI from "./sections/DEI/DEI";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact/Contact";
import "./App.scss";

export default function App() {
  return (
    <main className="App">
      
          <Header />
          <About />
          <Divider />
          <DEI />
          <Testimonials />
          <Contact />
    </main>
  );
}
