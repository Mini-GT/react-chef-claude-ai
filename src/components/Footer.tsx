export default function Footer() {
  return (
    <footer className="laptop:mt-40 laptop:mx-20 tablet:mx-10 bg-[#F0EFEB] rounded-md mx-4 mt-10">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="text-xs">
          <h1 className="tablet:text-xl mb-2 text-sm font-bold">Ready for a recipe?</h1>
          <p className="tablet:text-xl text-[#6B7280]">Generate a recipe from your list of ingredients.</p>
        </div>
        <div>
          <button className="tablet:text-xl text-nowrap text-xs bg-[#D17557] px-2 py-2 rounded-md">Get a recipe</button>
        </div>
      </div>
    </footer>
  )
}
