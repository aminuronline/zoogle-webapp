import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import Animal from "~/components/Animal";
import { getAnimal } from "~/models/animals.server";
import { useLoaderData } from "@remix-run/react";
import stylesUrl from "~/styles/animal.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader: LoaderFunction = ({ params }) => {
  const animalId = params?.animalId ?? "";
  const animal = getAnimal(animalId);
  return animal;
};

export default function AnimalRoute() {
  const animal = useLoaderData();
  console.log(animal);
  return <Animal animal={animal} />;
}
