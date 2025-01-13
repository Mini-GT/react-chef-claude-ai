import { useStoreResponseIngredient } from '../store/responseIngredient.store'

export default function Recommends() {
  const {responseIngredient} = useStoreResponseIngredient((state) => state)
  return (
    <section>
      <p>{responseIngredient}</p>
    </section>
  )
}

{/* <section className="laptop:mx-20 tablet:mx-10 mx-4">
      <h2 className="tablet:text-4xl tablet:mb-8 tablet:my-9 text-xl font-bold mb-4">Chef Claude Recommends:</h2>
      <article 
        className="suggested-recipe-container text-[#475467]" 
        aria-live="polite"
      >
        <p 
          className="tablet:text-2xl text-sm ml-2"
        >
          Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
        </p>
        <h3 className="tablet:text-4xl tablet:mb-8 tablet:my-9 text-xl font-bold mb-4">Beef Bolognese Pasta</h3>
        <h3 className="tablet:text-2xl tablet:mb-4 tablet:my-9 text-xl font-bold mb-4">Ingredients:</h3>
        <ul 
        className="tablet:text-2xl list-container list-disc list-inside text-sm ml-2"
        >
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
        <h3 className="tablet:text-2xl tablet:mb-4 tablet:my-9 text-xl font-bold mb-4">Instructions:</h3>
        <ol className="tablet:text-2xl list-decimal list-inside text-sm ml-4">
          <li className="">Bring a large pot of salted water to a boil for the pasta.</li>
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
    </section> */}