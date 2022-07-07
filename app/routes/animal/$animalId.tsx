import { Results } from "~/components/Results";
import stylesUrl from "../styles/results.css";
import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAnimals } from "~/models/animals.server";
import { useLoaderData, useSearchParams } from "@remix-run/react";
// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylesUrl },
// ];

// export const loader: LoaderFunction = async ({ request }) => {
//   const url = new URL(request.url);
//   const term = url.searchParams.get("q");

//   const animals = getAnimals(term ?? "");
//   if (animals.length > 15) {
//     return json(animals.slice(0, 15));
//   }
//   return json(animals);
// };

export default function Result() {
  // const [searchParams] = useSearchParams();
  // const [query] = searchParams.getAll("q");
  // const animals = useLoaderData();
  // console.log(animals, query);
  // return <Results query={query} animals={animals} />;
  return <p>hi</p>;
}
