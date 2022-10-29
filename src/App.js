import styled from "styled-components";
import About from "./components/About";
import Benefit from "./components/Benefit";
import Configuration from "./components/Configuration";
import Consists from "./components/Consists";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Maps from "./components/Maps";
import OrderForm from "./components/OrderForm";
import QuestionForm from "./components/QuestionForm";
import Quote from "./components/Quote";
import QuoteLast from "./components/QuoteLast";
import Reasons from "./components/Reasons";
import Results from "./components/Results";
import Teachers from "./components/Teachers";
import TestMode from "./components/Test";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Configuration />
      <Loader />
      <TestMode />
      <Wrapper>
        <Navbar />
        <Header />
      </Wrapper>
      <div className="devider"></div>
      <div className="devider half"></div>
      <About />
      <div className="devider half"></div>
      <Reasons />
      <div className="devider"></div>
      <Quote />
      <div className="devider"></div>
      <Consists />
      <div className="devider"></div>
      <Video />
      <div className="devider"></div>
      <QuoteLast />
      <div className="devider"></div>
      <Teachers />
      <div className="devider"></div>
      <Benefit />
      <div className="devider"></div>
      <OrderForm />
      <div className="devider"></div>
      <Results />
      <div className="devider"></div>
      <FAQs />
      <div className="devider"></div>
      <QuestionForm />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 100vw;
`;
