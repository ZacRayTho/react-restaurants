import Land from "./pages/Land";
import Menu from "./pages/Menu"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart";

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Cart cart={cart} setCart={setCart}/>

      <Router>
        <Routes>

          <Route path="/" element={<>
            <div className="">
              <Land />
            </div></>}></Route>

          <Route path="/menu" element={
            <div className="">
              <Menu cart={cart} setCart={setCart}/>
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
