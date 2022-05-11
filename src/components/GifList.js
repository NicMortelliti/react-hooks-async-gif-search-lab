import React from "react";

function GifList({ array }) {
  return (
    <ul>
      {array.map((image) => {
        return (
          <li key={image.id}>
            <img src={image.images.original.url} alt={image.title} />
          </li>
        );
      })}
    </ul>
  );
}

export default GifList;
