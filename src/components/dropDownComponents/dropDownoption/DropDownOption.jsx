import React from "react";
import "./dropDownOption.css";

const DropDownOption = ({ data, onClick, selectedColor,openCloseDrop,openLogic }) => {
  const rederedColor = data.map((item) => {
    if (selectedColor === item.value) {
      return null;
    }
    return (
      <p
        onClick={(e) => {
          onClick(item.value,e);
        }}
        key={item.value}
      >
        {item.color}
      </p>
    );
  });

  return (
    <div className="drop-down-option">
      <div className="label">
        <p>Select Option</p>
      </div>
      <div className="color-container">
        <div onClick={openCloseDrop} className="selected">
          <p>{selectedColor}</p>
        </div>
        <div className={`option-${openLogic?"show":"hide"}`}>{rederedColor}</div>
      </div>
    </div>
  );
};
export default DropDownOption;
