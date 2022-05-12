import React from "react";

function GifSearch({ formData, setFormData, handleSubmit }) {
  function handleChange(e) {
    setFormData({ query: e.target.value });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Enter a Search Term:
        <input
          type="text"
          className="form-control"
          name="query"
          onChange={handleChange}
          value={formData.query}
        />
      </label>
      <input type="submit" value="Find Gifs" />
    </form>
  );
}

export default GifSearch;
