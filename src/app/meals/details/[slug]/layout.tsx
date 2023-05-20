export const metadata = {
  title: "Meal - Belle Full",
  description: "Meal Application, A key to fine dining",
}

export default function MealDetailslayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen ">{children}</div>
    </>
  )
}
