import React from "react";


const TextCard = props =>{
    return (
        <div className="nasaTextCard" key={props.id}>
            <h3 className="nasaTitle">{props.title}</h3>
            <h4 className="nasaDate">{props.date}</h4>
            <p className="nasaImgDesc">{props.description}</p>
        </div>
    )
}

export default TextCard;