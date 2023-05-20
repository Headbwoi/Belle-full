import Image from "next/image"
import useMediaQuery from "@/hooks/useMediaQuery"
import { motion } from "framer-motion"

function ContactImage() {
  const matches = useMediaQuery("(max-width: 768px)")

  return (
    <div className="w-full max-w-[41.6875rem] relative mb-[5.5rem] mt-10 md:mt-0">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/contact.jpg"
          alt="hero-image"
          height={matches ? 365.88 : 667}
          width={matches ? 345 : 634}
          className="relative z-30"
        />
      </motion.div>
      <motion.div
        className="w-60 md:w-[20.1875rem] h-60 md:h-[20.1875rem] bg-yellow_text -top-4 -right-4 absolute z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        className="w-60 md:w-[20.1875rem] h-60 md:h-[20.1875rem] bg-yellow_text absolute -bottom-4 -left-4 z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  )
}

export default ContactImage
