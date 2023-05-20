"use client"
import Image from "next/image"
import Button from "../../Button/Button"
import ImageComp from "./ImageComponent"
import { motion } from "framer-motion"

function Left() {
  return (
    <motion.div
      className="space-y-8 text-right max-w-[32.6875rem] relative z-10 flex items-end flex-col justify-end"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, delay: 0.5 },
      }}
      viewport={{ once: true }}
    >
      <header className="space-y-2 flex justify-end flex-col">
        <h2 className="font-com font-semibold text-6xl text-yellow_text">
          About Us
        </h2>
        <div className="ml-auto ">
          <svg
            width="40"
            height="9"
            viewBox="0 0 40 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_248)">
              <path
                d="M6.49841 0C2.91507 0 0 2.01871 0 4.50005C0 6.98139 2.91507 9 6.49841 9C9.8878 9 12.6779 7.19363 12.97 4.8982H17.6471V5.8448L40 5.8448V3.15554L17.647 3.15554V4.10202H12.9699C12.6777 1.80648 9.8878 0 6.49841 0ZM18.5102 3.95161L39.1367 3.95161V5.04839H18.5102V3.95161ZM12.1338 4.50005C12.1338 6.54222 9.60563 8.2036 6.49829 8.2036C3.39095 8.2036 0.862811 6.54222 0.862811 4.50005C0.862811 2.45778 3.39095 0.796295 6.49829 0.796295C9.60563 0.796295 12.1338 2.45778 12.1338 4.50005Z"
                fill="#DCCA87"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_248">
                <rect width="40" height="9" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </header>
      <p className="font-regular font-sans text-sm md:text-base text-text ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <Button content="Know More" />
    </motion.div>
  )
}

function Right() {
  return (
    <motion.div
      className="space-y-8 max-w-[32.6875rem] relative z-10"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, delay: 0.5 },
      }}
      viewport={{ once: true }}
    >
      <header className="space-y-2">
        <h3 className="font-com font-semibold text-6xl text-yellow_text">
          Our History
        </h3>
        <div className="ml-auto ">
          <svg
            width="40"
            height="9"
            viewBox="0 0 40 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5016 9C37.0849 9 40 6.98129 40 4.49995C40 2.01861 37.0849 0 33.5016 0C30.1122 0 27.3221 1.80637 27.03 4.1018H22.3529V3.1552L0 3.1552V5.84446L22.353 5.84446V4.89798H27.0301C27.3223 7.19352 30.1122 9 33.5016 9ZM21.4898 5.04839L0.863293 5.04839V3.95161L21.4898 3.95161V5.04839ZM27.8662 4.49995C27.8662 2.45778 30.3944 0.796403 33.5017 0.796403C36.6091 0.796403 39.1372 2.45778 39.1372 4.49995C39.1372 6.54222 36.6091 8.2037 33.5017 8.2037C30.3944 8.2037 27.8662 6.54222 27.8662 4.49995Z"
              fill="#DCCA87"
            />
          </svg>
        </div>
      </header>
      <p className="font-regular font-sans text-sm md:text-base text-text ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <Button content="Know More" />
    </motion.div>
  )
}

function AboutSection() {
  return (
    <section
      className={`flex items-center flex-col lg:flex-row  bg-[url(/images/about-image.jpg)] py-32 md:px-10 lg:px-14 relative min-h-[59.9375rem]`}
    >
      <div className="min-h-[43.9375rem] w-full flex flex-col items-center justify-center lg:flex-row px-5 gap-[5.3125rem] container">
        <>
          <Left />
          <ImageComp />
          <Right />
        </>
      </div>

      <Image
        src={"/images/G.png"}
        height={415}
        width={391}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      />
    </section>
  )
}

export default AboutSection
