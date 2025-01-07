export default function Fieldset() {
  const handleStatus = (event: React.FormEvent<HTMLFormElement>) => {
    // this code is better if there are a lot of form input
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const dietaryStatus = formData.getAll("dietaryStatus") as string[]
    // .fromEntries() takes all the values in our inputs but doesnt take an array in our checkbox so we 
    // have to combine with .formData.getAll() then copies the data into a new object and adds the 
    // dietaryStatus object to update the new Data object
    const newData = {
      ...data,
      dietaryStatus
    }
    console.log(newData)

    // -- this code is not good if there are a lot of form input--
    // event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const employmentStatus = formData.get("employmentStatus") as string
    // const dietaryStatus = formData.getAll("dietaryStatus") as string[] // use .getAll to get all values
    // const favColor = formData.get("favColor") as string
    // console.log(employmentStatus)
    // console.log(dietaryStatus)
    // console.log(favColor)
  }

  return (
    <form onSubmit={handleStatus}>
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
