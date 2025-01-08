import {create} from 'zustand'

type RecipeShown = {
  isRecipeShown: boolean
  storeIsRecipeShown: () => void
}

export const useStoreIsRecipeShown = create<RecipeShown>((set) => ({
  isRecipeShown: false,
  storeIsRecipeShown: () => set((state) => ({ isRecipeShown: !state.isRecipeShown })),
}))