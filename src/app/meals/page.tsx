import Categories from "@/components/Categories"
import MealImages from "@/components/LandingPage/MealImages"
import Search from "@/components/Search"

export default function Meals() {
  return (
    <>
      <div className="min-h-screen">
        <Search />
        {/* @ts-expect-error Async Server Component */}
        <Categories />
        <MealImages />
      </div>
    </>
  )
}
