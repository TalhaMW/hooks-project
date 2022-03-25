import React from "react"
import "./customSearch.css"

const CustomSearch = ({placeholder,searchHeading,value,cls,inputChangeHandler})=>(

    <div className={`custom-search ${cls}`}>
        <label>{searchHeading}</label>
        <input onChange={inputChangeHandler} placeholder={placeholder} type="text" value={value}  />
    </div>
)
export default CustomSearch