"use client"
import Image from "next/image"
import useMediaQuery from "@/hooks/useMediaQuery"
import { motion } from "framer-motion"

function ImageComponent() {
  const matches = useMediaQuery("(max-width: 768px)")

  return (
    <div className="w-full max-w-[41.6875rem] relative mb-[5.5rem] mt-10 md:mt-0">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/beer.jpg"
          alt="hero-image"
          height={matches ? 365.88 : 660}
          width={matches ? 345 : 412}
          className="relative z-30"
        />
      </motion.div>
    </div>
  )
}

export default ImageComponent
