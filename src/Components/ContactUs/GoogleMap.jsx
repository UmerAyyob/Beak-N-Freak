import React from "react";

function GoogleMap() {
  return (
    <div className="mt-8">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509639!2d144.955651315904!3d-37.81732797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d452f61fd8b%3A0x506f16f764cd6600!2sFlinders+St+Station%2C+Melbourne+VIC%2C+Australia!5e0!3m2!1sen!2sus!4v1620420498059!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
