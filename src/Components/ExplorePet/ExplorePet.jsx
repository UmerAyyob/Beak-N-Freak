import React, { useState } from "react";
import OrangeBtn from "../Button/OrangeBtn";

import DarkBtn from "../Button/DarkBtn";

const pets = [
  {
    id: 1,
    name: "Buddy",
    type: "dog",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
  },
  {
    id: 2,
    name: "Whiskers",
    type: "cat",
    image:
      "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
  },
  {
    id: 3,
    name: "Polly",
    type: "parrot",
    image:
      "https://images.pexels.com/photos/53360/macaw-parrot-bird-pet-53360.jpeg?cs=srgb&dl=pexels-pixabay-53360.jpg&fm=jpg",
  },
  {
    id: 4,
    name: "Thumper",
    type: "dog",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    name: "Goldie",
    type: "parrot",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 6,
    name: "Nibbles",
    type: "hamster",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmujBLi_BAeyIWNDgXMa8JmPQ191R5kfBNw&s",
  },
  {
    id: 7,
    name: "Chirpy",
    type: "hamster",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMSExIWFhUXFRcVFxcXFxUVGBcYFhoXGBUYFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLTYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADgQAAIBAgMFBgQFBAIDAAAAAAABAgMRBCExBRJBUWEGcYGRofATIrHBMkLR4fEHFFKiI9IVFiT/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAApEQACAwACAQMDBAMBAAAAAAAAAQIDERIhMQQTQSJRcTJhgfChsdEF/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADyUktSPPFpEZTUfJ1Rb8EkEVYoyjikR92P3JcJEgGMaifESmlqyeryRwyBEqYk1fHZW7oomq2yXiMRGCvJ2Xvgaae0qbe6pZ9U0aKjUtTXKmmVv1BJVFrGV9D0h4SfAmF8JclpXKOPAACREAAAA8bsUmAx9R15KS+WTas/y2zVuazsc0YXgAOgA8uYyqpHG8BmLkWeKR4sSV+9En7bJVz00RqGxMmpJkWmjMAEjgAAAAAAAAAAAAI+IxKjlxGOxChFvjwKKOJvne5nut4dItrr5E6tWvm2Y76tdESda+WhphJ/sYJWNs2KHRJjis2jONQiGUqtrEE2S4osoVbI1Va/gRXiOpyX9QKNarQXwpO0XecY3vKLtnlm7W06svU9eaVuGdnXYjHxhrd35K/wDBsw+LjLR+d0fF8JtWvhKkYxqNxeUoyd4+N3l+x9DwO0Y1VGcHFvjuzTt4IvdccKuT06xSPUQsNXukSVMy72W4SISsTYV0VqkbUy+uxx8FU4aWSZ6Q8NUzsTDZCXJaZ5R4sAAmRIu0m/hytya9Cmo1M7pcvov0LXa0vkKmhGyu/eZmvk0+i6pIsVinobViGV6qamLr6mV2y+5d7aLJ4g1zxkbZsqcRiOpTbQxbyV/v6cxC9yeHXUktLfaO2cPBNuayzdsyn2T2xpVqqp5xbyi21ZvgujKTau0FBJTVr6LLefNqNvqYYDYsZ1KdSn+G8ZtrSyafhoXOuDTZFOSPpFGsS4zsUdGtYsKWIMtV33LLKi0p1DaQKdQmUpXPSrs5GOccMwAWkAAAAAAAYVqqinJ6IzKHtJjLWgu9/YhZPjHSUI8nhA2pj3OWWnBdCDSqPm/X6XJNCKavqbErafQ8qbbes9CCSWGFKr5+BtnPvNSWd/vp4HtRcM/MiSMt/n9EQcbXlF3tdG2S9vP6ETEpO/NctGRZJEqhid6OWRX4/EWutG7pZaPgxgcRZuLsl4fYlTw8J/nh4v7BbqZ14fM+0WyWpXSbyurZK+fHxZn2Rf8Ab33nLdb0tdXvbKzfHi0fSJbEpc/9m/SxjLZsE42WS4PI3OfRmUezbs/FN2eq6Xy6Fp8XIrVgrXcPllzs2vHgSabcrX146r0/kzMt6JtPEK13JDDbVpTluQqwlJflUk35LM5/tPsd18PUp05OM2vlfVZpO2sXo0fNtidmNpU50N6M/wD55Xg7xUYwct6cVJZy3rvJ8DTXCLjulE5NSzD7zTkWUHdXKHBYi6i+iLXDVuBbS86KrYksA116m6m+RpKCBtKpdqPBZv7FXWnwXMrdn7XnWnX3lbdryhBcd2KXzN8b6ro1xJEq1nnzMF8tZqqjhKpSyMahU7c2/SwlN1KsrRvZWzbdr2SXc/I09nu1dHFydNQqU57iqJVElvQaTUouLaazRT7UmtLVNJ4WGIeRTYyLu5X0WReVY3yIzwquvX9ymvpl8u0fK+0FKXxlUTnJ7178PDofQex8ZKleX5ndZWdtX4X+h6+zkFJtaN3ak2y3oULKyLr7Wo8YkK4JvkydGldHmcWKMjZMy4mi3e8JOFqljQkUtF2ZZUJmn09mPsy3QLMGNN5GR6yMIAAAAAB42cLtXEtzlJu12dvifwS7mfO9pSebWtzJ6t/SaPTrsnUbZPXw/U3OV+ZTUKzXH34snU6ma/leSMD7NiRMptfsZu3Be/IjwrK+vozOTySWveQ3CWGtT1vz6mjE2a4PwuaXKUZvPJ31t+plKWknl36/U6uzr6KypSknkkvr63JNCCeU4LvsmbcQ75pdNX9DyjK/BJeNv3HAcidRyyWnh+pvTd9PfkQ6c8sl9V6G117ZZ9+nlyO9o55JkKzXAzdaL+V+WvnYhSq5WasuGrZphUu+XJ8cvfvh05hIlWUc7eWn7HtHGb17NvxXpbU0qmnJ8kvXu5GutV3L2SR2OpiSTRP+I1Z2t1/YsqGKujnVWb+Z8Ur24LO/21J9PGKKW9xy9/U1qSRTw06rBV99dxo21O1Nnmx6bUW3xPdsRTg09DV3wMkklM5/BUVBuytvO/e7JfRGeJo3T6mFStdRcengZf3WqaM0kmXR0+f/ANQOz1fExoxore3XO63t3VJavpfzHYLstVws3Wrv5tz4cIb7qOKy1eiXJLJHa4n5btL1sRZYm+njp9SqdzjDii2FScuRPhK5t3ehGw7LCKWpliXy6MPh8zyUfeZsUjCb6eIkhFmMVb2zeaPUzpz4XK10yTNsCZRkRUiTh0XQ/UUz8FnhnkbzRhkbz16/0o8+XkAAmRAAANWK/BLuZ882jHNn0aaumuhwW06PzPvM3qY6i+l4znoSSlnoXWCknqVNSCUkydRqcu+5g44bHLSyul1XcZRqK97/AG+pF+JfJfQ1byTtqVyJo27SoqSXzXafS/mVznZrX9OBa0MQn4WS9+RCxFLn3nP3O/szV/cPLW315XfIz397Tzs7fojyEeCdveb5G2pHLJpc/aWRYn0QZ7QknrIybzt0yX0uzCjHdtfPVpL0ZvdeC/I/D1uzkiSFGDaWufE2VKLTuun39BBX/C2rcH4/cKUlG7i+7ULA9ImLxqV7tJPJdeVlxehW1cfOcsmmr6JrxfV+i65GW2d21+PPoU2HoSbtBZvjyV+fV/Q7KXEtrhyR0yxe5TVSSaV1G6s/xZK/Tq+ZN2RtyKlv/Bus43bs1bVpaFRT2XOpub/4Ve3VZf8AVF9TwKSSsv51M79XJS+gtfp6lD6/L/wdjs/GwrQU6butOTT4prgyJt5/JZa5nKUsXPD1ouLe42lNLjd5eX6nV7Sjv01UjfmerR6j3q235Xk8q/0/szWeH4OSo4y0N3prxu+RrpYu8tcuS4cP4NO1qdoylFximndSurPmnyIOzqTVpSlF8bp3T7mcaZf9PHUdDjY/LdfoynxEratp5Fo8XFxS3l0zKjaE0/li03qzPZH5Fb7LDZtbezTv00LiDZT7Lp3zWvrkW6eefmVwj1pKb7N6s+JqqRV+BvVveRrqJPU60cTI3w3e6ZsjSWvEyVMyaXLMhxJuRnSJ1CJDw6LGmkXUx1lFjJeGN5owyN56cPBil5AAJEQAeNgHpx+3qNpy96nWqrF/mXmjn+00FdNPhmVWrYk63jORrwX8fdminV3XbK19Ddi5tcCFVny733GFmxIsoYnO114evvqZJXu7/Z6u7+pBoUd75lm9CfRpWs34lTWssTSRFqXSvZ6t9P2zM4YpVFJcUr2fvmydUw+Tyy4ru9+pzdar8KqraXz7uP0Q4NEuSkWE6mSuvf6GdKg5fido8v24mus19DCjKz4nM7O70W0IpZJskRUVwK/D1m+FkT6TTs+Xv7jjpzcPY1Gn8sSZGnOS4LI9oQXEl1ZWiXVUPyyudq8I43G7NqSk76X5ZepqwuBxMal5qCpXyipJyvnr4KPkXWMk5SSztxWj8zXh6Kvf+03n/lKSdvW4upUotf3/AEy6i1p/3/qLLDUskzO7TPac8r+h7UtfJnk4kjQ22+yr29SUqbTffz8DvqFHdgoXvZWz4nH4mCm40/8AKUV5tHZyZ6v/AJq/U/wYfXS6ivycn2n2O3GahxTt4nIbM2NFJJ022vxbrSknzcXk9D6tUknkyi2psuF3OHyyetsrm+Vf2M9V+LGcvj9lxai45y4Pd3Wlya4lFs/DThUleTd3fPhwOr/8hGL3ZRt1bMauHjP54+hRZDV0XK3s1bJrrjl+vtnQQSa6fQ55Raea8S0wla1k2ZE8eMskt7ROWWT8zGyF0+NnzNGIxO6tSTxkUbHbqjz48eJVvEubyl4E3D4a+pEl+SZha10WdErqVJLQssFC5ooi97M9rRNoxsjYAbzIAAADXWpKSszYACqr7PtoUOOptPPQ7NojV8FGWqK5Q0mpYcFXop5FdWw6vlwR3WI7PRlo7FTiux8n+Go0Z5UMujajnKK3LNc9C1pVVLT3f2jViOyGKV92ad+hXLYOOotSUN9J3aXEKtr4OuafyT9o4iVOMnG7sru2ffkfM9obcjUndcrP9j6zKUZK6TUlm08mu9HL4vszhqv/ACqO5eVpOGSvfO8eGfI7KK+SyHJ9ooMBt9cXlax0GE2lTlmmjXLsNTk7U5PLVO115aol4b+nc/8AJkPa3wdc86ZnTx9PP5lkbHtyEbWV+4mYf+ndtZMsKXYOK4nVVIg7I/cqqfaBtPcp912YYjH4mb+VRST5vQ6ah2OhH8xMh2aguJaoSIc4nDUo4htKq4zhxytK3R80RtrOdHc3a1Rwbtutvhwb5eJ9F/8AXocyNi+y0ZKya8c0V20SnFoup9UoS34KPZWKUkvfcTcRVUVcjQ7GYiEvkrU1Hrvt+Gnqyzj2R3mnWryllnGC3E/FtteGfU81ehu8Z/Jsl6qhvd/g09l8O6tR189yF1C+V5vJ26JX8X0OmqNm3D0YwioRSUUrJLRIylG56/p6VVDijyr7nbPkVlVsh4mpk7l5KgmRq+z1ItaZUj45t3b9VVWvh2irvTllFX6lfsftZVTd4u19GnnfqfXcT2cUuCZU4rsk3okUOEjUrINZhUYbbsJpN5d5J/u46pmqt2KqPRmiXYqutJPmVSqb+CUbEvkl1dsQjFtySsuZQrtD8abhF5L16nlXsXVe9/yJZ2zu7vl6lp2e7NRwzk/xTslJtWUb52S+7IqtIs1stdgUb2dsy+soq5lg9nWgtxZt59CRDYt3eU5a3snZFypKJ2LTXQhdlth6dkY0MLGOiN5fCHEzyloABMiAAAAAAAAAAAAAAARa2z6c3eUE3z4+ZqhsXDptqlFXzlZat6triTwcxElKS8M008LCOkUu5G1I9B0iAAAAAAAAAAAAAAAAAAAAAeWFj0AESts2lJqThmndO71MaWy6Ud60fxS3nm3nln/qsiaDnFEucszTyMUskegHSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=",
  },
  {
    id: 8,
    name: "Hopper",
    type: "cat",
    image: "https://bit.ly/fcc-running-cats",
  },
];

