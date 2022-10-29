import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoDark from "../images/logo-dark.png";
import logoLight from "../images/logo-light.png";
import dark from "../images/sun.png";
import light from "../images/moon.png";
import { useUIContext } from "../store/context";
import LanguageButtons from "./LanguageButtons";

const Navbar = () => {
  const { toggle, dark: mode } = useUIContext();
  return (
    <Wrapper className={`container flex justify-between align-center`}>
      <div>
        <img src={mode ? logoDark : logoLight} alt="LUCID LOGISTICS ACADEMY" />
      </div>
      <aside className="flex align-center">
        <LanguageButtons />
        <div onClick={toggle} className="switcher flex align-center">
          <div className="toggler"></div>
          <img src={mode ? dark : light} alt="" />
        </div>
        <a href="tel:+998 (55) 500-37-77">
          <p className="bold">+998 (55) 500-37-77</p>
        </a>
      </aside>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.nav`
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  z-index: 3;
  &.active {
    & > div > img {
    }
  }
  @media (max-width: 1440px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  & > div > img {
    width: 120px;
    @media (max-width: 767px) {
      width: 99px;
    }
  }
  p.bold {
    @media (max-width: 767px) {
      font-size: 16px;
      white-space: nowrap;
    }
  }
  aside > a {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .switcher {
    margin-right: 30px;
    width: 46px;
    height: 24px;
    background: #2249e7;
    border-radius: 30px;
    padding: 1px;
    gap: 3px;
    cursor: pointer;
    @media (max-width: 767px) {
      margin-right: 20px;
    }
    @media (max-width: 392px) {
      margin-right: 10px;
    }
    &:hover {
      .toggler {
        opacity: 0.8;
      }
    }
    img {
      width: 16px;
      height: 16px;
    }
    .toggler {
      transition: all 0.3s;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #ffffff;
    }
  }
`;
