import React from "react";
import OrangeBtn from "../Button/OrangeBtn";
import DarkBtn from "../Button/DarkBtn";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between bg-bgImg py-16 bg-no-repeat bg-contain max-w-19xl mx-auto sm:px-6 lg:px-8"
      id="home"
    >
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="/img/heroimg.jpg"
          alt="Doctor with Dog"
          className="max-w-full h-auto rounded-full shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 bg-white p-8 rounded-xl shadow-lg">
        <h1 className=" text-heading font-Inter text-3xl md:text-4xl font-semibold mb-4">
          Welcome to BeaknWhiskers!
        </h1>
        <p className="text-lg text-textColor mb-4 leading-relaxed font-poppins">
          BeaknFreak is your one-stop destination for all things pet-related. We
          offer a variety of adorable pets. We also stock a wide range of pet
          food, essential medicines, and grooming products. Visit our store to
          discover premium pet products and supplies to keep your pets healthy
          and happy.
        </p>

        <div className="flex space-x-4 mt-6">
          <ul className="flex space-x-4">
            <li>
              <Link to="/explore-pet">
                <OrangeBtn>Explore Our Pets</OrangeBtn>
              </Link>
            </li>
            <li>
              <Link to="/store">
                <DarkBtn>Visit Our Store</DarkBtn>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
