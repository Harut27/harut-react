import React from "react";

const ItemPage = props => {
  console.log(props.match.params.id, "props input1111");
  return <div className="item">ITEM PAGE</div>;
};

export default ItemPage;
