import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { useStoreIngredient } from "./store/ingredient.store"

function App() {
  const ingredients = useStoreIngredient((state) => state.ingredients)
  console.log(ingredients.length)
  return (
    <div className="bg-[#FAFAF8] h-screen">
      <Header />
      <Main />
      {ingredients.length > 0 ? <Footer /> : null}
    </div>
  )
}

export default App
