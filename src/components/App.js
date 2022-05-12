import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

function App() {
  return (
    <div>
      <NavBar title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
