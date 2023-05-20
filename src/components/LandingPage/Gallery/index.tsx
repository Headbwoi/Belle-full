import Button from "../../Button/Button"
import Photos from "./Photos"

function PhotoGallery() {
  return (
    <section className="min-h-[32rem] bg-[url(/images/gallery.webp)] py-11 flex items-center overflow-x-hidden w-full">
      <div className="flex flex-col md:flex-row px-5 md:px-10 lg:px-14 gap-10 md:gap-16 xl:gap-24 w-full relative container">
        {/* texts */}
        <div className="md:min-w-[30.6875rem] space-y-6 w-full">
          <div className="space-y-2 w-full">
            <p className="text-xl md:text-2xl font-com font-bold text-white">
              Instagram
            </p>
            <svg
              width="40"
              height="10"
              viewBox="0 0 40 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5016 9.5C37.0849 9.5 40 7.48129 40 4.99995C40 2.51861 37.0849 0.5 33.5016 0.5C30.1122 0.5 27.3221 2.30637 27.03 4.6018H22.3529V3.6552L0 3.6552V6.34446L22.353 6.34446V5.39798H27.0301C27.3223 7.69352 30.1122 9.5 33.5016 9.5ZM21.4898 5.54839L0.863293 5.54839V4.45161H21.4898V5.54839ZM27.8662 4.99995C27.8662 2.95778 30.3944 1.2964 33.5017 1.2964C36.6091 1.2964 39.1372 2.95778 39.1372 4.99995C39.1372 7.04222 36.6091 8.7037 33.5017 8.7037C30.3944 8.7037 27.8662 7.04222 27.8662 4.99995Z"
                fill="#DCCA87"
              />
            </svg>
            <div
              role={"heading"}
              aria-level={7}
              className="text-6xl font-com font-semibold text-yellow_text"
            >
              Photo Gallery
            </div>
          </div>

          <p className="font-sans text-text text-sm md:text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>

          <Button content="View More" />
        </div>

        {/* gallery */}
        <Photos />
      </div>
    </section>
  )
}

export default PhotoGallery
