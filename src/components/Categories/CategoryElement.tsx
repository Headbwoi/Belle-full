"use client"

import { useState } from "react"
import { Category } from "."
import { useAppDispatch } from "@/redux/hooks"
import { searchMealsByCategory } from "@/redux/slices/mealSlice"

function CategoryElement(category: Category) {
  const dispatch = useAppDispatch()
  const [active, setActive] = useState(false)

  const handleSearchByCategory = async (categoryName: string) => {
    dispatch(searchMealsByCategory(categoryName))
    setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 1000)
  }

  return (
    <button
      className={`bg-category hover:bg-selected h-12 grid place-items-center rounded-md cursor-pointer text-white font-com ${
        active ? "bg-selected" : "bg-category"
      }`}
      key={category.idCategory}
      onClick={() => handleSearchByCategory(category.strCategory)}
    >
      {category.strCategory}
    </button>
  )
}

export default CategoryElement
