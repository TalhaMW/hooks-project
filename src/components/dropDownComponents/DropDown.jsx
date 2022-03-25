import React, { useState,useEffect, useRef } from "react";
import "./dropDown.css";
import dropDownData from "./dropDownData"
import DropDownOption from "./dropDownoption/DropDownOption";

const DropDown = () => {
    const [color,selectedColor] = useState(dropDownData[0].value)
    const [open,setOpen] = useState(false)
    const ref = useRef()
    const onClick = (color,e)=>{
    
        selectedColor(color)
        setOpen(!open)
    }
    const openCloseDrop = (e)=>{
     
        setOpen(!open)
    }
    const dropDownClick = ()=>{
      if(open){
        setOpen(false)
      }
    }
    useEffect(()=>{
      document.body.addEventListener("click",(e)=>{
        if(ref.current.contains(e.target)){
          return
        }
        setOpen(false)
      })
    },[])
    // console.log(open);

  return (
    <div onClick={dropDownClick} ref={ref} className="drop-down">
    <DropDownOption
    selectedColor={color}
     onClick={onClick}
    data={dropDownData}
    openCloseDrop={openCloseDrop}
    openLogic={open}
    />
    </div>
  );
};
export default DropDown;
