import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

const API = "https://api.giphy.com/v1/gifs/search?q=";
const KEY = "CBCoUOxg2ZFLDRCRYI6rKBdnumF21LcM";

function App() {
  // const fetchGifs = () => {
  //   fetch(`${API}${query}&api_key=${KEY}&rating=g`);
  // };

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
