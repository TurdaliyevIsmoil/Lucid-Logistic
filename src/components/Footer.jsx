import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import logoDark from "../images/logo-dark.png";
import { useUIContext } from "../store/context";

function Footer() {
  const { dark } = useUIContext();
  const { t } = useTranslation();
  return (
    <Wrapper className={dark ? "dark" : "light"}>
      <div className="container top flex align-start justify-between">
        <div className="logo">
          <img src={logoDark} alt="" />
          <br />
          <br />
          <a href="https://lucidlogisticsacademy.com/">
            <p>www.lucidlogisticsacademy.com</p>
          </a>
          <br />
          <p>{t("work_time")} 08:00 - 19:00</p>
        </div>
        <div className="phone">
          <p>{t("savdo_bolimi")}</p>

          <a className="phone" href="te:+998 (55) 500-37-77">
            <p className="phone-number"> +998 (95) 515 67 77</p>
          </a>
          <a className="phone" href="te:+998 (55) 500-37-77">
            <p className="phone-number">+998 (99) 636 67 77</p>
          </a>
          <a className="phone" href="te:+998 (55) 500-37-77">
            <p className="phone-number">+998 (55) 500 37 77</p>
          </a>
          <p dangerouslySetInnerHTML={{ __html: t("footer_desc") }}></p>
        </div>
        <div className="social-media">
          <p>{t("social_media")}</p>
          <a className="phone" href="te:+998 (55) 500-37-77">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok--v1.png" />
          </a>
          <a className="phone" href="te:+998 (55) 500-37-77">
            <img src="/facebook.png" alt="" />
          </a>
          <a className="phone" href="te:+998 (55) 500-37-77">
            <img src="/youtube.png" alt="" />
          </a>
          <a className="phone" href="te:+998 (55) 500-37-77">
            <img src="/instagram.png" alt="" />
          </a>
          <a className="phone" href="te:+998 (55) 500-37-77">
            <img src="/telegram.png" alt="" />
          </a>
        </div>
      </div>
      <div className="devider half"></div>
      <div className="container flex bottom justify-between">
        <p>Lucid Logistics Academy | 2022</p>
        <p>Terms of Use | Privacy Policy | Contract offer</p>
      </div>
    </Wrapper>
  );
}

export default Footer;
const Wrapper = styled.div`
  padding-top: 50px;
  z-index: 2;
  position: relative;
  padding-bottom: 30px;
  /* background: #1e1e20; */
  .bottom {
    border-top: 1px solid #fff4;
    padding-top: 30px;
    @media (max-width: 767px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
    p {
      font-size: 16px;
      opacity: 0.9;
    }
  }
  .top {
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 50px;
      align-items: center;
      text-align: center;
      padding-top: 40px;
      .logo img {
        width: 120px;
      }
    }
  }
  .phone {
    & > p:last-child {
      font-size: 14px;
      line-height: 120%;
      margin-top: 20px;
    }
    & > p:first-child {
      margin-bottom: 20px;
    }
    .phone-number {
      font-size: 20px !important;
      font-weight: bold;
      margin-top: 4px !important;
      margin-bottom: 0px !important;
    }
  }
  &.light {
    background-color: #142978;
    p {
      color: white;
    }
  }
  .social-media {
    p {
      margin-bottom: 20px;
    }
    img {
      width: 38px;
      margin: 0 5px;
    }
  }
  @media (max-width: 767px) {
    padding: 30px 0px;
    p {
      font-size: 18px !important;
    }
    img {
      width: 100px;
    }
  }
  .phone {
    font-weight: bold;
    font-size: 22px;
  }
`;
