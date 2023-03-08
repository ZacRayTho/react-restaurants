import Land from "./pages/Land";
import Menu from "./pages/Menu"
// import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<>
            <div className="">
              <Land />
            </div></>}></Route>

          <Route path="/menu" element={
            <div className="">
              <Menu />
            </div>}></Route>

          <Route path="/contact" element={<>
            <div className="">
              {/* insert page here */}
            </div>
          </>}></Route>

          <Route path="/projects" element={
            <div className="">
              {/* insert page here */}
            </div>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
