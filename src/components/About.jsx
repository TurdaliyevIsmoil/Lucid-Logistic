import React, { useEffect, useState } from "react";
import styled from "styled-components";
import banner from "../images/about.jpg";
import banner2 from "../images/filial2.png";
import { useUIContext } from "../store/context";
import video1 from "../videos/filial1.mp4";
import video2 from "../videos/filial2.mp4";
import { ControlBar, Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const { dark } = useUIContext();
  const [slide, setslide] = useState(0);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = i === 0 ? 1 : 0;
      setslide(i);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Wrapper className="container">
      <h1>{t("about_title")}</h1>
      <div className="devider half"></div>
      <div className="content flex justify-between">
        <main>
          <h1 className="text-left">Truck dispatcher</h1>
          <br />
          <p dangerouslySetInnerHTML={{ __html: t("about_desc") }}></p>
        </main>
        <div className="images">
          {slide === 0 ? (
            <>
              <img src={banner} alt="" />
              <Player
                playsInline
                autoPlay
                muted
                loop
                poster="/assets/poster.png"
                src={video1}
              >
                <ControlBar
                  autoHide={false}
                  disableCompletely
                  disableDefaultControls
                  className="my-class"
                />
              </Player>
            </>
          ) : (
            <>
              <img src={banner2} alt="" />
              <Player
                playsInline
                autoPlay
                muted
                loop
                poster="/assets/poster.png"
                src={video2}
              >
                <ControlBar
                  autoHide={false}
                  disableCompletely
                  disableDefaultControls
                  className="my-class"
                />
              </Player>
            </>
          )}
          {/* : (
            <>
              <img
                src={
                  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
                }
                alt=""
              />
              <Player
                playsInline
                autoPlay
                muted
                loop
                poster="/assets/poster.png"
                src={video1}
              >
                <ControlBar
                  autoHide={false}
                  disableCompletely
                  disableDefaultControls
                  className="my-class"
                />
              </Player>
            </>
          )} */}
        </div>
      </div>
      <div className="devider half"></div>
      <h1>{t("lucid_courses")}</h1>
      <div className="devider half"></div>

      <div className={`knowledge flex justify-between ${dark ? "" : "light"}`}>
        <article className="block flex align-center justify-center">
          <h1 className="md">{t("dispatching")}</h1>
        </article>
        <article className="block flex align-center justify-center">
          <h1 className="md">{t("safety")}</h1>
        </article>
        <article className="block flex align-center justify-center">
          <h1 className="md">{t("accounting")}</h1>
        </article>
        <article className="block flex align-center justify-center">
          <h1 className="md">English</h1>
        </article>
      </div>
      <br />
      <p style={{ textAlign: "right" }}>{t("coming_soon")}</p>
      <div className="devider half"></div>

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
    </Wrapper>
  );
}

export default About;
const Wrapper = styled.div`
  position: relative;
  max-width: 1228px;
  margin: 0 auto;
  z-index: 2;
  @media (max-width: 1340px) {
    .content {
      flex-direction: column-reverse;
      gap: 30px;
      p {
        max-width: 570px;
      }
    }
    .knowledge {
      gap: 20px !important;
      article {
        padding: 20px 13px !important;
      }

      p {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 767px) {
    .content {
      main {
        padding-right: 0 !important;
      }
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
      }
    }
    .knowledge {
      flex-direction: column;
      h1 {
        font-size: 24px !important;
      }
      article {
        padding: 20px 27px !important;
      }
      p {
        font-size: 20px !important;
      }
    }
  }
  main {
    flex: 0 0 50%;
    padding-right: 20px;
    h1 {
      font-size: 30px;
      /* @media (max-width: 1366px) {
        font-size: 28px;
      } */
    }
  }
  .images {
    cursor: pointer;
    position: relative;
    flex: 0 0 47%;
    width: 100%;
    &:hover {
      img {
        opacity: 0 !important;
        transform: scale(1.5);
      }
    }
    @media (max-width: 1340px) {
      flex: 0 0 350px;
    }
    @media (max-width: 767px) {
      flex: 0 0 180px;
    }
    overflow: hidden;
    img,
    video {
      width: 100%;
      transition: all 0.5s;
      margin-left: auto;
      object-fit: cover !important;
      display: block;
      aspect-ratio: 48/27 !important;
      height: 100%;
    }
    img {
      z-index: 2;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }
    .video-react {
      aspect-ratio: 48/27 !important;
      height: 100%;
    }
    .video-react-button {
      display: none;
    }
  }

  .knowledge {
    gap: 30px;
    article {
      flex: 1 1 0px;
      padding: 20px;
      text-align: center;
    }
    h1 {
      font-size: 22px;
    }
  }
  .play-anime {
    bottom: -50px;
    left: 0px;
    @media (max-width: 1340px) {
      bottom: 0;
      left: -60px;
    }
    @media (max-width: 767px) {
      bottom: -20px;
      left: -60px;
    }
  }
`;
