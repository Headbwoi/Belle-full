import Link from "next/link"

type Props = {
  name: string
}

const LinkWrapper = ({ name }: Props) => {
  return (
    <Link
      href={`${
        name == "home" ||
        name == "landing" ||
        name == "blog" ||
        name == "contact us"
          ? "/"
          : name == "saved"
          ? "/meals/saved"
          : name.toLowerCase().replace(" ", "")
      }`}
      className="text-sm hover:text-white/80  text-white font-sans capitalize w-fit duration-300 font-medium tracking-wide"
    >
      {name}
    </Link>
  )
}

export default LinkWrapper
