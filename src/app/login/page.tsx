import Google from "@/components/Icons/Google"
import React from "react"
import Image from "next/image"

function LoginPage() {
  return (
    <div className="relative flex lg:items-center bg-signup_bg w-full min-h-screen">
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-white to-signup_bg z-20 opacity-60"></div>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row w-full h-full">
        <div className="relative lg:flex-[50%] h-80 lg:h-[26rem] w-full">
          <Image src={"/auth/img.png"} alt="Image bulaba" fill />
        </div>

        <div className="lg:bg-white pt-10 px-6 relative z-30">
          <button className="w-full h-12 bg-black text-white text-lg outline-none ">
            Sign up with email
          </button>

          <p className="text-white text-center py-2">
            ------ or use social to sign up -------
          </p>
          <div className="flex flex-col gap-5">
            <button className="w-full h-12 bg-white text-hero_bg text-lg outline-none flex items-center justify-center gap-5">
              <Google />
              <p> Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
