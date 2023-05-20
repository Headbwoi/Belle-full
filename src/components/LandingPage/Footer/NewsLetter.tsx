import Button from "../../Button/Button"

function NewsLetter() {
  return (
    <div className="py-16 bg-bg_light flex items-center justify-center flex-col w-full md:w-[90%] -mt-[17rem] md:-mt-[39rem] mx-auto px-5 md:px-20 lg:px-40 mb-32">
      <div className="space-y-6 text-center">
        <div className="w-fit mx-auto">
          <p className="text-xl md:text-2xl font-com font-bold text-white">
            Newsletter
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
        </div>

        <header
          className="text-6xl font-com font-semibold text-yellow_text"
          aria-label="heading"
          role={"heading"}
          aria-level={9}
        >
          Subscribe to Our Newsletter
        </header>

        <p className="font-sans font-normal text-sm md:text-base text-text">
          And never miss latest Updates!
        </p>
      </div>

      <div className="mt-16 w-full">
        <form>
          <div className="flex items-center w-full gap-10 flex-col md:flex-row">
            <input
              type={"email"}
              className="h-14 w-full border border-white outline-none px-5 bg-transparent hover:border-2 cursor-pointer"
              placeholder="Email Address"
            />
            <Button content="Subscribe" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
