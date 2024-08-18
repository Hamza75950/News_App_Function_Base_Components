import React,{useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News (props) {
  let {country= "us", category= "general",pageSize= 6 ,apiKey,source,setProgress} = props
  
  // document.title = `${capitalizeFirstLetter(
  //   props.category
  // )}  News App`;


  const [articles,setArticles]= useState([]);
  const [loading,setLoading]= useState(true);
  const [page,setPage]= useState(1);
  const [totalResults,setTotalResults]= useState();
  
  
  
 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
    const updateNews = async ()=>{
    let url = "";
    setProgress(10);
    if (source === "techcrunch") {
      url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
    } else if (source === "apple") {
      url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-13&to=2024-08-13&sortBy=popularity&apiKey=${apiKey}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    }
    let data = await fetch(url);
    setProgress(30);
    let parseData = await data.json();
    setProgress(70);

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    setProgress(100);
  }
  
  useEffect(()=>{
    updateNews();
  },[])

      
  const fetchMoreData = async () => {
    let url = "";
    if (source === "techcrunch") {
      url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
    } else if (source === "apple") {
      url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-13&to=2024-08-13&sortBy=popularity&apiKey=${apiKey}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    }
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)

  };
  
  
    return (
      <div>
        <div className=" my-3">
          <h1 className="text-center" style={{ margin: "35px 0px" }}>
            Top {capitalizeFirstLetter(category)} Headline
          </h1>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length < totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row m-3 ">
                {articles.map((elements, index) => {
                  return (
                    <div
                    key={`${elements.url}-${index}`}
                    className="col-md-4 mb-3"
                    >
                      <NewsItem
                        title={elements.title}
                        disc={elements.description}
                        imageUrl={
                          elements.urlToImage
                          ? elements.urlToImage
                          : `https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg`
                        }
                        author={elements.author}
                        publishedAt={elements.publishedAt}
                        source={elements.source.name}
                        newsUrl={elements.url}
                        />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
       
      </div>
    );
  }


