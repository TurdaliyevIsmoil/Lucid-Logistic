import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useUIContext } from "../store/context";
import smileImage from "../images/smile-face.png";
import sadImage from "../images/sad-face.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { getCookie } from "./LanguageButtons";

function OrderForm() {
  const [smile, setsmile] = useState(false);
  const [hover, sethover] = useState(false);
  const { fromCity } = useUIContext();
  const { t } = useTranslation();
  const { dark } = useUIContext();
  const form = useRef();
  const wrapper = useRef();
  const checkDirty = () => {
    form.current.removeEventListener("mouseleave", leaveHandler);
    sethover(true);
  };
  const enterHandler = () => setsmile(true);
  const leaveHandler = () => setsmile(false);
  useEffect(() => {
    form.current.addEventListener("mouseenter", enterHandler);
    form.current.addEventListener("mouseleave", leaveHandler);
    return () => {
      form.current.removeEventListener("mouseenter", enterHandler);
      form.current.removeEventListener("mouseleave", leaveHandler);
    };
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    (function (w, d, u) {
      var s = d.createElement("script");
      s.async = true;
      s.src = u + "?" + 27722392;
      var h = d.getElementsByTagName("script")[0];
      h.parentNode.insertBefore(s, h);
    })(
      window,
      document,
      "https://cdn-ru.bitrix24.ru/b22416894/crm/form/loader_31.js"
    );
  };

  const changeTitle = () => {
    const lang = getCookie("i18next");

    const inputs = document.querySelectorAll(
      "#orderToScroll .b24-form-control-label"
    );
    const button = document.querySelector("#orderToScroll .b24-form-btn");
    const success = document.querySelector(
      "#orderToScroll .b24-form-state-text"
    );
    if (inputs.length < 1) return;
    switch (lang) {
      case "en":
        inputs[0].innerHTML = "Your name";
        inputs[1].innerHTML = "Your phone Number";
        inputs[2].innerHTML = "Degree of english";
        button.innerHTML = "Submit";
        success.querySelector("p").innerHTML = "Successfully Sent!";
        break;
      case "ru":
        inputs[0].innerHTML = "Ваше имя";
        inputs[1].innerHTML = "Ваш номер телефона";
        inputs[2].innerHTML = "Ваш уровень английского";
        button.innerHTML = "Отправка";
        success.querySelector("p").innerHTML = "Successfully Sent!";
        break;
      case "uz":
        inputs[0].innerHTML = "Ismingiz";
        inputs[1].innerHTML = "Telefon nomeringiz";
        inputs[2].innerHTML = "Ingliz tili darajangiz";
        button.innerHTML = "Yuborish";
        success.querySelector("p").innerHTML = "Muvaffaqqiyatli jo'natildi!";
    }
    return () => {};
  };

  useEffect(() => {
    setTimeout(() => {
      changeTitle();
    }, 2000);
  }, [i18next.language, fromCity]);
  return (
    <Wrapper
      ref={wrapper}
      id="orderToScroll"
      className={`${dark ? "" : "light"} ${hover ? "active" : ""}`}
    >
      <div className="devider"></div>

      <div className="container flex align-center">
        <main className="flex column">
          <h1 className="text-left">{t("sign_up")}</h1>
          <p>{t("sign_up_desc")}</p>
        </main>

        <form
          method="post"
          ref={form}
          id="form"
          action="#"
          onSubmit={submitHandler}
          className="flex column align-stretch b24-form"
        >
          {fromCity === "andijan" ? (
            <script data-b24-form="inline/23/ueoy4i" data-skip-moving="true">
              {(function (w, d, u) {
                var s = d.createElement("script");
                s.async = true;
                s.src = u + "?" + ((Date.now() / 180000) | 0);
                var h = d.getElementsByTagName("script")[0];
                h.parentNode.insertBefore(s, h);
              })(
                window,
                document,
                "https://cdn-ru.bitrix24.ru/b22416894/crm/form/loader_23.js"
              )}
            </script>
          ) : fromCity === "pushkin" ? (
            <script data-b24-form="inline/29/sstgoz" data-skip-moving="true">
              {(function (w, d, u) {
                var s = d.createElement("script");
                s.async = true;
                s.src = u + "?" + ((Date.now() / 180000) | 0);
                var h = d.getElementsByTagName("script")[0];
                h.parentNode.insertBefore(s, h);
              })(
                window,
                document,
                "https://cdn-ru.bitrix24.ru/b22416894/crm/form/loader_29.js"
              )}
            </script>
          ) : (
            fromCity === "chilonzor" && (
              <script data-b24-form="inline/31/fzzuz4" data-skip-moving="true">
                {(function (w, d, u) {
                  var s = d.createElement("script");
                  s.async = true;
                  s.src = u + "?" + ((Date.now() / 180000) | 0);
                  var h = d.getElementsByTagName("script")[0];
                  h.parentNode.insertBefore(s, h);
                })(
                  window,
                  document,
                  "https://cdn-ru.bitrix24.ru/b22416894/crm/form/loader_31.js"
                )}
              </script>
            )
          )}
          {/* <input
            type="text"
            className="b24-form-control b24-form-control-not-empty"
            placeholder={t("your_name")}
            name="name"
          />
          <input
            type="text"
            placeholder={t("phone_number")}
            class="b24-form-control b24-form-control-not-empty"
            name="lastname"
          />
          <input
            placeholder={t("english_level")}
            class="b24-form-control b24-form-control-not-empty"
            type="tel"
          />
          <button class="b24-form-btn">{t("sign_up_button")}</button> */}
        </form>
      </div>

      <div className="devider"></div>
      <div className={`smile-effect ${smile ? "active" : ""}`}>
        <img src={sadImage} alt="" />
        <img src={smileImage} alt="" />
      </div>
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

export default OrderForm;
const Wrapper = styled.div`
  background: #1e1e20;
  z-index: 2;
  position: relative;
  &.light {
    background: #f8f8f8;
  }
  .container {
    max-width: 1228px;
    margin: 0 auto;
    & > * {
      flex: 0 0 50%;
      gap: 20px;
      @media (max-width: 1340px) {
        flex: 0 0 100%;
      }
    }
    @media (max-width: 1340px) {
      flex-direction: column;
      gap: 50px;
      h1,
      p {
        text-align: center !important;
      }
    }
    main {
      max-width: 500px;
      margin-right: auto;
      @media (max-width: 1340px) {
        margin-right: auto;
        margin-left: auto;
      }
    }
    form {
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
    p {
      font-size: 24px;
      @media (max-width: 767px) {
        font-size: 22px;
      }
    }
  }
  .circle-anime {
    top: -30px;
    left: 60px;
    @media (max-width: 767px) {
      left: -10px;
    }
  }
  .close-anime {
    bottom: -20px;
    right: 50px;
    @media (max-width: 767px) {
      right: -10px;
    }
  }
  &.active {
    .smile-effect {
      left: -240px !important;
    }
  }
  &:hover {
    .smile-effect {
      left: 40px;
    }
  }
  .smile-effect {
    position: absolute;
    top: 100px;
    left: -240px;
    transition: all 0.3s;
    @media (max-width: 992px) {
      display: none;
    }
    &.active img:last-of-type {
      opacity: 1;
    }
    img:last-of-type {
      opacity: 0;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 130px;
      transition: all 0.3s;
    }
  }
`;
