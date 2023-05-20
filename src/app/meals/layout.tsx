import Header from "@/components/Header/Header"

export const metadata = {
  title: "Meal - Belle Full",
  description: "Meal Application, A key to fine dining",
}

export default function Meallayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
