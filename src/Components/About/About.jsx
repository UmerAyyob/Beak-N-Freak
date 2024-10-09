import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For carousel navigation

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      review:
        "The grooming services here are top-notch! My dog always looks and feels amazing after every visit.",
      image: "/img/p1.jpg", // Replace with actual image URL
      rating: "★★★★",
    },
    {
      name: "Michael Lee",
      review:
        "Exceptional care and attention to detail. The staff really know what they’re doing.",
      image: "/img/p2.jpg", // Replace with actual image URL
      rating: "★★★★★",
    },
    {
      name: "Emma Brown",
      review: "Great service! My pet is always treated with love and care.",
      image: "/img/p3.jpg", // Replace with actual image URL
      rating: "★★★",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section
      className="bg-[#f9f9f9] py-12 px-6 md:px-12 lg:px-24 font-poppins"
      id="about"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-heading font-Inter text-3xl md:text-4xl font-semibold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-textColor font-openSans text-lg md:text-xl">
          Hear from satisfied pet owners who trust us with their pet’s care.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-heading rounded-full shadow-lg"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Review Content */}
          <div className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-white shadow-lg rounded-lg p-8 text-center">
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              className="mx-auto w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-heading text-xl font-semibold mb-2">
              {reviews[currentIndex].name}
            </h3>
            <p className="text-textColor italic mb-4">
              "{reviews[currentIndex].review}"
            </p>
            <span className="text-[#FF811B] font-semibold">
              {reviews[currentIndex].rating}
            </span>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-heading rounded-full shadow-lg"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
