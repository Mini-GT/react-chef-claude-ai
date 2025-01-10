

export default function IngredientsList({newIngredients}: {newIngredients: JSX.Element[]}) {
  return (
    <div className="">
      <h1 className="tablet:text-4xl tablet:mb-8 text-xl font-bold mb-4">Ingredients on hand:</h1>
      <ul className="tablet:text-2xl text-[#475467] list-container list-disc list-inside text-sm ml-2">
        {newIngredients}
      </ul>
    </div> 
  )
}
