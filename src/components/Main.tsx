import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([])

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const search = formData.get("search") as string
    setIngredients((prev) => [...prev, search]);
  }

  const newIngredients = ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
  
  return (
    <main className="laptop:mx-20 tablet:mx-10 mx-4">
      <form className="tablet:my-12 my-6 flex items-center gap-4" onSubmit={handleSearch}>
        <input className="tablet:p-2 tablet:w-[50%] py-1 h-full w-full border border-[#6B7280] rounded-md" type="text" id="search" name="search" placeholder="e.g. oregano" aria-label="Add ingredient" />
        <button className="tablet:text-xl bg-[#141413] text-white h-full px-2 py-1 rounded-md text-xs text-nowrap border border-black" type="submit" aria-label="Search">+ Add ingredient</button>
      </form>

      <div className="">
        <h1 className="tablet:text-4xl tablet:mb-8 text-xl font-bold mb-4">Ingredients on hand:</h1>
        <ul className="tablet:text-2xl list-container list-disc list-inside text-sm ml-2">
          {newIngredients}
        </ul>
      </div>
    </main>
  )
}
