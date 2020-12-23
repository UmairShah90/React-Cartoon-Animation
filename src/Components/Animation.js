import React from "react";
import useWebAnimation from "@wellyshen/use-web-animations";
import "../App.css";
import cat from "../images/cat.gif";
import girl from "../images/girl.gif";

const Animation = () => {
  const { ref, playState, getAnimation } = useWebAnimation({
    keyframes: {
      transform: ["translate(0,0)"],
      transform: ["translate(1000px,0)"],
    },
    timing: {
      duration: 2000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
    autoPlay: false,
  });

  const play = () => {
    getAnimation().play();
  };

  const pause = () => {
    getAnimation().pause();
  };

  const cancel = () => {
    getAnimation().cancel();
  };
  return (
    <div className="main-container">
      <h1>Girl Catching A Cat Animation</h1>
      <h2>Current State: {playState}</h2>
      <button className="button" onClick={play}>
        Play
      </button>
      <button className="button" onClick={pause}>
        Pause
      </button>
      <button className="button" onClick={cancel}>
        Reset
      </button>

      <div className="target">
        <div className="animation">
          <div ref={ref} className="moving-container">
            <img className="catImage" src={cat} alt="" />
            <img className="girlImage" src={girl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
