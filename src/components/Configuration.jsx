import React, { useState } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import { useUIContext } from "../store/context";

function Configuration() {
  const [isactive, setisactive] = useState(true);
  const [isTashkent, setisTashkent] = useState(false);
  const [isRegion, setisRegion] = useState(false);
  const { locationDetector } = useUIContext();
  const setLocation = (isCity) => {
    locationDetector(isCity);
    setisactive(false);
  };
  return (
    <Transition in={isactive} timeout={1500}>
      {(state) => (
        <Wrapper className={`flex justify-center align-center text-center fade-${state}`}>
          {isTashkent === false && isRegion === false ?
            <main>
              <h1>Siz qayerda istiqomad qilasiz?</h1>
              <p onClick={() => setisTashkent(true)}>Toshkent Shahrida</p>
              <p onClick={() => setisRegion(true)}>Viloyatda</p>
            </main>
            :
            isTashkent ?
              <main>
                <h1>Siz Toshkentning qayerida istiqomad qilasiz?</h1>
                <p onClick={() => setLocation("pushkin")}>Pushkin</p>
                <p onClick={() => setLocation('chilonzor')}>Chilonzor</p>
              </main>
              :
              <main>
                <h1>Siz Viloyatning qayerida istiqomad qilasiz?</h1>
                <p onClick={() => setLocation('andijan')}>Andijon</p>
              </main>
          }
        </Wrapper>
      )}
    </Transition>
  );
}

export default Configuration;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #000000ab;
  padding: 20px;
  transition: all .2s;
  backdrop-filter: blur(20px);
  &.fade-entering{
    opacity: 0;
  }
  &.fade-entered{
    opacity: 1;
  }
  &.fade-exiting{
    opacity: 0;
    /* display: none; */
  }
  &.fade-exited{
    opacity: 0;
    display: none;
  }
  main {
    width: 100%;
    max-width: 600px;
    background-color: #ffffffe6;
    padding: 25px 20px;
    border-radius: 12px;
    color: #222;
    h1 {
      font-size: 24px;
      margin-bottom: 32px;
      @media (max-width: 767px) {
        font-size: 20px;
        padding: 0 20px;
        margin-bottom: 24px;
      }
    }
    p {
      background: #2223;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.1s;
      &:hover {
        background: #22222268;
        color: #fff;
      }
      &:first-of-type {
        margin-bottom: 12px;
      }
    }
  }
`;
