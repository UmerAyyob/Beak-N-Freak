import React from "react";
import ContactUs from "./ContactUs";
import GoogleMap from "./GoogleMap";
import BusinessHours from "./BusinessHours";

function AppointmentPage() {
  return (
    <div className="bg-sky-color min-h-screen py-12">
      <ContactUs />
      <GoogleMap />
      <BusinessHours />
    </div>
  );
}

export default AppointmentPage;
