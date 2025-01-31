import {create} from 'zustand'
import { Ingredients } from '../types/Ingredients.types'

type StoreIngredientsType = {
  ingredients: Ingredients[]
  storeIngredient: (newIngredient: Ingredients[]) => void
}

export const useStoreIngredient = create<StoreIngredientsType>((set) => ({
  ingredients: [],
  storeIngredient: (newIngredient: Ingredients[]) => set((state) => ({ 
    ingredients: [...state.ingredients, ...newIngredient]
  })),
}))