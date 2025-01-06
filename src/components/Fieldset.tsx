export default function Fieldset() {
  const handleGetEmploymentStatus = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const employmentStatus = formData.get("employmentStatus") as string
    const dietaryStatus = formData.getAll("dietaryStatus") as string[] // use .getAll to get all values
    const favColor = formData.get("favColor") as string
    console.log(employmentStatus)
    console.log(dietaryStatus)
    console.log(favColor)
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

      <label htmlFor="favColor">What is your favorite color?</label>
      <select 
        className="block mb-5 border-2 border-black" 
        id="favColor"
        name="favColor"
        defaultValue=""
        required // forces user to select an option
      >
        <option value="" disabled>-- Choose a color --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

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
