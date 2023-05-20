import Link from "next/link"

type ButtonProps = {
  link?: string
  content: string
}

function Button({ link, content }: ButtonProps) {
  return (
    <>
      <Link
        href={`${link == undefined ? "" : `${link}`}`}
        className="bg-yellow_text w-fit h-11 px-8 text-hero_bg font-com font-bold grid place-items-center hover:bg-transparent hover:text-white hover:ring-1 hover:ring-yellow_text duration-300"
        aria-label={link == undefined ? "go to Home" : link}
        role="navigation"
      >
        {content}
      </Link>
    </>
  )
}

export default Button
