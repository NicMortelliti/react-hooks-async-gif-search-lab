import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API = "https://api.giphy.com/v1/gifs/search?q=";
const KEY = "CBCoUOxg2ZFLDRCRYI6rKBdnumF21LcM";

function GifListContainer() {
  const [gifArray, setGifArray] = useState([]);
  const query = "dolphin";

  useEffect(() => {
    fetch(`${API}${query}&api_key=${KEY}&rating=g`)
      .then((r) => r.json())
      .then((data) => setGifArray(data.data.slice(0, 3)));
  }, []);

  function handleSubmit() {
    console.log("Called handleSubmit in GifListContainer");
  }

  return (
    <div>
      <GifList array={gifArray} />
      <GifSearch handleSubmit={handleSubmit} />
    </div>
  );
}

export default GifListContainer;
