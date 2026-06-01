import "./styles/global.css";

import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import StatsBar   from "./components/StatsBar";
import HowItWorks from "./components/HowItWorks";
import CodeSection from "./components/CodeSection";
import RiskGrid   from "./components/RiskGrid";
import Frameworks from "./components/Frameworks";
import QuickStart from "./components/QuickStart";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <div className="page">
        <Nav />
        <Hero />
        <StatsBar />
        <HowItWorks />
        <CodeSection />
        <RiskGrid />
        <Frameworks />
        <QuickStart />
        <Footer />
      </div>
    </>
  );
}
