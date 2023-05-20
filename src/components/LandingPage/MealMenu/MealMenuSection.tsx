"use client"
import Divider from "../../common/Divider"
import ImageComponent from "./ImageComponent"
import Button from "../../Button/Button"
import { motion } from "framer-motion"
import { wineandbeer } from "@/constants/wineandbeer"
import { cocktails } from "@/constants/cocktails"

function MealMenuSection() {
  return (
    <section className="flex items-center flex-col bg-hero_bg py-32 md:px-10 lg:px-14 relative">
      <div className="space-y-6 mb-16 ">
        <motion.p
          className="font-com font-bold text-white text-xl md:text-2xl capitalize"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          Menu that fits your palatte
        </motion.p>
        <motion.h4
          className="text-6xl font-com font-semibold text-yellow_text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          viewport={{ once: true }}
        >
          Today&apos;s Special
        </motion.h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 container">
        {/* wine and beer  */}

        <div className="space-y-12">
          <motion.header
            className="font-com font-semibold text-white text-5xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            Wine & Beer
          </motion.header>

          {/* wine and beer list */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <>
              {wineandbeer.map((value, index) => (
                <div className="flex flex-col" key={value.name}>
                  <div className="flex gap-8 items-center">
                    <p className="text-lg md:text-xl font-com font-bold text-yellow_text w-24 sm:w-32 md:w-[12rem]">
                      {value.name}
                    </p>
                    <Divider num={index} />
                    <p className="text-lg md:text-2xl font-com font-bold text-white">
                      ${value.price}
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <>
                      {value.tags.split(",").map((item, index) => (
                        <p
                          className="font-sans font-normal text-sm text-text"
                          key={item}
                        >
                          {item}
                          {index - 1 ? <span className="px-1">|</span> : ""}
                        </p>
                      ))}
                    </>
                  </div>
                </div>
              ))}
            </>
          </motion.div>
        </div>

        {/* image */}
        <ImageComponent />

        {/* cocktails */}
        <div className="space-y-12">
          <motion.header
            className="font-com font-semibold text-white text-5xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            Cocktails
          </motion.header>

          {/* cocktails list */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <>
              {cocktails.map((value, index) => (
                <div className="flex flex-col" key={value.name}>
                  <div className="flex gap-8 items-center">
                    <p className="text-lg md:text-xl font-com font-bold text-yellow_text w-24 sm:w-32 md:w-[12rem]">
                      {value.name}
                    </p>
                    <Divider num={index} />
                    <p className="text-lg md:text-2xl font-com font-bold text-white">
                      ${value.price}
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <>
                      {value.tags.split(",").map((item, index) => (
                        <p
                          className="font-sans font-normal text-sm text-text border-r border-text px-1.5 last:border-0"
                          key={item}
                        >
                          {item}
                        </p>
                      ))}
                    </>
                  </div>
                </div>
              ))}
            </>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 container w-fit mx-auto">
        <Button content="View More" />
      </div>
    </section>
  )
}

export default MealMenuSection
