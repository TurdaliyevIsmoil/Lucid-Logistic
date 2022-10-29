import React from "react";
import styled from "styled-components";
import shape from "../images/reason-bg.png";
import shadow from "../images/video-shape.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import scrollToOrder from "../utils/scrollToOrder";

function Results() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="container">
        <h1>{t("reasons_title")}</h1>
        <p>{t("reasons_desc")}</p>
        <div className="devider half"></div>
        <br />
        <main>
          <article>
            <div>
              <h1>
                <Counter end={100} />
              </h1>
              <p>{t("ming")}</p>
              <p>{t("reason_1")} </p>
            </div>
          </article>
          <article>
            <div>
              <h1>
                {" "}
                <Counter end={800} />
              </h1>
              <p>{t("milliard")}</p>
              <p>{t("reason_2")} </p>
            </div>
          </article>
          <article>
            <div>
              <h1>
                <Counter end={3} />
                .5
              </h1>
              <p>{t("million")}</p>
              <p>{t("reason_3")} </p>
            </div>
          </article>
          <article>
            <div>
              <h1>
                <Counter end={700} />
              </h1>
              <p>{t("ming")}</p>
              <p>{t("reason_4")} </p>
            </div>
          </article>
          <article>
            <div>
              <h1>
                <Counter end={70} />%
              </h1>
              <p>{t("persent")}</p>
              <p>{t("reason_5")} </p>
            </div>
          </article>
        </main>
        <div className="devider half"></div>
        <br />
        <button onClick={()=>window.location = '#orderToScroll'}>{t("reason_button")}</button>
      </div>

      <img src={shape} alt="" className="shape" />
      <img src={shadow} alt="" className="shadow" />

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

export default Results;

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  .close-anime {
    left: 100px;
    top: 65px;
    @media (max-width: 1340px) {
      left: -10px;
      top: 150px;
    }
    @media (max-width: 767px) {
      top: -50px;
    }
  }
  .play-anime {
    right: 100px;
    bottom: 100px;
    @media (max-width: 767px) {
      right: -40px;
      bottom: -60px;
    }
  }
  p:first-of-type {
    max-width: 730px;
    width: 100%;
    margin: 0 auto;
    margin-top: 24px;
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
  main {
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 50px;
    article {
      flex: 0 0 33%;
      text-align: center;
      @media (max-width: 1340px) {
        flex: 0 0 50%;
      }
      @media (max-width: 767px) {
        flex: 0 0 100%;
      }

      div {
        margin: 0 auto;
        max-width: 287px;
      }
      h1 {
        font-size: 50px;
      }
      p:first-of-type {
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        font-size: 24px;
        margin-top: 0;
      }
      p:last-of-type {
        margin-top: 24px;
      }
    }
  }
  button {
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .shape {
    position: absolute;
    top: -45%;
    width: 100%;
    left: 0;
    right: 0;
  }
  .shadow {
    position: absolute;
    bottom: 0%;
    right: 0;
    transform: translateY(70%);
  }
`;

function Counter({ end }) {
  return (
    <CountUp end={end} redraw={true}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
}
