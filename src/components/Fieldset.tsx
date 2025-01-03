export default function Fieldset() {
  const handleGetEmploymentStatus = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const employmentStatus = formData.get("employmentStatus") as string
    console.log(employmentStatus)
  }

  return (
    <form onSubmit={handleGetEmploymentStatus}>
      <fieldset className="flex flex-col">
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
