import React from "react";
import "./ListItem.css";
const ListItem = ({ listItem, removeItem, id }) => {
  return (
    <>
      <div className="listItem">
        <p>{listItem}</p>
        <div>
          <button
            onClick={() => {
              console.log(id);
              removeItem(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ListItem;
