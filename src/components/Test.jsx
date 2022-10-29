import { useTranslation } from "react-i18next";
import styledComponents from "styled-components";

const TestMode = () => {
  const { t } = useTranslation();
  return (
    <Wrapper className="">
      <div className="container">{t("test_mode")}</div>
    </Wrapper>
  );
};

export default TestMode;

const Wrapper = styledComponents.div`
position:relative;
    padding-top: 15px;
    background-color: #2249e7;
    color: white;
    padding-bottom: 15px;
    font-size: 14px;
    z-index:99;
`;
