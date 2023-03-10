import Land from "./pages/Land";
import Menu from "./pages/Menu"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart";
import Specials from "./pages/Specials";
import axios from "axios";

function App() {
  const [food, setFood] = useState([])
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState("All")

  function apiCall() {
    let options = {
      baseURL: "https://www.jsonkeeper.com/b/MDXW",
      params: {}
    }
    axios.get('/', options)
      .then(function (response) {
        // console.log(response.data);
        setFood([...response.data])
      })
      .catch(function (error) {
        console.log("FAILURE HERE " + error);

      })
  }

  function checkTime() {
    const time = new Date();
    const hour = time.getHours()
    // console.log("useEffect in app")
    // console.log(hour)
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

  }

  function localCart() {
    if (localStorage.getItem("cart") === null) {
      return;
    }
    else {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }
  //this function checks time and sets filter state to appropriate filter (breakfast, Lunch, dinner)
  useEffect(() => {
    checkTime(); 
    apiCall();
    localCart();
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
              <Menu cart={cart} setCart={setCart} filter={filter} setFilter={setFilter} food={food} setFood={setFood} />
            </div>}></Route>

          <Route path="/specials" element={<>
            <div className="">
              <Specials food={food} setCart={setCart} cart={cart}/>
            </div>
          </>}></Route>

          <Route path="/checkout" element={
            <div className="">
              <Checkout cart={cart} setCart={setCart}/>
            </div>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
