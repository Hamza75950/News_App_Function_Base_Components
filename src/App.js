import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

export default function App () {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(0)
  

    return (
      <div>
       
        <BrowserRouter>
          <Navbar/>

          <LoadingBar
            color='#f11946'
            progress={progress}
            
          />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  apiKey = {apiKey}
                  setProgress = {setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                  source=" "
                />
              }
            />
            
            <Route
              path="/:category"
              element={<NewsWrapper pageSize ={pageSize} apiKey = {apiKey} setProgress = {setProgress} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }



  
const NewsWrapper = (props) => {
  const { category } = useParams();

  return (
    <News
      setProgress = {props.setProgress}
      apiKey = {props.apiKey}
      key={category}
      source= {category}
      pageSize={props.pageSize}
      country="us"
      category={category}
    />
  );
};
