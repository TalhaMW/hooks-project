import React, { useState } from 'react'
import "./accordion.css"
import accordionData from './accordionData'
import AccordionItem from './accordionItem/AccordionItem'

const Accordion = () => {
  const [activeIndex,setActiveIndex] = useState(null)

  const clickHandler = (index)=>{
    if(activeIndex===index){
      setActiveIndex(null)
    }else{
      setActiveIndex(index)
    }
  }
  console.log(activeIndex);
  return (
      <div className="accordion">
      <h1 className="page-heading">Accordion</h1>
      <div className="accord-item-container">
      <AccordionItem
       clickHandler={clickHandler}
       accordData = {accordionData}
       activeIndex={activeIndex}
       />
      </div>
      </div>
  )
}

export default Accordion