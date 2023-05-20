"use client"
import { getMealDetails, saveMeal } from "@/app/redux/features/mealSlice"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { Loader } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function MealsDetails({ params }: { params: { slug: number } }) {
  const [mealFinalData, setmealFinalData] = useState<any>([])
  const [saveContent, setSaveContent] = useState("Save Meal")
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { loading, meals, message } = useAppSelector((state) => state.meals)

  // @ts-ignore
  const mealData = meals?.meals

  // console.log(params.slug)

  useEffect(() => {
    scrollTo({ behavior: "smooth", left: 0, top: 0 })
  }, [])

  useEffect(() => {
    dispatch(getMealDetails(params.slug))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug])

  useEffect(() => {
    if (mealData && mealData !== undefined) {
      // console.log(mealData[0])
      setmealFinalData(mealData[0])
    }
  }, [mealData])

  // console.log(mealFinalData)

  let arr = []
  for (const [key, value] of Object.entries(mealFinalData)) {
    if (key.includes("strIngredient") && value !== "") {
      // console.log(key, value)
      arr.push({ value })
    }
  }

  const steps = mealFinalData?.strInstructions
    ?.split(/\./)
    .filter((step: string) => step !== "")

  // console.log(steps)

  const handleSave = () => {
    dispatch(saveMeal(mealFinalData))
    setTimeout(() => {
      setSaveContent("Save Meal")
    }, 1000)
    setSaveContent("saved")
  }

  if (loading) {
    return <Loader scale={29} size={"xl"} />
  }

  if (message !== "") {
    alert(message)
  }

  return (
    <>
      <div className="px-5 container pt-20 pb-60">
        <header className="text-text my-10 text-xl uppercase text-center font-sans">
          Meal Details
        </header>

        <div className="py-14">
          <button
            className="text-white flex items-center gap-4 font-com"
            onClick={() => router.back()}
          >
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.78939 1.39312C9.05185 1.65566 9.19929 2.01169 9.19929 2.38292C9.19929 2.75415 9.05185 3.11018 8.78939 3.37272L4.17919 7.98292L8.78939 12.5931C8.92311 12.7223 9.02976 12.8767 9.10314 13.0475C9.17651 13.2184 9.21513 13.4021 9.21674 13.588C9.21836 13.7738 9.18294 13.9582 9.11254 14.1303C9.04215 14.3023 8.9382 14.4586 8.80675 14.5901C8.6753 14.7215 8.51898 14.8255 8.34693 14.8959C8.17487 14.9663 7.99052 15.0017 7.80463 15.0001C7.61874 14.9985 7.43503 14.9598 7.26423 14.8865C7.09342 14.8131 6.93894 14.7064 6.80979 14.5727L1.20979 8.97272C0.947335 8.71018 0.799893 8.35415 0.799893 7.98292C0.799893 7.61169 0.947335 7.25566 1.20979 6.99312L6.80979 1.39312C7.07233 1.13066 7.42836 0.983215 7.79959 0.983215C8.17082 0.983215 8.52685 1.13066 8.78939 1.39312V1.39312Z"
                fill="#fff"
              />
            </svg>

            <p>Go Back</p>
          </button>
        </div>

        <div className="flex items-start flex-col lg:flex-row gap-20">
          {/* image */}
          <div className="w-full h-[25.125rem] md:w-[30.4375rem] relative">
            {mealFinalData?.strMealThumb ? (
              <Image
                src={`${mealFinalData?.strMealThumb}`}
                alt={mealFinalData?.strMeal}
                fill
                className="object-center object-fill"
              />
            ) : (
              <div>Loading....</div>
            )}
          </div>

          {/* info */}

          <div className="w-full space-y-5 md:w-[25.4375rem]">
            <header className="text-white uppercase text-2xl font-com">
              {mealFinalData?.strMeal}
            </header>

            <div className="flex items-center flex-wrap gap-7 text-white">
              {mealFinalData?.strTags
                ?.split(",")
                .map((item: any, index: number) =>
                  item ? (
                    <p
                      key={item + index}
                      className="bg-yellow_text p-2 rounded-md text-black text-sm font-sans"
                    >
                      {item}
                    </p>
                  ) : null
                )}
            </div>

            {/* ingredients */}

            <div className="space-y-2">
              <header className="text-text uppercase text-xl font-com">
                ingredients
              </header>
              <div className="flex items-center flex-wrap gap-3">
                {arr.map((ingredient, index) =>
                  ingredient.value ? (
                    <div
                      className="px-2 py-0.5 flex items-center gap-1 text-white border border-text w-fit"
                      key={(ingredient.value as string) + index}
                    >
                      <p className="w-full text-sm font-sans">
                        {/* @ts-ignore */}
                        {ingredient.value ? ingredient.value.split(" ")[0] : ""}
                      </p>
                      <p className="w-full text-sm font-sans">
                        {/* @ts-ignore */}
                        {ingredient.value ? ingredient.value.split(" ")[1] : ""}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* instructions */}

            <div className="space-y-2">
              <header className="text-text uppercase text-xl font-com">
                instructions
              </header>
              {/* loop here o */}
              <ol>
                {steps?.map((step: string, index: number) => (
                  <li key={step} className="text-white py-1 font-sans">
                    {index + 1}. {step}. <br />
                  </li>
                ))}
              </ol>
            </div>

            {/* save meals */}
            <div>
              <button
                className="bg-yellow_text outline-none px-5 py-3 text-hero_bg font-com rounded-md"
                onClick={handleSave}
              >
                {saveContent}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
