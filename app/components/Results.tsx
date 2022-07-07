import zoogleLogo from "~/images/zoogle-logo.png";
import { Form } from "@remix-run/react";
import Animal from "./Animal";
import Aside from "./Aside";
import { Footer } from "./Footer";
export const Results = ({ query, animals }: any) => {
  return (
    <>
      <section className="content result">
        <header>
          <a href="./">
            <img src={zoogleLogo} alt="" />
          </a>
          <Form method="get">
            <input name="q" type="search" id="search" />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#999999"
              >
                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z" />
              </svg>
            </button>
          </Form>
        </header>
        <section className="wrapper">
          <main>
            <section className="animals-list">
              {!query
                ? "Please enter an animal to search"
                : animals.length
                ? animals.map((animal: any) => {
                    return <Animal key={animal.id} animal={animal} />;
                  })
                : `No animals found for query: ${query}`}
            </section>
          </main>

          {query && animals.length ? <Aside animal={animals[0]} /> : null}
        </section>
      </section>
      <Footer />
    </>
  );
};
