import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const API = "https://api.giphy.com/v1/gifs/search?q=";
const KEY = "CBCoUOxg2ZFLDRCRYI6rKBdnumF21LcM";

function GifListContainer() {
  const [gifArray, setGifArray] = useState([]);
  const [formData, setFormData] = useState({
    query: "",
  });

  // Function that sends search term to API via Fetch GET
  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ query: "" });
    fetch(`${API}${e.target[0].value}&api_key=${KEY}&rating=g`)
      .then((r) => r.json())
      .then((data) => setGifArray(data.data.slice(0, 3)));
  }

  return (
    <div>
      <GifSearch
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <GifList array={gifArray} />
    </div>
  );
}

export default GifListContainer;
