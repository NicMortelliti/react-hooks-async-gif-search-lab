import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API = "https://api.giphy.com/v1/gifs/search?q=";
const KEY = "CBCoUOxg2ZFLDRCRYI6rKBdnumF21LcM";

function GifListContainer() {
  const [gifArray, setGifArray] = useState([]);

  // Function that sends search term to API via Fetch GET
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    fetch(`${API}${e}&api_key=${KEY}&rating=g`)
      .then((r) => r.json())
      .then((data) => setGifArray(data.data.slice(0, 3)));
  }

  return (
    <div>
      <GifList array={gifArray} />
      <GifSearch handleSubmit={handleSubmit} />
    </div>
  );
}

export default GifListContainer;
