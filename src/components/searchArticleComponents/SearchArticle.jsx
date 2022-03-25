import React, { useState, useEffect } from "react";
import "./searchArticle.css"
import Articles from "./articles/Articles";
import axios from "axios";
import CustomSearch from "../customSearch/CustomSearch"



const SearchArticle = () => { 
    const [value,setValue] = useState("World War")
    const [searchData,setSearchData] = useState([])
    
    const inputChangeHandler = (e)=>{
        setValue(e.target.value)
    }
    useEffect(()=>{
        const  search = async ()=>{
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action:"query",
                    list:"search",
                    format:"json",
                    origin:"*",
                    srsearch:value
                }
            })
            setSearchData(data.query.search)
        }
        if(value && !searchData.length){
            search()
        }else{
            let t = setTimeout(()=>{
                if(value!==""){
                    search() 
                } 
            },500) 
            console.log(t);
            return ()=>clearTimeout(t)
        }
    },[value])
  return (
    <div className="search-article">
      <CustomSearch
      inputChangeHandler={inputChangeHandler} 
      placeholder="Search Articles...."
      cls="article-search" 
      searchHeading="Search Articles" 
      value={value}/>
      <Articles searchData={searchData}/>
    </div>
  );
};

export default SearchArticle;
