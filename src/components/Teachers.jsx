import React from "react";
import styled from "styled-components";
import teacher1 from "../images/teacher1.png";
import bg from "../images/reason-bg.png";
import { ControlBar, Player } from "video-react";
import { useTranslation } from "react-i18next";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";

function Teachers() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="container">
        <h1>{t("teacher_title")}</h1>
        <p>{t("teacher_desc")}</p>
        <main>
          <Teacher
            img={t1}
            video={
              "https://ak.picdn.net/shutterstock/videos/1049816983/preview/stock-footage-young-indian-business-woman-wearing-headphones-communicating-by-video-call-ethnic-businesswoman.webm"
            }
            title={t("teacher_1_title")}
            paragraph={t("teacher_1_desc")}
          />
          <Teacher
            img={t2}
            video={
              "https://ak.picdn.net/shutterstock/videos/1049816983/preview/stock-footage-young-indian-business-woman-wearing-headphones-communicating-by-video-call-ethnic-businesswoman.webm"
            }
            title={t("teacher_2_title")}
            paragraph={t("teacher_2_desc")}
          />
          <Teacher
            img={t3}
            video={
              "https://ak.picdn.net/shutterstock/videos/1049816983/preview/stock-footage-young-indian-business-woman-wearing-headphones-communicating-by-video-call-ethnic-businesswoman.webm"
            }
            title={t("teacher_3_title")}
            paragraph={t("teacher_3_desc")}
          />
          <Teacher
            img={t4}
            video={
              "https://ak.picdn.net/shutterstock/videos/1049816983/preview/stock-footage-young-indian-business-woman-wearing-headphones-communicating-by-video-call-ethnic-businesswoman.webm"
            }
            title={t("teacher_4_title")}
            paragraph={t("teacher_4_desc")}
          />
        </main>
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
      <img src={bg} className="bg-shape" />
    </Wrapper>
  );
}

export default Teachers;
const Wrapper = styled.div`
  position: relative;
  p:first-of-type {
    max-width: 660px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 24px;
    text-align: center;
  }
  .container {
    z-index: 2;
    position: relative;
  }
  h1 {
    max-width: 914px;
    margin: 0 auto;
    width: 100%;
  }
  article {
    img {
      width: 160px;
      height: 160px;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 50%;
    }
    &:hover {
      img {
        /* opacity: 0; */
      }
      .video-react {
        opacity: 1;
      }
    }
  }
  .image {
    position: relative;
    margin-bottom: 24px;

    .video-react {
      height: 140px;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.3s;
      margin: 0 auto;
      width: auto;
      aspect-ratio: 1/1;
      overflow: hidden;
      video {
        object-fit: cover;
      }
    }
    img {
      /* position: absolute; */
      transition: all 0.6s;
      z-index: 2;
      margin: 0 auto;
      /* top: 50%; */
      /* left: 50%; */
      /* transform: translate(-50%, -50%); */
    }
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    @media (max-width: 1340px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    article {
      text-align: center;
      img {
      }
      strong {
        margin-bottom: 12px;
        font-family: "Futura PT";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
      }
    }
  }
  .close-anime {
    right: 100px;
    top: 100px;
    @media (max-width: 1340px) {
      top: 200px;
      right: -10px;
    }
    @media (max-width: 767px) {
      top: 370px;
      right: -10px;
    }
  }
  .bg-shape {
    position: absolute;
    width: 100%;
    top: -40%;
    left: 0;
    right: 0;
    @media (max-width: 1340px) {
      top: 10%;
      height: 100%;
    }
  }
`;

function Teacher({ img, video, title, paragraph }) {
  return (
    <article>
      <div className="image flex">
        <img src={img} alt="" />
        {/* <Player playsInline autoPlay muted loop src={video}>
          <ControlBar
            autoHide={false}
            disableCompletely
            disableDefaultControls
          />
        </Player> */}
      </div>
      <strong className="flex justify-center">{title} </strong>
      <p>{paragraph}</p>
    </article>
  );
}
