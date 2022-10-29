import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useUIContext } from "../store/context";

function Quote() {
  const { dark } = useUIContext();
  const { t } = useTranslation();
  return (
    <Wrapper className={`${dark ? "" : "light"}`}>
      <h1
        className="container text-center sm"
        dangerouslySetInnerHTML={{ __html: t("quote_1") }}
      ></h1>
      <svg
        width="51"
        height="60"
        viewBox="0 0 51 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="circle-anime"
      >
        <circle cx="20" cy="20" r="18.5" stroke="white" stroke-width="3" />
        <circle cx="31" cy="40" r="19.5" stroke="white" />
      </svg>
      <svg
        width="99"
        height="32"
        className="play-anime"
        viewBox="0 0 99 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L25.2781 26.2247L39.7483 8.60674L57.0497 26.2247L75.9238 8.60674L97 30"
          stroke="#E7E7E7"
          stroke-width="4"
        />
      </svg>
    </Wrapper>
  );
}

export default Quote;
const Wrapper = styled.div`
  background: #1e1e20;
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  z-index: 2;
  &.light {
    background: #f8f8f8;
  }
  @media (max-width: 1340px) {
    padding: 60px 50px;
    h1 {
      font-size: 30px;
    }
    .circle-anime {
      right: -20px !important;
    }
    .play-anime {
      left: 30px !important;
    }
  }
  @media (max-width: 767px) {
    padding: 60px 0px;
    h1 {
      font-size: 24px;
    }
    .circle-anime {
      right: -20px !important;
    }
    .play-anime {
      left: -20px !important;
    }
  }
  h1 {
    text-transform: none;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
  }

  .circle-anime {
    top: 0;
    right: 150px;
    transform: translateY(-50%);
  }
  .play-anime {
    bottom: 0;
    left: 80px;
    transform: translateY(50%);
  }
`;
