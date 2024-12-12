export default function Main() {
  return (
    <main className="laptop:mx-20 tablet:mx-10 mx-4">
      <div className="tablet:my-12 my-6 flex items-center gap-4">
        <input className="tablet:p-2 tablet:w-[50%] py-1 h-full w-full border border-[#6B7280] rounded-md" type="text" id="search" name="search" placeholder="e.g. oregano" />
        <button className="tablet:text-xl bg-[#141413] text-white h-full px-2 py-1 rounded-md text-xs text-nowrap border border-black" type="submit" aria-label="Search">+ Add ingredient</button>
      </div>

      <div className="">
        <h1 className="tablet:text-4xl tablet:mb-8 text-xl font-bold mb-4">Ingredients on hand:</h1>
        <ul className="tablet:text-2xl list-container list-disc list-inside text-sm ml-2">
          <li>Chicken breasts</li>
          <li>Most of the main spices</li>
          <li>Olive oil</li>
          <li>Heavy cream</li>
          <li>Chicken broth</li>
          <li>Parmesan cheese</li>
          <li>Spinach</li>
        </ul>
      </div>
    </main>
  )
}
