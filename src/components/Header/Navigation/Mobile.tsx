import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { menuVariant, navItem } from "@/variants/menuVariant"

type Props = {
  handleMenuToggle: () => void
}

const Mobile = ({ handleMenuToggle }: Props) => {
  const linkArray = ["home", "meals", "saved", "contact us", "blog"]
  return (
    <>
      <motion.div
        className="fixed inset-0 w-full h-screen z-40 bg-bg_light/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      ></motion.div>
      <motion.div
        className="md:hidden absolute h-screen overflow-hidden w-3/4 top-0 right-0  z-50 bg-bg_light"
        initial={{ opacity: 0 }}
        variants={menuVariant}
        whileInView={"show"}
        exit={"exit"}
      >
        <div className="px-6 md:px-10 w-full">
          <div className="absolute right-6 top-6 z-50">
            {/* hamburger */}
            <div
              className="lg:hidden h-5 w-5 relative"
              onClick={handleMenuToggle}
            >
              <Image
                src={"/icons/close.svg"}
                alt="Close Menu Icon"
                aria-label="close mobile menu"
                fill
              />
            </div>
          </div>

          {/* links */}
          <motion.div
            className="flex flex-col justify-center h-screen space-y-7"
            initial={{ opacity: 0 }}
            whileInView={navItem.show}
            exit={navItem.exit}
          >
            {linkArray.map((item, index) => (
              <LinkWrapper
                key={index}
                name={item}
                handleMenuToggle={handleMenuToggle}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Mobile

type linkProp = {
  name: string
  handleMenuToggle: () => void
}

const LinkWrapper = ({ name, handleMenuToggle }: linkProp) => {
  return (
    <Link
      href={`${
        name == "home" || name == "blog" || name == "contact us"
          ? "/"
          : name == "saved"
          ? "/meals/saved"
          : name.toLowerCase().replace(" ", "")
      }`}
      className="text-lg text-white font-sans capitalize w-fit duration-300 font-medium flex items-center gap-3"
      onClick={handleMenuToggle}
    >
      {name}
    </Link>
  )
}
