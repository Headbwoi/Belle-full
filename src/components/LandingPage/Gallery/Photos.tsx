"use client"
import Image from "next/image"
import { Carousel } from "@mantine/carousel"
import { motion } from "framer-motion"
function Photos() {
  return (
    // <MantineProvider withGlobalStyles withNormalizeCSS>
    <motion.div
      className="w-full flex items-center justify-end gap-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2 },
      }}
      viewport={{ once: true }}
    >
      <Carousel
        slideSize="70%"
        height={384}
        slideGap="xl"
        loop
        withControls={false}
      >
        {new Array(Number(4)).fill(0).map((item, index) => (
          <Carousel.Slide
            key={index}
            className="w-20 md:w-24 h-96 relative mr-5"
          >
            <Image src={`/gallery/${index}.jpg`} alt={item + "image"} fill />
          </Carousel.Slide>
        ))}
      </Carousel>
    </motion.div>

    // </MantineProvider>
  )
}

export default Photos
