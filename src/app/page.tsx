import dynamic from "next/dynamic"
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection"
const AboutSection = dynamic(
  () => import("@/components/LandingPage/About/AboutSection")
)
const MealMenuSection = dynamic(
  () => import("@/components/LandingPage/MealMenu/MealMenuSection")
)
const ChefsWord = dynamic(
  () => import("@/components/LandingPage/ChefsWord/ChefsWord")
)
const Video = dynamic(() => import("@/components/LandingPage/Video"))
const AwardAndRecognition = dynamic(
  () => import("@/components/LandingPage/Awards")
)
const PhotoGallery = dynamic(() => import("@/components/LandingPage/Gallery"))
const Contact = dynamic(() => import("@/components/LandingPage/Contact"))
import Space from "@/components/common/Space"
import Footer from "@/components/LandingPage/Footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MealMenuSection />
      <ChefsWord />
      <Video />
      <AwardAndRecognition />
      <PhotoGallery />
      <Contact />
      <Space />
      <Footer />
    </>
  )
}
