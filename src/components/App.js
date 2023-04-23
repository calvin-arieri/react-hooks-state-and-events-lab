import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // const [mode_type, setMode] = useState("false")
  var [click_button, setClick] =useState(0)

  function changeMode() {
    setClick(click_button ++);

  }

  // this will be used for the Dark Mode Toggle feature
  const appClass = ( click_button%2 === 0 ) ? "App dark" : "App light"
  console.log(appClass)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{( click_button%2 === 0) ? "Dark" : "Light" } Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
