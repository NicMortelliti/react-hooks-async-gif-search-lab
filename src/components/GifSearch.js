import React from "react";

function GifSearch({ formData, setFormData, handleSubmit }) {
  function handleChange(e) {
    setFormData({ query: e.target.value });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a Search Term"
          onChange={handleChange}
          value={formData.query}
        />
        <button className="btn btn-success" type="submit">
          Find Gifs
        </button>
      </div>
    </form>
  );
}

export default GifSearch;
