"use client"

import Image from "next/image"
import { easeInOut, motion } from "framer-motion"

function Video() {
  return (
    <motion.div
      className="w-full relative h-[30rem] lg:h-[35rem] max-w-full"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2, ease: easeInOut },
      }}
      viewport={{ once: true }}
    >
      <Image
        src={"/images/video.webp"}
        alt="video "
        fill
        className="object-cover"
      />
    </motion.div>
  )
}

export default Video
