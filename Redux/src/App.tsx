import React from "react";
import { Card } from "./Components/Cards";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/NavBar/navbar";
import { Provider } from "react-redux";
import {Store} from "../src/store"; // Importe o store que você configurou

function App() {
  return (
    <Provider store={Store}> 
      <div>
        <Navbar />
        <Card />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
