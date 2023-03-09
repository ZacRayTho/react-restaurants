import Land from "./pages/Land";
import Menu from "./pages/Menu"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart";

function App() {

  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState("All")

  //this function checks time and sets filter state to appropriate filter (breakfast, Lunch, dinner)
  useEffect(function checkTime() {
    const time = new Date();
    const hour = time.getHours()
    console.log("useEffect in app")
    console.log(hour)
    switch (true) {
      case (hour < 10): setFilter("Breakfast")
        break;
      case (hour < 14): setFilter("Lunch")
        break;
      case (hour < 22): setFilter("Dinner")
        break;
      default: setFilter("All")
        break;
    }
    
  }, [])

  return (
    <div className="App">
      <Cart cart={cart} setCart={setCart} />

      <Router>
        <Routes>

          <Route path="/" element={<>
            <div className="">
              <Land />
            </div></>}></Route>

          <Route path="/menu" element={
            <div className="">
              <Menu cart={cart} setCart={setCart} filter={filter} setFilter={setFilter} />
            </div>}></Route>

          <Route path="/specials" element={<>
            <div className="">
              {/* insert page here */}
            </div>
          </>}></Route>

          <Route path="/checkout" element={
            <div className="">
              <Checkout />
            </div>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
