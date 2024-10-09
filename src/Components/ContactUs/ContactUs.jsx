import React from "react";
import DarkBtn from "../Button/DarkBtn";

function ContactUs() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-sky-color p-4"
      id="contact"
    >
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-heading mb-8">
          Contact Us
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-color focus:border-blue-color"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-color focus:border-blue-color"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-color focus:border-blue-color"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message or Appointment Details
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-color focus:border-blue-color"
              placeholder="Enter your message or appointment details"
              rows="4"
            />
          </div>

          <DarkBtn className="w-full">Submit</DarkBtn>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-2">Or contact us directly at:</p>
          <p className="text-blue-color font-semibold">
            <a href="tel:+1234567890">+1 (234) 567-890</a> |{" "}
            <a href="mailto:info@petcare.com">info@petcare.com</a>
          </p>
          <p className="text-gray-600 mt-2">
            123 Pet Care Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
