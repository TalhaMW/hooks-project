import { logDOM } from '@testing-library/react'
import React from 'react'
import CustomCard from '../../customComponents/customCard/CustomCard'




const Articles = ({searchData}) => {
  return <>
  {searchData.map((item)=>{
      return(
      <CustomCard key={item.pageid} cls="search-article">
      <h2>{item.title}</h2>
      <p dangerouslySetInnerHTML={{__html:item.snippet}}></p>
      <a href={`https://en.wikipedia.org?curid=${item.pageid}`}>Read More</a>
      </CustomCard>
  )})}
  </>
}

export default Articles