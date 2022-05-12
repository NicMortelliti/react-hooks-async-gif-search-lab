import React from "react";

function GifSearch({ formData, setFormData, handleSubmit }) {
  function handleChange(e) {
    setFormData({ query: e.target.value });
  }

  return (
    <form className="mx-auto mt-4 w-25" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
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
