import React from "react";


const SpaceImgCard = props =>{
    return (
        <div className="nasaCard" key={props.id}>
            <img className="nasaImg" alt="random space" src={props.url} />
            <h3 className="nasaTitle">{props.title}</h3>
            <p className="nasaImgDesc">{props.description}</p>
        </div>
    )
}

export default SpaceImgCard;