"use client"
import { useAppSelector } from "@/redux/hooks"
import { Loader } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"

type MEAL_PROPS = {
  strMealThumb: string
  strMeal: string
  idMeal: number
}

function MealImages() {
  const { meals, loading, message } = useAppSelector((state) => state.meals)

  if (loading) {
    return <Loader scale={29} size={"xl"} />
  }
  if (message && message !== "") {
    return <div>failed....</div>
  }

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20 lg:pt-5 pb-60 max-w-4xl mx-auto px-5 w-full min-h-[16rem]">
        {/* @ts-ignore */}
        {
          // @ts-ignore
          meals?.meals?.map((meal: MEAL_PROPS, index: number) => (
            <div
              className="min-h-[5rem] w-full border border-text p-1 relative space-y-4"
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

                <p className="text-text px-5 py-2 font-sans">{meal.strMeal}</p>
              </Link>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default MealImages
