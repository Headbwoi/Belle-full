import Image from "next/image"

function ImageComp() {
  return (
    <div className="relative z-10 w-10 h-72 md:w-20 md:h-[30rem] lg:w-60 lg:h-[43.9375rem] rotate-90 md:rotate-0 ">
      <Image
        src={"/images/knife.webp"}
        alt="Chef's Knife"
        fill
        className="w-full h-full"
      />
    </div>
  )
}

export default ImageComp
