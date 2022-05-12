import React from "react";

function GifList({ array }) {
  return (
    <ul>
      {array.map((image) => {
        return (
          <li key={image.id} className="list-group-item">
            <img className="rounded mx-auto d-block" width="350px" src={image.images.original.url} alt={image.title} />
          </li>
        );
      })}
    </ul>
  );
}

export default GifList;
