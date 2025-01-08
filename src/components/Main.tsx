import { useEffect, useState } from "react";
import { useStoreIngredient } from "../store/ingredient.store";
// import Fieldset from "./Fieldset";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>(['beefs', 'onion', 'garlic', 'tomato', 'pasta'])
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

      <section>
        <h2>Chef Claude Recommends:</h2>
        <article 
          className="suggested-recipe-container text-[#475467]" 
          aria-live="polite"
        >
            <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
                <li>1 lb. ground beef</li>
                <li>1 onion, diced</li>
                <li>3 cloves garlic, minced</li>
                <li>2 tablespoons tomato paste</li>
                <li>1 (28 oz) can crushed tomatoes</li>
                <li>1 cup beef broth</li>
                <li>1 teaspoon dried oregano</li>
                <li>1 teaspoon dried basil</li>
                <li>Salt and pepper to taste</li>
                <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
                <li>Bring a large pot of salted water to a boil for the pasta.</li>
                <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                <li>Stir in the tomato paste and cook for 1 minute.</li>
                <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
            </ol>
        </article>
    </section>
      {/* <Fieldset /> */}
    </main>
  )
}
