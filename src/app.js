import React, { useEffect } from "react";
import Header from "./header";
import Home from "./home";
const App = () => {
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) *
        (percentageScroll / 100)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  // const hideScrollElement = (element) => {
  //   element.classList.remove("scrolled");
  // };

  const handleScrollAnimation = () => {
    const scrollElements = document.querySelectorAll(".js-scroll");

    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        // hideScrollElement(el);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });

    return () => {
      window.remove("scroll", () => {
        handleScrollAnimation();
      });
    };
  }, []);

  return (
    <div className="my-container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
