import React from "react"
import Header from "./Header"
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import './App.css';

function App() {
  return (
    //BEM Naming Convention
    <div className="app">
     {/* <h1> YAY , Lets Build YouTube Clone </h1> */}

     {/* Header */}

     <Header/>

     <div className="app__page">
       {/* Sidebar */}
       <Sidebar />
       {/* Recommended Video */}
       <RecommendedVideos />
     </div>
    </div>
  );
}

export default App;
