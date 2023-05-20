"use client"
import Image from "next/image"
import useMediaQuery from "@/hooks/useMediaQuery"
import { motion } from "framer-motion"

function ImageComponent() {
  const matches = useMediaQuery("(max-width: 768px)")

  return (
    <motion.div
      className="w-full max-w-[41.6875rem] relative mb-[5.5rem] mt-10 md:mt-0"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.4 },
      }}
      viewport={{ once: true }}
    >
      <div className="w-full">
        <Image
          src="/images/hero-image.jpg"
          alt="hero-image"
          height={matches ? 365.88 : 587}
          width={matches ? 345 : 619}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="relative z-30"
        />
      </div>
      <div className="w-60 md:w-[20.1875rem] h-60 md:h-[20.1875rem] bg-yellow_text -top-4 -right-4 md:right-8 lg:-right-4 absolute z-10"></div>
      <div className="w-60 md:w-[20.1875rem] h-60 md:h-[20.1875rem] bg-yellow_text absolute -bottom-4 -left-4 z-10"></div>
    </motion.div>
  )
}

export default ImageComponent
