import React, { useEffect, useState } from "react";
import styled from "styled-components";
import i18next from "i18next";

function LanguageButtons() {
  const [language, setlanguage] = useState(getCookie("i18next"));
  const [menu, setmenu] = useState(false);
  const [langText, setlangText] = useState(
    language === "uz" ? "UZB" : language === "ru" ? "RUS" : "ENG"
  );

  useEffect(() => {
    setlangText(() =>
      language === "uz" ? "UZB" : language === "ru" ? "RUS" : "ENG"
    );
    return;
  }, [i18next.language]);

  const clickedLang = (type) => {
    setmenu(false);
    i18next.changeLanguage(type);
    setlanguage(type);
  };
  return (
    <Container className="lang flex align-center">
      <button className="flex align-center" onClick={() => setmenu(!menu)}>
        <a>
          <h5 className="colored">{langText}</h5>
        </a>
      </button>
      <menu className={`flex align-center ${menu ? "open" : ""}`}>
        {langText !== "UZB" && (
          <li className="flex align-center " onClick={() => clickedLang("uz")}>
            <h5>UZB</h5>
          </li>
        )}
        {langText !== "ENG" && (
          <li className="flex align-center " onClick={() => clickedLang("en")}>
            <h5>ENG</h5>
          </li>
        )}
        {langText !== "RUS" && (
          <li className="flex align-center" onClick={() => clickedLang("ru")}>
            <h5>RUS</h5>
          </li>
        )}
      </menu>
    </Container>
  );
}

export default LanguageButtons;

const Container = styled.div`
  position: relative;
  height: fit-content;
  margin-left: 50px;
  z-index: 999;
  margin-right: 30px;
  @media (max-width: 767px) {
    margin-right: 20px;
  }
  * {
    background-color: #fff0 !important;
    &:hover {
      background-color: #fff0 !important;
    }
  }
  a {
    text-transform: uppercase;
    @media (max-width: 1599px) {
      h5 {
        font-size: 14px;
      }
    }
  }
  img {
    width: 28px;
  }
  button {
    cursor: pointer;
    gap: 5px;
    background-color: #fff0 !important;
    border: none;
    padding: 0 !important;
    img:last-child {
      width: 10px;
    }
    &:hover {
      background-color: #fff0 !important;
    }
  }
  menu {
    flex-direction: column;
    padding: 0px 13px;
    position: absolute;
    z-index: 99;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
    top: 100%;
    transform: scale(0) translateX(50%);
    left: 50%;
    transition: all 0.3s;
    &.open {
      transform: translateX(-50%) scale(1);
    }
    li {
      font-weight: 500;
      cursor: pointer;
      padding: 13px 0;
      gap: 8px;
      color: var(--n6-color);
      @media (max-width: 767px) {
        padding: 8px 0;
      }
      @media (max-width: 1599px) {
        h5 {
          font-size: 14px !important;
          @media (max-width: 767px) {
            font-size: 10px !important;
          }
        }
      }
      a {
        color: #555555;
        z-index: 99;
        position: relative;
      }
      &:first-child {
        border-bottom: 1px solid #00000029;
      }
    }
    img {
      width: 20px;
    }
  }
`;
export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
