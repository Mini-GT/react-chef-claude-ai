import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Recommends from "./components/Recommends"
import { useStoreIngredient } from "./store/ingredient.store"

function App() {
  const ingredients = useStoreIngredient((state) => state.ingredients)
  console.log(ingredients)
  return (
    <div className="bg-[#FAFAF8] h-screen">
      <Header />
      <Main />
      {ingredients.length > 3 ? <Footer /> : null}
      <Recommends />
    </div>
  )
}

export default App
