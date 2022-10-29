import React from "react";
import styled from "styled-components";
import firstBanner from "../images/header-main.png";
import secondBanner from "../images/home-main-light.png";
import graduate from "../images/graduate.png";
import dollars from "../images/dollars.png";
import moreDollars from "../images/more-dollars.png";
import darkShapeBlue from "../images/home-dark-shadow.png";
import darkShapeRed from "../images/home-dark-red.png";
import lightShapeLeft from "../images/home-light-shape-left.png";
import lightShapeRight from "../images/home-light-right.png";
import { useUIContext } from "../store/context";
import { useTranslation } from "react-i18next";
import scrollToOrder from "../utils/scrollToOrder";
// import truckLight from "../images/truck-light.png";
// import truckDark from "../images/truck-dark.png";

// const transitionStyles = {
// entering: { opacity: 1, display: "block" },
// entered: { opacity: 1 },
// exiting: { opacity: 0 },
// exited: { opacity: 0, display: "none" },
// };
// const duration = 500;

function Header() {
  const { dark } = useUIContext();
  const { t } = useTranslation();
  // const [image, setimage] = useState(1);
  // const [timeout, settimeout] = useState();
  // useEffect(() => {
  // let counter = 1;
  // settimeout(
  // setInterval(() => {
  // counter = counter === 1 ? 2 : 1;
  // setimage(counter);
  // }, 5000)
  // );
  // return () => {
  // clearInterval(timeout);
  // };
  // }, []);

  return (
    <Wrapper className="container flex justify-between align-center">
      <main>
        <h1
          className="sm text-left"
          dangerouslySetInnerHTML={{ __html: t("header_title") }}
        ></h1>
        <div className={`flex benefit ${dark ? "" : "light"}`}>
          <article>
            <div className="icon flex justify-center align-center">
              <img src={graduate} alt="" />
            </div>
            <p className="sm">{t("header_benefit_1")}</p>
          </article>
          <article>
            <div className="icon flex justify-center align-center">
              <img src={dollars} alt="" />
            </div>
            <p className="sm">{t("header_benefit_2")}</p>
          </article>
          <article>
            <div className="icon flex justify-center align-center">
              <img src={moreDollars} alt="" />
            </div>
            <p className="sm"> {t("header_benefit_3")}</p>
          </article>
        </div>
        <button onClick={scrollToOrder}>{t("leave_application")}</button>
      </main>

      {dark ? (
        <>
          <img src={firstBanner} className="main" alt="" />
          <img src={darkShapeBlue} alt="" className="dark-shape blue" />
          <img src={darkShapeRed} alt="" className="dark-shape red" />
        </>
      ) : (
        <>
          {/* <Transition in={image === 1} timeout={duration}>
            {(state) => ( */}
          <img
            src={secondBanner}
            // style={{
            //   ...transitionStyles[state],
            // }}
            className="main"
            alt=""
          />
          <img src={lightShapeLeft} alt="" className="light-shape blue" />
          <img src={lightShapeRight} alt="" className="light-shape right" />
        </>
      )}
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
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.header`
  padding-top: 30px;
  @media (max-width: 767px) {
    padding-top: 10px;
  }
  & > .main {
    flex: 0 0 160px;
    width: 150px;
    transform: scale(3) translate(-40px, 0px);
    margin-right: 0px;
    z-index: 2;
    transition: all 0.5s;
    position: absolute;
    right: 80px;
    @media (min-width: 1400px) {
      width: 160px;
      flex: 0 0 180px;
      right: 10%;
    }
    @media (max-width: 1340px) {
      display: none !important;
    }
  }
  .benefit {
    max-width: 820px;
    margin: 60px 0;
    gap: 20px;
    @media (max-width: 1340px) {
      text-align: center;
      max-width: 100%;
    }
    @media (max-width: 767px) {
      margin: 40px 0 50px;
      flex-direction: column;
      gap: 46px;
      align-items: center;
      article {
        max-width: 260px;
      }
    }
    &.light article {
      background: #f1f1f1 !important;
    }
    article {
      padding: 30px 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(50px);
      border-radius: 10px;
      position: relative;
      transition: all 0.3s;
      flex: 1 1 33%;
      &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-5px);
        .icon {
          top: -6px;
          border-color: #383838c0;
          img {
            margin-bottom: 5px;
            transform: scale(1.1);
          }
        }
      }
      .icon {
        transform: translateY(-50%) translateX(-50%);
        position: absolute;
        transition: all 0.3s;
        top: 0;
        left: 50%;
        width: 45px;
        height: 45px;
        background: rgba(255, 255, 255, 0.1);
        border: 0.5px solid #2249e7;
        backdrop-filter: blur(25px);
        border-radius: 50%;
        img {
          width: 100%;
          transition: all 0.3s;
        }
      }
    }
  }

  main {
    z-index: 2;
    margin-top: 20px;
    @media (max-width: 1340px) {
      text-align: center;
    }
    h1 {
      max-width: 960px;
      @media (max-width: 1340px) {
        font-size: 36px;
        text-align: center;
      }
      @media (max-width: 767px) {
        font-size: 24px;
      }
    }
  }

  .dark-shape {
    position: absolute;
    width: 80%;
    top: 0;
    left: 0;
    z-index: 0;
    @media (max-width: 1340px) {
      width: 130%;
    }
    &.red {
      right: 0;
      left: auto;
      @media (max-width: 1340px) {
        display: none;
      }
    }
  }

  .light-shape {
    position: absolute;
    top: 180px;
    left: 0;
    z-index: 0;
    @media (max-width: 1340px) {
      top: -100%;
      width: 100%;
    }
    @media (max-width: 767px) {
      top: -70%;
      width: 150%;
    }
    &.right {
      top: 0;
      left: auto;
      right: 0;
      @media (max-width: 1340px) {
        top: 100%;
        width: 60%;
        opacity: 0.5;
      }
      @media (max-width: 767px) {
        top: 100%;
        width: 100%;
      }
    }
  }

  .circle-anime {
    top: 100px;
    right: 90px;
    @media (max-width: 1340px) {
      top: 380px;
      right: 0;
      width: 55px;
      transform: translateX(50%);
    }
  }
  .play-anime {
    bottom: 10px;
    right: 40%;
    @media (max-width: 1340px) {
      top: 500px;
      left: 0;
      width: 90px;
      transform: translateX(-50%);
    }
    @media (max-width: 767px) {
      top: 600px;
    }
  }
  .close-anime {
    right: 40px;
    bottom: -60px;
    @media (max-width: 1340px) {
      top: 680px;
    }
    @media (max-width: 767px) {
      top: 900px;
      right: -10px;
    }
  }
`;
