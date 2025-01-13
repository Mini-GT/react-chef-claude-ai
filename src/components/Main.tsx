import { useEffect, useState } from "react";
import { useStoreIngredient } from "../store/ingredient.store";
import { Ingredients } from "../types/Ingredients.types";
import IngredientsList from "./IngredientsList";
// import Fieldset from "./Fieldset";


export default function Main() {
  const [ingredients, setIngredients] = useState<Ingredients[]>([])
  const storeIngredient = useStoreIngredient((state) => state.storeIngredient)

  useEffect(() => {
    storeIngredient(ingredients)
  }, [ingredients, storeIngredient])
  // const addIngredient = (formData: FormData) => {
  //   const newIngredient = formData.get("ingredient") as string
  //   console.log(newIngredient)
  //   if(!newIngredient) {
  //     throw Error("Ingredient empty")
  //   }

  //   setIngredients(prevIngredient => [...prevIngredient, newIngredient])
  // }

  // refactor to use form action instead onSubmit attribute:
  const handleAddIngredient = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const addNewIngredient = formData.get("ingredient") as string
    setIngredients((prevIngredients) => [...prevIngredients, { name: addNewIngredient }]);
  }

  const newIngredients = ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)

  return (
    <main className="laptop:mx-20 tablet:mx-10 mx-4">
      <form 
        className="tablet:my-12 my-6 flex items-center gap-4"
        // this FORM ACTION is for React 19 only and React Vite is still using React 18
        //action={addIngredient}
        onSubmit={handleAddIngredient}
      >
        <input 
          className="tablet:p-2 tablet:w-[50%] py-1 h-full w-full border border-[#6B7280] rounded-md" 
          type="text" id="search" 
          name="ingredient" 
          placeholder="e.g. oregano" 
          aria-label="Add ingredient" 
        />

        <button 
          className="tablet:text-xl bg-[#141413] text-white h-full px-2 py-1 rounded-md text-xs text-nowrap border border-black" 
          type="submit" 
          aria-label="Search"
        >
          + Add ingredient
        </button>
      </form>

      {ingredients.length > 0 ? <IngredientsList newIngredients={newIngredients} /> : null}

      {/* <Fieldset /> */}
    </main>
  )
}
