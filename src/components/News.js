import React,{useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
const [articles, setArticles]=useState([])
const [page, setPage]=useState(1)
const [totalResults, setTotalResults]=useState(0)
const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
document.title=`News App-${capitalizeFirstLetter(props.category)}`
const newsUpdate= async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=d6ac6e394e30486bb481ba5427a6a2c0&page=${page}&pageSize=${props.pageSize}`;
    let data= await fetch(url);
    let parsedData= await data.json();
    props.setProgress(100);
    setArticles(parsedData.articles)  
    setTotalResults(parsedData.totalResults)
}
useEffect(()=>{
   newsUpdate();
    // eslint-disable-next-line
},[]);


const fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=d6ac6e394e30486bb481ba5427a6a2c0&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data= await fetch(url);
    let parsedData= await data.json();
    setArticles(articles.concat(parsedData.articles))  
    setTotalResults(parsedData.totalResults)
  };

  return (
    <>
      <h1 className='text-center' style={{marginTop : "4%"}}>{`Top Headlines -${capitalizeFirstLetter(props.category)} `}</h1>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
      <div className="container">
        <div className="row my-3">
        {articles.map((element,index)=>{
          return <div className='col-md-4' key={index}>
             <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
      </div>
      </InfiniteScroll>
    </>
  )
}
