import ImageComponent from "./ImageComponent"
import Misc from "./Misc"
import TextComponent from "./TextComponent"

function HeroSection() {
  return (
    <section className="flex items-center flex-col lg:flex-row  bg-hero_bg pt-36 md:px-10 lg:px-14 xl:pt-48 pb-40 relative">
      <div className="container px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-32 xl:gap-44">
        {/* text */}
        <TextComponent />
        {/* image */}
        <ImageComponent />
      </div>
      <Misc />
    </section>
  )
}

export default HeroSection
