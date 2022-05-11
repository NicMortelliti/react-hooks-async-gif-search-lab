import React, { useEffect, useState } from "react";

const API = "https://api.giphy.com/v1/gifs/search?q=";
const KEY = "CBCoUOxg2ZFLDRCRYI6rKBdnumF21LcM";

function GifListContainer() {
  const query = "dolphin";

  useEffect(() => {
    fetch(`${API}${query}&api_key=${KEY}&rating=g`)
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return <p>GifListContainer</p>;
}

export default GifListContainer;
