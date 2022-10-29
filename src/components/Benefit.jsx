import React, { useEffect, useRef, useState, useTransition } from "react";
import styled from "styled-components";
import phone from "../images/phone.png";
import { useTranslation } from "react-i18next";

function Benefit() {
  const block = useRef();
  const { t } = useTranslation();
  const [isPending, startTransition] = useTransition();
  const [entired, setentired] = useState(false);
  const scrollHandler = () => {
    startTransition(() => {
      if (!!!block.current) {
        return;
      }
      const enteringPoint =
        block.current.getBoundingClientRect().top - window.innerHeight;
      setentired(enteringPoint < -160);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <Wrapper ref={block} className={`${entired ? "active" : ""}`}>
      <div className="container">
        <main>
          <h2>lucid logistics</h2>
          <h1 dangerouslySetInnerHTML={{ __html: t("benefit_title") }}></h1>
          <div className="row flex">
            <div className="col">
              <article>
                <strong>1.</strong>
                <p>{t("benefit_1")}</p>
              </article>
              <article>
                <strong>2.</strong>
                <p>{t("benefit_2")}</p>
              </article>
              <article>
                <strong>3.</strong>
                <p>{t("benefit_3")}</p>
              </article>
            </div>

            <div className="col">
              <img src={phone} className="phone" />

              <a href="https://huntmegroup.com">
                <img src="/huntme.png" alt="" className="hunt" />
              </a>
            </div>

            <div className="col">
              <article>
                <strong>4.</strong>
                <p>{t("benefit_4")}</p>
              </article>
              <article>
                <strong>5.</strong>
                <p>{t("benefit_5")}</p>
              </article>
              <article>
                <strong>6.</strong>
                <p>{t("benefit_6")}</p>
              </article>{" "}
            </div>
          </div>
          <div className="hunt-tick">
            <strong>7.</strong>
            <p>HuntME - Logistics Jobs & Services Platform</p>
          </div>
        </main>
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
          width="105"
          height="121"
          viewBox="0 0 105 121"
          fill="none"
          className="play-anime"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.1092 78.1456L33.4672 20.1378L83.0244 50.3177L32.1092 78.1456Z"
            stroke="#E7E7E7"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            d="M36.6646 100.854L38.1037 39.3828L90.6196 71.3645L36.6646 100.854Z"
            stroke="#E7E7E7"
            stroke-linejoin="round"
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
      </div>
    </Wrapper>
  );
}

export default Benefit;

const Wrapper = styled.div`
  z-index: 2;
  position: relative;
  .container {
    position: relative;
    display: flex;
    text-align: left;
    @media (max-width: 1340px) {
      flex-direction: column;
      gap: 60px;
    }
  }
  .hunt-tick {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    opacity: 0;
    transition: all 0.3s;
    padding-top: 32px;
    font-family: "Days One";
    @media (max-width: 767px) {
      justify-content: flex-start;
      padding-top: 12px;
    }
    p {
      font-family: "Days One";
    }
  }
  strong {
    font-size: 22px;
  }
  main {
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.6s;
    width: 100%;
    h2,
    h1 {
      text-align: center;
    }
    h1 {
      margin-bottom: 20px;
    }
  }
  h2 {
    font-family: "Days One";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 155%;
    text-transform: uppercase;
    color: #2249e7;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  .row {
    margin-top: 30px;
    gap: 70px;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      margin-top: 50px;
      flex-direction: column;
    }
  }
  h1,
  h2 {
    text-align: left;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  article {
    font-family: "Days One", "Futura PT";
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;
    max-width: 400px;
    opacity: 0;
    transition: all 0.3s;
    p {
      font-family: "Days One", inherit;
      font-weight: 600;
    }
    img {
      width: 22px;
      margin-top: 2px;
    }
    @media (max-width: 767px) {
      align-items: flex-start;
    }
  }
  &.active {
    .hunt-tick {
      opacity: 1;
      transition-delay: 4.5s;
    }
    main {
      transform: unset;
      opacity: 1;
    }
    .phone {
      transform: unset;
    }
    .col:first-of-type {
      article:first-of-type {
        opacity: 1;
        transition-delay: 1s;
      }
      article:nth-of-type(2) {
        opacity: 1;
        transition-delay: 1.5s;
      }
      article:nth-of-type(3) {
        opacity: 1;
        transition-delay: 2s;
      }
    }
    .col {
      position: relative;
      &:hover {
        .phone {
          opacity: 0;
          transform: scale(1.5);
        }
        .hunt {
          opacity: 1;
        }
      }
      .hunt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        opacity: 0;
        transition: all 0.3s;
      }
      .phone {
      }
    }
    .col:last-of-type {
      article:first-of-type {
        opacity: 1;
        transition-delay: 2.5s;
      }
      article:nth-of-type(2) {
        opacity: 1;
        transition-delay: 3s;
      }
      article:nth-of-type(3) {
        opacity: 1;
        transition-delay: 3.5s;
      }
    }
  }
  .phone {
    transform: rotateY(360deg);
    transition: all 1s;
  }
  .play-anime {
    top: 0;
    left: 0;
    @media (max-width: 1340px) {
      top: 30px;
      left: 40px;
    }
    @media (max-width: 767px) {
      width: 70px;
      display: none;
      left: 0;
      top: 0;
    }
  }
  .circle-anime {
    top: 0;
    right: 0;
    @media (max-width: 1340px) {
      right: 40px;
    }
    @media (max-width: 767px) {
      width: 70px;
      right: -40px;
    }
  }
  .close-anime {
    bottom: 10px;
    right: 30px;
    @media (max-width: 1340px) {
      right: 60px;
    }
    @media (max-width: 767px) {
      width: 70px;
      right: -30px;
      bottom: 40px;
    }
  }
`;
