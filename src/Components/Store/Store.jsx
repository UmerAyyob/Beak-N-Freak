import React, { useState } from "react";
import DarkBtn from "../Button/DarkBtn";
import OrangeBtn from "../Button/OrangeBtn";

const storeItems = {
  food: [
    {
      id: 1,
      name: "Premium Dog Food",
      price: "$20",
      img: "img/doog.jpg",
    },
    {
      id: 2,
      name: "Cat Biscuits",
      price: "$15",
      img: "img/car-biscuit.jpg",
    },
    {
      id: 3,
      name: "Bird Seeds",
      price: "$10",
      img: "img/seeds.jpg",
    },
    {
      id: 4,
      name: "Organic Rabbit Pellets",
      price: "$18",
      img: "img/rabbit-food.jpg",
    },
  ],
  medicine: [
    {
      id: 1,
      name: "Anti-Tick Shampoo",
      price: "$12",
      img: "img/shampoo.jpg",
    },
    {
      id: 2,
      name: "Flea Drops",
      price: "$8",
      img: "img/drops.jpg",
    },
    {
      id: 3,
      name: "Vet Medical Tools",
      price: "$10",
      img: "img/medication.jpg",
    },
    {
      id: 4,
      name: "Deworming Medication",
      price: "$15",
      img: "img/tools.jpg",
    },
  ],
  accessories: [
    {
      id: 1,
      name: "Pet Collar",
      price: "$5",
      img: "img/colloar.jpg",
    },
    {
      id: 2,
      name: "Chew Toy",
      price: "$10",
      img: "img/chew.jpg",
    },
    {
      id: 3,
      name: "Parrot Cage Accessories",
      price: "$8",
      img: "img/cage.jpg",
    },
    {
      id: 4,
      name: "Luxury Cat Bed",
      price: "$30",
      img: "img/bed.jpg",
    },
  ],
};

function VisitOurStore() {
  const [activeCategory, setActiveCategory] = useState("food");

  return (
    <section className="bg-light-color py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-heading text-center mb-12">
          Visit Our Store
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-4 mb-8">
          <OrangeBtn handleClick={() => setActiveCategory("food")}>
            Food
          </OrangeBtn>
          <OrangeBtn handleClick={() => setActiveCategory("medicine")}>
            Medicine
          </OrangeBtn>
          <OrangeBtn handleClick={() => setActiveCategory("accessories")}>
            Accessories
          </OrangeBtn>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeItems[activeCategory].map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-heading mb-2">
                {item.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{item.price}</p>
              <DarkBtn>Order Now</DarkBtn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisitOurStore;
