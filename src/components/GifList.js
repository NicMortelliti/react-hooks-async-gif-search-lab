import React from "react";

function GifList({ array }) {
  return (
    <ul className="list-group list-group-flush w-50 mx-auto">
      {array.map((image) => {
        return (
          <li key={image.id} className="list-group-item">
            <img
              className="rounded mx-auto d-block border border-5 border-secondary shadow-lg p-3 m-3"
              width="350px"
              src={image.images.original.url}
              alt={image.title}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default GifList;
