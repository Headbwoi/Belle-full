import { Suspense } from "react"
import CategoryElement from "./CategoryElement"
export interface Category {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface CategoriesResponse {
  categories: Category[]
}

async function getData() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
async function Categories() {
  const data: CategoriesResponse = await getData()
  const res = data.categories

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <section className="px-5 max-w-lg mx-auto pb-40 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5">
          {res.map((category) => (
            <CategoryElement {...category} key={category.idCategory} />
          ))}
        </div>
      </section>
    </Suspense>
  )
}

export default Categories
