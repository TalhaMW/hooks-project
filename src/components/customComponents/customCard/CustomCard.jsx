import React from "react";
import "./customCard.css"

const CustomCard = ({cls,children}) => {
  return (
    <div className={`custom-card ${cls}-card`}>
    {children}
    </div>
  );
};
export default CustomCard;
