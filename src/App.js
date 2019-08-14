import React,{useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import SpaceImgCard from "./components/imageComponents/spaceImgCard";
import SpaceImgGrid from "./components/imageComponents/spaceImgGrid";

function App() {
  const [nasaData,setNasaData] = useState([]);

  useEffect(() =>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=U4BMv1y6WcxwvGTyQpSNLLUJ4gQOJq8prb2vneSL')
    .then(response =>{
      setNasaData(response.data)
      console.log("Response back: ", response.data);
    })
    .catch( err => console.log("Error: ", err))
  },[]);

  return (
    <div className="App">
      <div className="nasaCardContainer">
        <div className="imgContainer">
          <h1 className="appTitle">Nasa Photo of the Day!</h1>
            <SpaceImgCard 
            title={nasaData.title}
            media_type={nasaData.media_type}
            date={nasaData.date}
            url={nasaData.url}
            description={nasaData.explanation}
            />
        </div>
          
      </div>
    </div>
  );
}

export default App;
