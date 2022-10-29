import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useUIContext } from "../store/context";

function QuoteLast() {
  const { dark } = useUIContext();
  const { t } = useTranslation();
  return (
    <Wrapper className={`${dark ? "" : "light"}`}>
      <h1
        className="container text-center sm"
        dangerouslySetInnerHTML={{ __html: t("quote_last") }}
      ></h1>
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
    </Wrapper>
  );
}

export default QuoteLast;
const Wrapper = styled.div`
  background: #1e1e20;
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  z-index: 2;
  &.light {
    background: #f8f8f8;
  }
  @media (max-width: 1340px) {
    padding: 60px 50px;
    h1 {
      font-size: 30px;
    }
    .close-anime {
      right: -20px !important;
    }
    .circle-anime {
      left: 30px !important;
    }
  }
  @media (max-width: 767px) {
    padding: 60px 0px;
    h1 {
      font-size: 24px;
    }
    .close-anime {
      right: -20px !important;
    }
    .circle-anime {
      left: -20px !important;
    }
  }
  h1 {
    text-transform: none;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
  }

  .close-anime {
    top: 0;
    right: 150px;
  }
  .circle-anime {
    bottom: 0;
    left: 80px;
    transform: translateY(50%);
  }
`;
