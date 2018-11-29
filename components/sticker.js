import React from 'react';
import styled from "styled-components";



const Sticker = (props) => {

    const StickerStyle = styled.div`
    @media (min-width: 100px) {
        width: auto;
        padding: 0.6em 1em;
        height: auto;
        background: black;
        color: ${props.color};
        margin: 0.1em;
        transform: ${props.rotation};
        font-size: 3em;
        }
        
      }
    

    @media (min-width: 1000px) {
        width: auto;
        padding: 0.6em 1em;
        height: auto;
        background: black;
        color: ${props.color};
        margin: 0.1em;
        transform: ${props.rotation};
        font-size: 1em;
      }
  `;

    return (
    <StickerStyle>{props.text}</StickerStyle>
    );
}

export default Sticker;