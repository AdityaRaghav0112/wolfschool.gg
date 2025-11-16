import { useState, useRef } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";

// ✅ Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef();

  // useGSAP(() => {
  //   // simple animation
  //   gsap.to(".item1", { x: 100, duration: 1 });

  //   // scroll-triggered animation
  //   gsap.to(".item2", {
  //     x: 360,
  //     scrollTrigger: {
  //       trigger: ".item2", // element to watch
  //       start: "top 80%", // when .item2 enters viewport
  //       end: "top 30%",   // when .item2 reaches 30% from top
  //       scrub: true,      // link animation to scroll
  //       markers: true,    // shows start/end markers (for debugging)
  //     },
  //   });

  //   gsap.to(".item3", {
  //     x:500, 
  //     duration:2,
  //     scrollTrigger: {
  //       trigger: ".item3",
  //       start: "top 50%",
  //       end: "top 30%",
  //     }
  //   })
  // }, { scope: container });

  return (
    <Router>
      <Header/>
      <Hero/>
      <Routes/>
    </Router>
  );
}

export default App;
