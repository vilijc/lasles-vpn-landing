import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="px-4 py-4 lg:px-20 lg:py-12">
      <div className="px-14">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
 