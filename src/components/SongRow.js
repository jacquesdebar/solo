import React from "react";

const NewRow = props => {
  return (
    <tr>
      <td>{props.item.artist}</td>
      <td>{props.item.title}</td>
      <td>{props.item.genre}</td>
      <td>{props.item.art}</td>
    </tr>
  );
};

export default NewRow;
