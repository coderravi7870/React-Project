import { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav";

import AboutContainer from "./Component/AboutContainer";
import ContectContainer from "./Component/ContentContainer";
import HomeContainet from "./Component/HomeContainer";

function App() {
  const [item, setItem] = useState("Home");
  return (
    <>
      <Nav selectItem={item} setItem={setItem} />
      {item === "Home" && <HomeContainet />}
      {item === "About" && <AboutContainer />}
      {item === "Contact" && <ContectContainer />}
    </>
  );
}

export default App;
