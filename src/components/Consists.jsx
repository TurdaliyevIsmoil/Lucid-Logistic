import { t } from "i18next";
import React, { useEffect, useRef, useState, useTransition } from "react";
import styled from "styled-components";
import bg from "../images/consists-bg.png";
import scrollToOrder from "../utils/scrollToOrder";

function Consists() {
  const [wide, setwide] = useState(false);
  const isFirefox = typeof InstallTrigger !== "undefined";
  const block = useRef();
  const [isPending, startTransition] = useTransition();
  const scrollHandler = () => {
    startTransition(() => {
      if (!!!block.current) {
        return;
      }
      const enteringPoint =
        block.current.getBoundingClientRect().top - window.innerHeight;
      const exitingPoint = block.current.getBoundingClientRect().bottom;
      if (enteringPoint > 100 || exitingPoint < -100) {
        setwide(false);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <Wrapper
      ref={block}
      className={`container text-center ${wide ? "active" : ""} ${
        isFirefox ? "firefox" : ""
      }`}
    >
      <h1>{t("consists_title")}</h1>
      <div className="devider half"></div>
      <main onClick={() => setwide(!wide)}>
        <article className="block">
          <div className="count">
            <img src={bg} alt="" />
            <h4>1</h4>
          </div>
          <strong className="text-center flex justify-center">
            {t("consists_1_title")}
          </strong>
          <p className="text-center">{t("consists_1_desc")}</p>
        </article>
        <article className="block">
          <div className="count">
            <img src={bg} alt="" />
            <h4>2</h4>
          </div>
          <strong className="text-center flex justify-center">
            {t("consists_2_title")}
          </strong>
          <p className="text-center">{t("consists_2_desc")}</p>
        </article>
        <article className="block">
          <div className="count">
            <img src={bg} alt="" />
            <h4>3</h4>
          </div>
          <strong className="text-center flex justify-center">
            {t("consists_3_title")}
          </strong>
          <p className="text-center">{t("consists_3_desc")}</p>
        </article>
        <article className="block">
          <div className="count">
            <img src={bg} alt="" />
            <h4>4</h4>
          </div>
          <strong className="text-center flex justify-center">
            {t("consists_4_title")}
          </strong>
          <p className="text-center">{t("consists_4_desc")}</p>
        </article>
        <article className="block">
          <div className="count">
            <img src={bg} alt="" />
            <h4>5</h4>
          </div>
          <strong className="text-center flex justify-center">
            {t("consists_5_title")}
          </strong>
          <p className="text-center">{t("consists_5_desc")}</p>
        </article>
        <article className="block">
          <div className="count">
            <img src={bg} alt="" />
            <h4>6</h4>
          </div>
          <strong className="text-center flex justify-center">
            {t("consists_6_title")}
          </strong>
          <p className="text-center">{t("consists_6_desc")}</p>
        </article>
      </main>
      <div className="devider half"></div>
      <button onClick={scrollToOrder}>{t("COURSE_ATTENDANCE")}</button>
    </Wrapper>
  );
}

export default Consists;

const Wrapper = styled.div`
  z-index: 2;
  position: relative;
  &.active {
    main {
      transform: unset !important;
    }
    article {
      transform: unset !important;
      @media (max-width: 1340px) {
        &:hover {
          bottom: 0 !important;
        }
      }
    }
  }
  &.firefox {
    main {
      article {
        background: #303032;
        &:hover {
          background: #363636;
        }
      }
    }
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    transition: all 0.3s;
    transform: translateY(-50px);
    &:hover {
      transform: translateY(-50px) scale(1.05);
    }
    @media (max-width: 767px) {
      transform: unset !important;
    }
    article {
      overflow: hidden;
      padding: 30px 20px;
      position: relative;
      cursor: pointer;
      bottom: 0;
      @media (max-width: 1340px) {
        transition: all 0.3s !important;
        &:hover:not(:last-of-type) {
          bottom: 100px;
        }
      }
      @media (max-width: 767px) {
        transform: unset !important;
        &:hover:not(:last-of-type) {
          bottom: 0;
        }
      }
      .count {
        position: absolute;
        top: 0;
        left: 0;
        img {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.9;
        }
        h4 {
          z-index: 2;
          position: relative;
          margin-left: 20px;
          margin-top: 6px;
        }
      }
      p,
      strong {
        z-index: 2;
        position: relative;
      }
      h4 {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        text-align: center;
      }
      strong {
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        margin-bottom: 12px;
      }
    }
    article:nth-of-type(1) {
      transform: translate(70%, 50%);
      @media (max-width: 1340px) {
        transform: translate(50%, 50%);
      }
    }
    article:nth-of-type(2) {
      z-index: 1;
      transform: translate(0%, 40%);
      @media (max-width: 1340px) {
        transform: translate(-58.5%, 90%);
      }
    }
    article:nth-of-type(3) {
      transform: translate(-50%, 50%);
      @media (max-width: 1340px) {
        transform: translate(50%, 13%);
        z-index: 1;
      }
    }
    article:nth-of-type(4) {
      z-index: 2;
      transform: translate(40%, -30%);
      @media (max-width: 1340px) {
        transform: translate(-58.5%, 48%);
      }
    }
    article:nth-of-type(5) {
      z-index: 2;
      @media (max-width: 1340px) {
        transform: translate(50%, -35%);
        z-index: 2;
      }
    }
    article:nth-of-type(6) {
      z-index: 1;
      transform: translate(-40%, -30%);
      @media (max-width: 1340px) {
        transform: translate(-58.5%, 10%);
        z-index: 2;
      }
    }
  }
  @media (max-width: 1400px) {
    p {
      font-size: 20px;
    }
  }
  @media (max-width: 1340px) {
    main {
      grid-template-columns: 1fr 1fr !important;
    }
    p {
      font-size: 22px;
    }
  }
  @media (max-width: 767px) {
    main {
      grid-template-columns: 1fr !important;
    }
    p {
      font-size: 22px;
    }
    h4 {
      font-size: 24px !important;
    }
  }
`;
