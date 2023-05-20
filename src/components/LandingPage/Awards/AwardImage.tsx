"use client"
import Image from "next/image"
import useMediaQuery from "@/hooks/useMediaQuery"

function AwardImage() {
  const matches = useMediaQuery("(max-width: 768px)")

  return (
    <div className="w-full h-full max-w-[41.6875rem] relative mb-[5.5rem] mt-10 md:mt-0">
      <div className="w-full">
        <Image
          src="/images/award-image.jpg"
          alt="hero-image"
          height={matches ? 365.88 : 670}
          width={matches ? 345 : 634}
          className="relative z-30"
        />
      </div>
    </div>
  )
}

export default AwardImage
