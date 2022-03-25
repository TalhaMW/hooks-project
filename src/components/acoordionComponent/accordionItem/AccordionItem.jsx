import React from "react"
import CustomCard from "../../customComponents/customCard/CustomCard"

const AccordionItem = ({accordData,clickHandler,activeIndex})=>{
    return(
    <>
        {accordData.map((item,index)=>{
            return(
                <CustomCard cls="accord-item" key={index}>
                    <h2 onClick={()=>clickHandler(index)}>{item.ques}</h2>
                    {
                        activeIndex===index?
                        <p>{item.ans}</p>:
                        null
                    }
                </CustomCard>
            )
        })}
    </>
    )
}
export default AccordionItem

// return(
//     <CustomCard cls="accord-item">
//         <h2>{item.ques}</h2>
//         <p>Cusomt lay all your love on Me</p>
//     </CustomCard>
// )