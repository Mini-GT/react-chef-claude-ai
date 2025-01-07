import {create} from 'zustand'

type Ingredients = {
  ingredients: string[]
  storeIngredient: (newIngredient: string) => void
}

export const useStoreIngredient = create<Ingredients>((set) => ({
  ingredients: [],
  storeIngredient: (newIngredient: string) => set((state) => ({ ingredients: [...state.ingredients, newIngredient] })),
}))