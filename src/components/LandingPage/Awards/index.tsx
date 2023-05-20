"use client"
import Plaque from "./Plaque"
import { AwardsInfo } from "./Awards"
import Image from "next/image"
import AwardImage from "./AwardImage"
import { AnimatePresence, motion } from "framer-motion"

function AwardAndRecognition() {
  return (
    <>
      <section
        className={`flex items-center flex-col lg:flex-row bg-[url(/images/about-image.jpg)] py-32 px-5 md:px-10 lg:px-14 relative lg:h-[53.1875rem] overflow-hidden`}
      >
        <div className="container flex items-center flex-col lg:flex-row gap-28">
          <div className="absolute top-10 left-5 lg:left-10 w-20 h-20 md:w-36 md:h-36">
            <Plaque />
          </div>

          <div className="flex items-center flex-col gap-16 md:pt-10">
            {/* header */}
            <motion.div
              className="space-y-2 w-full"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl font-com font-bold text-white">
                Awards & recognition
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
              <h6 className="text-6xl font-com font-semibold text-yellow_text">
                Our Laurels
              </h6>
            </motion.div>

            {/* exhibits */}
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 w-full gap-8"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                    staggerChildren: 0.2,
                  },
                }}
                viewport={{ once: true }}
              >
                {AwardsInfo.map((award, index) => (
                  <motion.div
                    className="flex items-center gap-8 w-full"
                    key={award.name}
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.2 },
                    }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={`/images/${index}.png`}
                      alt={award.name + "image"}
                      width={69}
                      height={69}
                    />
                    <div className="space-y-2 w-full">
                      <p className="text-yellow_text font-com font-bold text-lg md:text-xl">
                        {award.name}
                      </p>
                      <p className="text-sm font-sans font-normal text-text">
                        {award.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex h-full">
            <AwardImage />
          </div>
        </div>
      </section>
    </>
  )
}

export default AwardAndRecognition
