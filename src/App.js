import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ButtonMoins from "./components/ButtonMoins";
import Reset from "./components/Reset";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header />
      <div className="button">
        <ButtonMoins counter={counter} setCounter={setCounter} />
        <p
          style={{
            backgroundColor: "rgb(92, 71, 210)",
            color: "white",
            fontSize: "50px",
            width: "70px",
            textAlign: "center",
          }}
        >
          {counter}
        </p>

        <Button counter={counter} setCounter={setCounter} />
      </div>
      <div class="reset">
        <Reset counter={counter} setCounter={setCounter} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
