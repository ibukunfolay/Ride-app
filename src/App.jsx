import React, { useEffect, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { About, Footer, Homepage, More } from "./components";
import { gif } from "./assets";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    aos.init({ easing: "ease" });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <img src={gif} alt="loader" />
      </div>
    );
  }

  return (
    <>
      <Homepage />
      <About />
      <More />
      <Footer />
    </>
  );
};

export default App;
