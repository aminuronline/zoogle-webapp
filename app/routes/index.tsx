import { Search } from "~/components/Search";
import stylesUrl from "../styles/search.css";
import type { LinksFunction } from "@remix-run/node";
export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/assets/search.svg",
    as: "image",
    type: "image/svg+xml",
  },
  { rel: "stylesheet", href: stylesUrl },
];

export default function Index() {
  return <Search />;
}
