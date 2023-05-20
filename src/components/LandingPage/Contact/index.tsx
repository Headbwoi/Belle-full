"use client"
import ContactImage from "./ContactImage"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section
      className={`flex items-center flex-col lg:flex-row bg-[url(/images/about-image.jpg)] py-32 px-5 md:px-10 lg:px-14 relative lg:h-[53.1875rem] gap-28 xl:gap-[7.5rem] overflow-hidden`}
    >
      <div className="flex items-center gap-20 justify-center flex-col md:flex-row container">
        <motion.div
          className="space-y-16 w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          {/* header */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-com font-bold text-white">
              Contact
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
            <header
              className="text-6xl font-com font-semibold text-yellow_text"
              aria-label="heading"
              role={"heading"}
              aria-level={8}
            >
              What we believe in
            </header>
          </div>
          {/* text */}
          <div className=" space-y-8">
            <div>
              <p className="font-sans font-normal text-text text-sm md:text-base">
                Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
              </p>
            </div>
            <div className="space-y-4">
              <header className="text-lg md:text-2xl font-com text-bold text-yellow_text ">
                Opening Hours
              </header>
              <p className="font-sans font-normal text-text text-sm md:text-base">
                Mon - Fri: 10:00 am - 02:00 am
              </p>
              <p className="font-sans font-normal text-text text-sm md:text-base">
                Sat - Sun: 10:00 am - 03:00 am
              </p>
            </div>
          </div>
        </motion.div>

        <ContactImage />
      </div>
    </section>
  )
}

export default Contact
