import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { toast } from "react-hot-toast"

// Define a type for the slice state
interface MealState {
  searchQuery: string
  category: string
  meals: {
    strMealThumb: string
    strMeal: string
    idMeal: number
  }[]
  message: string
  loading: boolean
  savedMeals: []
}

// Define the initial state using that type
const initialState: MealState = {
  searchQuery: "",
  category: "",
  meals: [],
  message: "",
  loading: false,
  savedMeals: [],
}

export const searchMealsByName = createAsyncThunk(
  "searchMealsByName",
  async (mealname: string, thunkAPI) => {
    try {
      const info = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname}`
      )
      const res = await info.json()

      return res
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const searchMealsByCategory = createAsyncThunk(
  "searchMealsByCategory",
  async (categoryName: string, thunkAPI) => {
    try {
      const info = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      )
      const res = await info.json()

      return res
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getMealDetails = createAsyncThunk(
  "getmealDetails",
  async (mealID: number, thunkAPI) => {
    try {
      const info = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
      )
      const res = await info.json()

      return res
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const saveMeal = createAsyncThunk("saveMeal", (meal: any, thunkAPI) => {
  // console.log(meal)
  const savedMeals = JSON.parse(`${localStorage.getItem("savedMeals")}`)

  try {
    if (savedMeals == null) {
      const savedMeals = [meal]
      localStorage.setItem("savedMeals", JSON.stringify(savedMeals))
    }
    if (savedMeals != null) {
      const checkIfItExists = savedMeals.some(
        (meals: any) => meals.idMeal === meal.idMeal
      )
      // console.log(checkIfItExists)
      if (checkIfItExists) {
        // state.message = "meal already exists"
        return
      }
      const newSavedMeals = [...savedMeals, meal]
      localStorage.setItem("savedMeals", JSON.stringify(newSavedMeals))
      // console.log(newSavedMeals)
      // toast.success("meal saved")
    }
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getSavedMeals = createAsyncThunk(
  "getSacedMeals",
  (_, thunkAPI) => {
    try {
      const meals = JSON.parse(`${localStorage.getItem("savedMeals")}`)
      return meals
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const mealSlice = createSlice({
  name: "meal",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    deleteSavedMeal: (state, action: PayloadAction<number>) => {
      const savedMeals = JSON.parse(`${localStorage.getItem("savedMeals")}`)
      if (savedMeals != null) {
        state.loading = true
        const filteredMeals = savedMeals.filter(
          (meal: any) => meal.idMeal !== action.payload
        )
        localStorage.setItem("savedMeals", JSON.stringify(filteredMeals))
        state.savedMeals = [filteredMeals] as any
        state.loading = false
      }
    },
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMealsByName.pending, (state) => {
        state.loading = true
      })
      .addCase(searchMealsByName.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.loading = false
        state.meals = action.payload
      })
      .addCase(
        searchMealsByName.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false
          state.message = action.payload as string
        }
      )
      .addCase(searchMealsByCategory.pending, (state) => {
        state.loading = true
      })
      .addCase(searchMealsByCategory.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.loading = false
        state.meals = action.payload
      })
      .addCase(
        searchMealsByCategory.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false
          state.message = action.payload as string
        }
      )
      .addCase(getMealDetails.pending, (state) => {
        state.loading = true
      })
      .addCase(getMealDetails.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.loading = false
        state.meals = action.payload
      })
      .addCase(
        getMealDetails.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false
          state.message = action.payload as string
        }
      )
      .addCase(saveMeal.pending, (state) => {
        state.loading = true
      })
      .addCase(saveMeal.rejected, (state, action) => {
        state.loading = false
        state.message = action.payload as string
      })

      .addCase(saveMeal.fulfilled, (state, action) => {
        state.message = ""
        state.savedMeals = action.payload as any
        state.loading = false
      })
      .addCase(getSavedMeals.pending, (state) => {
        state.loading = true
      })
      .addCase(getSavedMeals.rejected, (state, action) => {
        state.loading = false
        state.message = action.payload as any
      })
      .addCase(getSavedMeals.fulfilled, (state, action) => {
        state.loading = false
        state.message = ""
        state.savedMeals = [action.payload] as any
      })
  },
})

export const { setSearchQuery, deleteSavedMeal, reset } = mealSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.meals

export default mealSlice.reducer
