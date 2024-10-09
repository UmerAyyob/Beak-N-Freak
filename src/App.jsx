import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import Services from "./Components/Services/Services.jsx";
import About from "./Components/About/About.jsx";
import AppointmentPage from "./Components/ContactUs/AppointmentPage.jsx";

function App() {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <AppointmentPage />
    </>
  );
}

export default App;
