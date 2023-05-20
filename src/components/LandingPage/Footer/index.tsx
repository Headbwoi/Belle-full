import FooterInfo from "./FooterInfo"
import NewsLetter from "./NewsLetter"

function Footer() {
  return (
    <section
      className={`flex items-center flex-col lg:flex-row  bg-[url(/images/about-image.jpg)] pt-32 md:pt-[30rem] pb-32 md:px-10 lg:px-14 relative min-h-[22.9375rem]`}
    >
      <div className="container">
        <NewsLetter />
        <FooterInfo />

        <div className="mt-16">
          <p className="text-center text-text font-sans font-normal">
            2021 Gerícht. All Rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
