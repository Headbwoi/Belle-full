"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Desktop from "./Navigation/Desktop"
import Mobile from "./Navigation/Mobile"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => {
    isOpen === true ? setIsOpen(!isOpen) : setIsOpen(!isOpen)
  }
  useEffect(() => {
    const body = document.querySelector("body")

    isOpen === true
      ? body?.classList.add("no-scroll")
      : body?.classList.remove("no-scroll")
  }, [isOpen])

  return (
    <header className="flex items-center justify-center  w-full h-20 -mb-[1px] fixed top-0 left-0 z-50 shadow-lg px-6 md:px-10 lg:px-14 backdrop-blur-md bg-black">
      <nav className=" w-full flex items-center justify-between">
        {/* icon */}
        <Link href={"/"}>
          <motion.p
            className="text-white font-bold font-com text-3xl md:text-5xl"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 0.3 } }}
          >
            Belle Full
          </motion.p>
        </Link>

        {/* desktop link */}
        <div className="hidden md:flex items-center space-x-8">
          <Desktop />
        </div>

        <div className="flex items-center gap-2">
          {/* login */}
          <motion.div
            className="items-center gap-6 hidden lg:flex"
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
          >
            <Link
              href={"/login"}
              className="text-sm hover:text-white/80  text-white font-sans capitalize w-fit duration-300 font-medium tracking-wide cursor-pointer"
            >
              Login / Registration
            </Link>
            <span className="w-[1px] h-10 bg-white/50 block"></span>
            <Link
              href={"/login"}
              className="text-sm hover:text-white/80  text-white font-sans capitalize w-fit duration-300 font-medium tracking-wide cup"
            >
              Book Table
            </Link>
          </motion.div>

          {/* hamburger */}
          <motion.div
            className="md:hidden w-10 h-5 relative"
            onClick={handleMenuToggle}
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
          >
            <Image
              src={"/icons/hamburger.svg"}
              fill
              alt="Open Menu Icon"
              aria-label="open mobile menu"
            />
          </motion.div>
        </div>

        {/* mobile menu */}
        <AnimatePresence
          initial={false}
          mode={"wait"}
          onExitComplete={() => null}
        >
          {isOpen && <Mobile handleMenuToggle={handleMenuToggle} />}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
