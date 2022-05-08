import React from "react";
import firebase from "./utils/Firebase";
import "firebase/compat/auth";

function App() {
  firebase.auth().onAuthStateChanged(currentUser => {
    console.log(currentUser ? "Estamos Logeados" : "No estamos Logeados");
  });

  console.log("Hola mundo")
  return (
    <div className="App">
      <h1>App Electron + React</h1>
    </div>
  );
}

export default App;
