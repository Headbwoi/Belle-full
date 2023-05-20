"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { searchMealsByName, setSearchQuery } from "@/redux/slices/mealSlice"
import { ChangeEvent } from "react"
function Search() {
  const dispatch = useAppDispatch()
  const { searchQuery } = useAppSelector((state) => state.meals)

  // console.log(searchQuery)

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value))
    dispatch(searchMealsByName(e.target.value))
  }

  return (
    <section className="pt-24 pb-20 px-5 max-w-lg mx-auto">
      <input
        type="search"
        placeholder="Search"
        className="h-12 w-full bg-transparent px-5 outline-none ring-1 ring-text rounded-md my-4 text-white"
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
      />
      <p className="text-text">Search meals or select from categories below</p>
    </section>
  )
}

export default Search
