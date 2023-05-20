"use client"

import useMediaQuery from "@/hooks/useMediaQuery"

function Misc() {
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <div className="absolute bottom-40 right-5 flex items-center flex-col gap-4">
        <div className="h-14 w-[1px] bg-gradient-to-b from-yellow_text to-white"></div>
        <p className="text-yellow_text font-bold font-com">SCROLL</p>
      </div>
    </>
  )
}

export default Misc
