import React from "react";


const SpaceImgCard = props =>{
    return (
        <div className="nasaCard" key={props.id}>
            <img className="nasaImg" alt="random space" src={props.url} />
        </div>
    )
}

export default SpaceImgCard;