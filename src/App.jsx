import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import StatsBar   from "./components/StatsBar";
import HowItWorks from "./components/HowItWorks";
import CodeSection from "./components/CodeSection";
import RiskGrid   from "./components/RiskGrid";
import Frameworks from "./components/Frameworks";
import QuickStart from "./components/QuickStart";
import FuturePlans from "./components/FuturePlans";
import Footer     from "./components/Footer";
import DocsPage   from "./pages/DocsPage";
import Contact    from "./components/Contact";

function HomePage() {
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
        <FuturePlans />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"     element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
