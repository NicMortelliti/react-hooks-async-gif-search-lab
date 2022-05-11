import React, { useState } from "react";

function GifSearch(handleSubmit) {
  const [formData, setFormData] = useState({
    query: "",
  });

  function handleChange(e) {
    setFormData(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, formData.query)}>
      <label>
        Enter a Search Term:
        <input
          type="text"
          name="query"
          onChange={(e) => handleChange(e)}
          value={formData.query}
        />
      </label>
      <input type="submit" value="Find Gifs" />
    </form>
  );
}

export default GifSearch;
