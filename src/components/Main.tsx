import { useState } from "react";
import { useStoreIngredient } from "../store/ingredient.store";
// import Fieldset from "./Fieldset";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const storeIngredient = useStoreIngredient((state) => state.storeIngredient)
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
    storeIngredient(addNewIngredient)
    setIngredients((prevIngredients) => [...prevIngredients, addNewIngredient]);
  }

  const newIngredients = ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)

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

      <div className="">
        {ingredients.length > 0 ? <h1 className="tablet:text-4xl tablet:mb-8 text-xl font-bold mb-4">Ingredients on hand:</h1> : null}
        <ul className="tablet:text-2xl list-container list-disc list-inside text-sm ml-2">
          {newIngredients}
        </ul>
      </div>

      {/* <Fieldset /> */}
    </main>
  )
}
