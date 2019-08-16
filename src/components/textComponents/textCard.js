import React from "react";
import { Container, Divider } from "semantic-ui-react";


const TextCard = props =>{
    return (
        <div className="nasaTextCard" key={props.id}>


        <Container textAlign='left'className="nasaDate"> <h4>{props.date}</h4></Container>
           

        <Container textAlign='justified'>
            <h3 className="nasaTitle">{props.title}</h3>
                <Divider />
            <p className="nasaImgDesc">{props.description}</p>
        </Container>
        </div>
    )
}


export default TextCard;