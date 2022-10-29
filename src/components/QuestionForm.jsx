import i18next from "i18next";
import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useUIContext } from "../store/context";

function QuestionForm() {
  const { dark } = useUIContext();
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <Wrapper className={`${dark ? "" : "light"}`}>
      <div className="devider"></div>
      <div className="container flex align-center">
        <main className="flex column">
          <h1 className="text-left">{t("questions_title")}</h1>
          <p>{t("questions_desc")}</p>
        </main>
        <form className="flex column align-stretch" id="questionForm">
          {lang === "uz" ? (
            <script data-b24-form="inline/73/kd17ab" data-skip-moving="true">
              {(function (w, d, u) {
                var s = d.createElement("script");
                s.async = true;
                s.src = u + "?" + ((Date.now() / 180000) | 0);
                var h = d.getElementsByTagName("script")[0];
                h.parentNode.insertBefore(s, h);
              })(
                window,
                document,
                "https://cdn-ru.bitrix24.ru/b22416894/crm/form/loader_73.js"
              )}
            </script>
          ) : lang === "en" ? (
            <script data-b24-form="inline/79/vd5i0z" data-skip-moving="true">
              {(function (w, d, u) {
                var s = d.createElement("script");
                s.async = true;
                s.src = u + "?" + ((Date.now() / 180000) | 0);
                var h = d.getElementsByTagName("script")[0];
                h.parentNode.insertBefore(s, h);
              })(
                window,
                document,
                "https://cdn-ru.bitrix24.ru/b22416894/crm/form/loader_79.js"
              )}
            </script>
          ) : (
            <script data-b24-form="inline/77/kw4t32" data-skip-moving="true">
              {(function (w, d, u) {
                var s = d.createElement("script");
                s.async = true;
                s.src = u + "?" + ((Date.now() / 180000) | 0);
                var h = d.getElementsByTagName("script")[0];
                h.parentNode.insertBefore(s, h);
              })(
                window,
                document,
                "https://cdn-ru.bitrix24.ru/b22416894/crm/form/loader_77.js"
              )}
            </script>
          )}
          {/* <input type="text" placeholder={t("your_name")} />
          <input type="text" placeholder={t("phone_number")} />
          <button>{t("questions_button")}</button> */}
        </form>
      </div>
      <div className="devider"></div>

      {/* <svg
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
      </svg> */}
    </Wrapper>
  );
}

export default QuestionForm;
const Wrapper = styled.div`
  background: #1e1e20;
  z-index: 2;
  position: relative;
  &.light {
    background: #f8f8f8;
  }
  .container {
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
`;