function ExplorePet() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredPets = pets.filter((pet) => {
    const matchesQuery = pet.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab = selectedTab === "all" || pet.type === selectedTab;
    return matchesQuery && matchesTab;
  });

  return (
    <section className="py-16 bg-light-color min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold text-dark-color font-poppins mb-6">
            Explore the Pet
          </h2>
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-color"
            placeholder="Search for a pet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all ${
              selectedTab === "all"
                ? "text-heading bg-[#FF811B]" //
                : "bg-transparent font-poppins border-2 border-heading text-heading px-6 py-2 rounded-lg shadow-md hover:bg-heading hover:text-white transition-all" //
            }`}
            onClick={() => setSelectedTab("all")}
          >
            All
          </button>

          <button
            className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all ${
              selectedTab === "dog"
                ? "text-heading bg-[#FF811B]" // Selected tab: heading color text and orange background
                : "bg-transparent font-poppins border-2 border-heading text-heading px-6 py-2 rounded-lg shadow-md hover:bg-heading hover:text-white transition-all" // Unselected tab: black text, dark background, black border, hover with white text and black background
            }`}
            onClick={() => setSelectedTab("dog")}
          >
            Dogs
          </button>

          <button
            className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all ${
              selectedTab === "cat"
                ? "text-heading bg-[#FF811B]" // Selected tab: heading color text and orange background
                : "bg-transparent font-poppins border-2 border-heading text-heading px-6 py-2 rounded-lg shadow-md hover:bg-heading hover:text-white transition-all" // Unselected tab: black text, dark background, black border, hover with white text and black background
            }`}
            onClick={() => setSelectedTab("cat")}
          >
            Cats
          </button>

          <button
            className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all ${
              selectedTab === "parrot"
                ? "text-heading bg-[#FF811B]" // Selected tab: heading color text and orange background
                : "bg-transparent font-poppins border-2 border-heading text-heading px-6 py-2 rounded-lg shadow-md hover:bg-heading hover:text-white transition-all" // Unselected tab: black text, dark background, black border, hover with white text and black background
            }`}
            onClick={() => setSelectedTab("parrot")}
          >
            Parrots
          </button>
        </div>

        {/* Pet List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => (
              <div key={pet.id} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-dark-color mb-2">
                  {pet.name}
                </h3>
                <p className="text-textColor mb-4 capitalize">
                  Type: {pet.type}
                </p>
                <OrangeBtn>Adopt {pet.name}</OrangeBtn>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-textColor">
              No pets found matching your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ExplorePet;
