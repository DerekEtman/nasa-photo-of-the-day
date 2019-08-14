// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SpaceImgCard from "./spaceImgCard";

// export default function SpaceImg() {
//     const [spaceImg, setSpaceImg] = useState([]);

//     useEffect(() =>{
//         axios.get('https://api.nasa.gov/planetary/apod?api_key=U4BMv1y6WcxwvGTyQpSNLLUJ4gQOJq8prb2vneSL')
//         .then(response => {
//             const test = response.data;
//             console.log("response.data: ", test);
//             setSpaceImg(spaceImg);
//         });
//     },[]);

//     return(
//         <div className="nasaImage">
//             {spaceImg.map(data =>{
//                 console.log(data.url);
//                 return <SpaceImgCard key={data.date} src={data.url}/>
//             })}
//         </div>
//     );
// }