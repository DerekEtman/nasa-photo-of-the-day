import React,{useState, useEffect} from "react";
import axios from "axios";
import "./App.scss";
import SpaceImgCard from "./components/imageComponents/spaceImgCard";
import TextCard from "./components/textComponents/textCard";
import styled from "styled-components";
// import SpaceImgGrid from "./components/imageComponents/spaceImgGrid";

const StyledButton = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" :"palevioletred"};

font-size: 1rem;
margin: 1rem;
padding: 0.25rem 1rem;
border: 2px solid palevioletred;
border-radius: 3px;
`;


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

          <h1 className="appTitle">SPACE PHOTOS!</h1>
            <SpaceImgCard 
             url={nasaData.url}
            media_type={nasaData.media_type}
             />

        </div>

        <div className="textContainer">

          <TextCard 
          title={nasaData.title}
          date={nasaData.date}
          description={nasaData.explanation}/>
          
          <StyledButton > primary </StyledButton>
        </div>
          
      </div>
    </div>
  );
}

export default App;
