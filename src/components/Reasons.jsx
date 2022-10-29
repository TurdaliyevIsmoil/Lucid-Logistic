import React from "react";
import styled from "styled-components";
import reason1 from "../images/reason1.png";
import reason2 from "../images/reason2.png";
import reason3 from "../images/reason3.png";
import reason4 from "../images/reason4.png";
import reasonBg from "../images/reason-bg.png";
import reasonShape from "../images/reason-shape.png";
import { useTranslation } from "react-i18next";
import scrollHandler from "../utils/scrollToOrder";
import scrollToOrder from "../utils/scrollToOrder";

function Reasons() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="container text-center">
        <h1>{t("for_you_title")}</h1>
        <div className="devider half"></div>
        <div className="row">
          <article className="text-center">
            <img src={reason1} alt="Maosh" />
            <p>{t("for_you_1")}</p>
          </article>
          <article className="text-center">
            <img src={reason2} alt="Maosh" />
            <p>{t("for_you_2")}</p>
          </article>
          <article className="text-center">
            <img src={reason3} alt="Maosh" />
            <p>{t("for_you_3")}</p>
          </article>
          <article className="text-center">
            <img
              src={reason4}
              style={{ scale: "1.15", translate: "0px -12px" }}
              alt="Maosh"
            />
            <p>{t("for_you_4")}</p>
          </article>
        </div>
        <div className="devider half"></div>
        <button onClick={scrollToOrder}>{t("for_me")}</button>
      </div>
      <svg
        width="50"
        className="close-anime"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.9999 8.33325C26.1505 8.33325 27.0832 9.26599 27.0832 10.4166V22.9166H39.5832C40.7338 22.9166 41.6666 23.8493 41.6666 24.9999C41.6666 26.1505 40.7338 27.0833 39.5832 27.0833H27.0832V39.5833C27.0832 40.7338 26.1505 41.6666 24.9999 41.6666C23.8493 41.6666 22.9166 40.7338 22.9166 39.5833V27.0833H10.4166C9.26599 27.0833 8.33325 26.1505 8.33325 24.9999C8.33325 23.8493 9.26599 22.9166 10.4166 22.9166H22.9166V10.4166C22.9166 9.26599 23.8493 8.33325 24.9999 8.33325Z"
          fill="#E7E7E7"
        />
      </svg>
      <svg
        width="50"
        className="close-anime"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.9999 8.33325C26.1505 8.33325 27.0832 9.26599 27.0832 10.4166V22.9166H39.5832C40.7338 22.9166 41.6666 23.8493 41.6666 24.9999C41.6666 26.1505 40.7338 27.0833 39.5832 27.0833H27.0832V39.5833C27.0832 40.7338 26.1505 41.6666 24.9999 41.6666C23.8493 41.6666 22.9166 40.7338 22.9166 39.5833V27.0833H10.4166C9.26599 27.0833 8.33325 26.1505 8.33325 24.9999C8.33325 23.8493 9.26599 22.9166 10.4166 22.9166H22.9166V10.4166C22.9166 9.26599 23.8493 8.33325 24.9999 8.33325Z"
          fill="#E7E7E7"
        />
      </svg>
      <img src={reasonShape} alt="" className="shape" />
      <img src={reasonBg} alt="" className="bg" />
    </Wrapper>
  );
}

export default Reasons;
const Wrapper = styled.div`
  position: relative;
  .container {
    position: relative;
    z-index: 2;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 26px;
    @media (max-width: 1340px) {
      grid-template-columns: 1fr 1fr;
      article {
        max-width: 287px;
        margin: 0 auto;
      }
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      article {
        max-width: 100%;
      }
    }
    article {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 24px;
      max-width: 310px;
      margin: 0 auto;
      img {
        height: 175px;
      }
      p {
        @media (max-width: 1400px) {
          font-size: 20px;
        }
        @media (max-width: 1340px) {
          font-size: 22px;
        }
      }
    }
  }
  .close-anime {
    top: 0;
    right: 70px;
    @media (max-width: 1340px) {
      right: -10px;
      top: -40px;
      &:last-of-type {
        left: 20px !important;
        top: 520px !important;
      }
    }
    &:last-of-type {
      top: 280px;
      left: 80px;
      right: auto;
    }
  }
  .shape {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(70%);
  }
  .bg {
    position: absolute;
    top: -50%;
    right: 0;
    width: 100%;
  }
`;
