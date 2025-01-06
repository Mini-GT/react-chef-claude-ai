export default function Fieldset() {
  const handleGetEmploymentStatus = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const employmentStatus = formData.get("employmentStatus") as string
    const dietaryStatus = formData.getAll("dietaryStatus") as string[] // use .getAll to get all values
    console.log(employmentStatus)
    console.log(dietaryStatus)
  }

  return (
    <form onSubmit={handleGetEmploymentStatus}>
      <fieldset className="flex flex-col my-5">
        <legend>Employment Status:</legend>
        <label>
          <input type="radio" name="employmentStatus" value="Unemployed" />
          Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="Part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="Full-time" />
            Full-time
        </label>
      </fieldset>

      <fieldset className="flex flex-col my-5">
        <legend>Dietary:</legend>
        <label>
          <input type="checkbox" name="dietaryStatus" value="kosher" />
          Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryStatus" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryStatus" value="gluten-free" />
            Gluten-Free
        </label>
      </fieldset>

      <button 
        className="tablet:text-xl bg-[#141413] text-white h-full px-2 py-1 rounded-md text-xs text-nowrap border border-black" 
        type="submit" 
        aria-label="Status"
      >
        Get Data
      </button>
    </form>
  )
}
