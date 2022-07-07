import type { MetaFunction } from "@remix-run/node";
import styles from "~/styles/shared.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import remixImageStyles from "remix-image/remix-image.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Zoogle App",
  viewport: "width=device-width,initial-scale=1",
});
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: remixImageStyles },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
