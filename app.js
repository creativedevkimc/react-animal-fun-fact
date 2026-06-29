import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const title = "";
function displayFact(e) {
  const animal = e.target.alt;

  const randomIndex = Math.floor(Math.random() * animals[animal].facts.length);

  const fact = animals[animal].facts[randomIndex];

  document.getElementById("fact").innerHTML = fact;
}

const background = (
  <div>
    <img className="background" alt="ocean" src="/images/ocean.jpg" />
  </div>
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const showBackground = true;
const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);
