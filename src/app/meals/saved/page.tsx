"use client"
import { deleteSavedMeal, getSavedMeals } from "@/app/redux/features/mealSlice"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { Loader } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect } from "react"

export default function SavedMeals() {
  const { loading, savedMeals } = useAppSelector((state) => state.meals)
  const dispatch = useAppDispatch()

  let meals

  useEffect(() => {
    // const meals = JSON.stringify(localStorage.getItem("savedMeals"))

    dispatch(getSavedMeals())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (savedMeals) {
    // @ts-ignore
    meals = savedMeals[0] as unknown as string[]
  }

  if (loading) {
    return <Loader scale={29} size={"xl"} />
  }
  return (
    <div className="px-5 container pt-20 min-h-screen">
      <header className="text-text my-10 text-xl uppercase text-center">
        Saved Meals
      </header>

      <div className="py-10">
        <div className="text-white">
          {loading ? (
            <div>Loading ...</div>
          ) : !meals || meals.length == 0 ? (
            <div>No saved meals</div>
          ) : (
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 w-full">
              {meals?.map((meal: any, index) => (
                <div
                  className="min-h-[12rem] w-full border border-text p-1 relative space-y-4 group"
                  key={meal.idMeal + "-" + index}
                >
                  <Link href={`meals/details/${meal.idMeal}`}>
                    <div className="h-40 w-full relative">
                      <Image
                        src={meal.strMealThumb}
                        alt={meal.idMeal + meal.strMealThumb}
                        fill
                        className="object-fill object-center"
                      />
                    </div>

                    <p className="text-text px-5 py-2">{meal.strMeal}</p>
                  </Link>
                  <button
                    className="absolute bottom-4 right-2 md:hidden group-hover:block"
                    onClick={() => dispatch(deleteSavedMeal(meal.idMeal))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width={20}
                      height={20}
                    >
                      <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
