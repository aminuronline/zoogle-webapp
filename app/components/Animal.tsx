import React from "react";
import { Link } from "@remix-run/react";

function getDescription(animal: any) {
  return animal
    ? `The ${animal.name} has its main habitat in the ${animal.habitat}. With a diet consisting mainly of ${animal.diet}.  And a life span of roughly ${animal.lifespan} years`
    : "";
}

const Animal = ({ animal }: any) => {
  return (
    <>
      <Link to={`/animal/${animal.id}`}>
        <h3>{animal.name}</h3>
      </Link>

      <p>{getDescription(animal)}</p>
    </>
  );
};

export default Animal;
