import React, { useState } from "react";
import styled from "styled-components";
import img from "../images/video.jpg";
import shape from "../images/video-shape.png";
import { ControlBar, Player } from "video-react";
import video from "../videos/video.mp4";

function Video() {
  return (
    <Wrapper>
      <div className="container">
        <Player playsInline poster={img} src={video}>
          <ControlBar className="my-class" />
        </Player>
      </div>
      <img src={shape} className="shape" />
    </Wrapper>
  );
}

export default Video;
const Wrapper = styled.div`
  position: relative;
  .video-react {
    width: 100%;
    aspect-ratio: 12/6;
    height: 100%;
  }
  button {
    padding: unset !important;
    font-family: unset;
    line-height: unset !important;
    font-size: unset !important;
  }
  .video-react .video-react-poster {
    background-size: cover;
  }
  .video-react .video-react-control:before {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
  }
  .video-react
    .video-react-volume-menu-button-horizontal.video-react-button:before {
    width: unset !important;
  }
  .video-react .video-react-control:before {
    width: 100% !important;
    height: 100% !important;
  }
  .container > .video-react > button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #142978;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    border: 0;
    font-size: 24px !important;
    @media (max-width: 767px) {
      width: 50px !important;
      height: 50px;
      font-size: 12px !important;
      flex: 0 0 50px;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  .video-react .video-react-big-play-button.big-play-button-hide {
    display: none !important;
  }
  .video-react .video-react-control:before,
  .video-react .video-react-big-play-button:before {
    position: relative;
    top: unset;
    left: unset;
    width: unset;
    height: unset;
  }
  .container {
    z-index: 2;
    position: relative;
    img:first-of-type {
      object-fit: cover;
      @media (max-width: 767px) {
        aspect-ratio: 33/18;
      }
    }
  }

  /* svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 50px;
    }
    &,
    * {
      transition: all 0.3s;
    }
    &:hover {
      path:first-of-type {
        fill: white !important;
      }
      path:last-of-type {
        fill: #19191b !important;
      }
    }
  } */
  .shape {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(70%);
  }
`;
