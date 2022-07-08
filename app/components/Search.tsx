import zoogleLogo from "~/images/zoogle-logo.png";
import { Form } from "@remix-run/react";
import { Footer } from "./Footer";
export const Search = () => {
  return (
    <>
      <section className="content search">
        <header>
          <nav>
            <ul>
              <li>
                <a href="https://about.google.com">About</a>
              </li>
              <li>
                <a href="https://store.google.com">Store</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <a href="https://mail.google.com/">Gmail</a>
              </li>
              <li>
                <a href="https://www.google.co.uk/images">Images</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <img src={zoogleLogo} alt="zoogle logo" />
          <Form method="get" action="/results">
            <input
              name="q"
              type="search"
              placeholder="Search for your favourite animal"
            />
            <button type="submit">Zoogle Search</button>
          </Form>
        </main>
      </section>
      <Footer />
    </>
  );
};
