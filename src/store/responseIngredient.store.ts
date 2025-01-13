import {create} from 'zustand'

type StoreResponseIngredientsType = {
  responseIngredient: string | undefined
  storeResponseIngredient: (responseIngredient: string | undefined) => void
}

export const useStoreResponseIngredient = create<StoreResponseIngredientsType>((set) => ({
  responseIngredient: "",
  storeResponseIngredient: (responseIngredient: string | undefined) => set((state) => ({responseIngredient: state.responseIngredient = responseIngredient})),
}))