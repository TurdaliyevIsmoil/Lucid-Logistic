import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/logo-light.png";

function Loader() {
  const [load, setload] = useState(false);

  useEffect(() => {
    console.log("Mock interview");
    return () => {};
  });
  const loaderHandler = () => {
    setload(true);
  };

  // useEffect(() => {
  // const onPageLoad = () => {
  //   setload(true);
  // };

  // Check if the page has already loaded
  // if (document.readyState === "complete") {
  //   onPageLoad();
  // } else {
  //   window.addEventListener("load", onPageLoad);
  //   // Remove the event listener when component unmounts
  //   return () => window.removeEventListener("load", onPageLoad);
  // }
  // }, []);
  return (
    <Wrapper
      onClick={loaderHandler}
      className={`flex align-center justify-center ${load ? "loaded" : ""}`}
    >
      <div className="main">
        <img src={logo} alt="" />
        <p>Bu yerga bosing...</p>
      </div>
      <div className="backdrop"></div>
    </Wrapper>
  );
}

export default Loader;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  .backdrop {
    background-color: #fff;
    z-index: 5;
    width: 100%;
    height: 100%;
  }
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 6;
    transform: translate(-50%, -50%);

    img {
      animation: logoClicker 1s linear alternate infinite;
    }
    p {
      transform: translateY(200px);
    }
    color: #000;
    text-align: center;
  }
  &.loaded {
    transform: translate(-100%) scale(0);
    transition-delay: 1s;
    img {
      opacity: 0;
      animation: logoend 1s cubic-bezier(0.7, -0.16, 0.72, 1.07);
    }
    .backdrop {
      transform: scale(0);
      animation: end 1s cubic-bezier(0.7, -0.16, 0.72, 1.07);
      opacity: 0;
    }
  }
  @keyframes end {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    99.999% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes logoend {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes logoClicker {
    0% {
      transform: scale(0.9) translate(-5%, -5%);
    }
    100% {
      transform: scale(1.1) translate(-5%, -5%);
    }
  }
`;
