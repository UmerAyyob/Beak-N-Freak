import React from "react";
import OrangeBtn from "../Button/OrangeBtn";

function Services() {
  return (
    <section
      className="bg-[#f9f9f9] py-12 px-6 md:px-12 lg:px-24 "
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-heading font-Inter text-3xl md:text-4xl font-semibold mb-4">
          Gentleness and Beauty in Every Care Service
        </h2>
        <p className="text-textColor font-openSans text-lg md:text-xl">
          We offer premium grooming services designed to provide exceptional
          care for your pet.
        </p>
      </div>

      {/* Services */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Card 1: Nail and Foot Care */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1">
          <div className="mb-4">
            {/* Icon (optional image or SVG here) */}
            <img
              src="/img/medical-report.png"
              alt="Nail and Foot Care"
              className="mx-auto w-16"
            />
          </div>
          <h3 className="text-heading text-2xl font-semibold mb-4">
            Nail and Foot Care
          </h3>
          <p className="text-textColor mb-4">
            Extra care to improve the health of the animal’s feet and hooves.
          </p>
          <OrangeBtn>Foot Care</OrangeBtn>
        </div>

        {/* Card 2: Skin and Fur Care */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1">
          <div className="mb-4">
            <img
              src="/img/pet-supplies.png"
              alt="Skin and Fur Care"
              className="mx-auto w-16"
            />
          </div>
          <h3 className="text-heading text-2xl font-semibold mb-4">
            Skin and Fur Care
          </h3>
          <p className="text-textColor mb-4">
            Protects the health and attractiveness of your pet’s skin and coat.
          </p>
          <OrangeBtn>Skin Care</OrangeBtn>
        </div>

        {/* Card 3: Dental and Oral Care */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1">
          <div className="mb-4">
            <img
              src="/img/pet-collar.png"
              alt="Dental and Oral Care"
              className="mx-auto w-16"
            />
          </div>
          <h3 className="text-heading text-2xl font-semibold mb-4">
            Dental and Oral Care
          </h3>
          <p className="text-textColor mb-4">
            Prevent health issues for animal welfare, including digestion.
          </p>
          <OrangeBtn>Dental Care</OrangeBtn>
        </div>
      </div>
    </section>
  );
}

export default Services;
