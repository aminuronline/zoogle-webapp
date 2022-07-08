import { BaseImage, remixImageLoader } from "remix-image";
import tiger from "~/images/tiger.png";

const AnimalResult = ({ animal }: any) => {
  return (
    <>
      <header>
        <section className="name">
          <img src={tiger} alt="An icon of a Tiger" />
          <h1>ZooSite</h1>
        </section>
        <nav>
          <ul>
            <li>
              <a href="https://mail.google.com">About</a>
            </li>
            <li>
              <a href="#top">Other Animals</a>
            </li>
            <li>
              <a href="#top">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="title">
        <section className="head">
          <h2>The animal you searched for:</h2>
        </section>

        <section className="side">
          <main>
            <h2 className="animal-name">{animal.name}</h2>

            <BaseImage
              loaderUrl="/api/image"
              loader={remixImageLoader}
              src={animal.image_link}
              alt={animal.name}
              responsive={[
                {
                  size: {
                    width: 600,
                    height: 400,
                  },
                  maxWidth: 700,
                },
              ]}
              dprVariants={[1, 3]}
              options={{
                width: 600,
                height: 400,
                position: "top",
                crop: null,
              }}
            />
            <h3>About This Animal</h3>
            <section className="animal-description">
              <p>
                The {animal.name} has the latin name <b>{animal.latin_name}</b>.
              </p>
              <p>
                It has its main habitat in the <b>{animal.habitat}</b>. With a
                diet consisting mainly of {animal.diet}.
              </p>
              <p>
                With a life span of roughly {animal.lifespan} years, the
                {animal.name} is a {animal.animal_type} mainly found in{" "}
                <b>{animal.geo_range}</b>.
              </p>
            </section>
          </main>

          <aside>
            <h3>More Facts</h3>
            <ul>
              <li>
                <b>Class:</b> {animal.animal_type}
              </li>
              <li>
                <b>Lifespan:</b> {animal.lifespan} years
              </li>
              <li>
                <b>Active time:</b> {animal.active_time}
              </li>
              <li>
                <b>Habitat:</b> {animal.habitat}
              </li>
              <li>
                <b>Main diet:</b> {animal.diet}
              </li>
              <li>
                <b>Weight:</b> {animal.weight_min}-{animal.weight_max} lbs
              </li>
              <li>
                <b>Mainly found in:</b> {animal.geo_range}
              </li>
              <li>
                <b>Size:</b> {animal.length_min}-{animal.length_max} feet in
                length
              </li>
            </ul>
          </aside>
        </section>
        <button>
          <a
            href={`https://en.wikipedia.org/wiki/${animal.name.replaceAll(
              " ",
              "_"
            )}`}
            rel="noreferrer"
            target="_blank"
          >
            <i>Find</i> <u>out</u> <b>more</b>{" "}
          </a>
        </button>
      </section>
    </>
  );
};

export default AnimalResult;
