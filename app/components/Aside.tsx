import { BaseImage, remixImageLoader } from "remix-image";

const Aside = ({ animal }: any) => {
  console.log(animal.image_link);
  return (
    <>
      <aside>
        <article>
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
              /** Width of resulting image. */
              width: 600,
              /** Height of resulting image. If width is present, this take priority. */
              height: 400,
              /** The content type of the resulting image. (optional, default source type) */

              /** How the image should be resized to fit both provided dimensions. (optional, default 'contain') */
              // fit: "ImageFit",
              /** Position to use when fit is cover or contain. (optional, default 'center') */
              position: "top",
              /** Background color of resulting image. (optional, default [0x00, 0x00, 0x00, 0x00]) */

              /** Quality, integer 1-100. (optional, default 80) */

              /** zlib compression level, 0-9. (optional, default 9) */

              /** Number of animation iterations, use 0 for infinite animation. (optional, default 0) */

              /** Delay between animation frames (in milliseconds). (optional, default 100) */

              /** The location to crop the source image before any other operations are applied. (optional, default null) */
              crop: null,
            }}
          />
          <section className="spacing">
            <h3>{animal.name}</h3>

            <p>
              The {animal.name} has the latin name <b>{animal.latin_name}</b>
            </p>
          </section>
        </article>
      </aside>
    </>
  );
};

export default Aside;
