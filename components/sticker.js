import React from 'react';
import styled from "styled-components";



const Sticker = (props) => {

    const StickerStyle = styled.div`
    width: auto;
    padding: 0.6em 1em;
    height: auto;
    background: black;
    color: ${props.color};
    margin: 0.1em;
    transform: ${props.rotation};
  `;

    return (
    <StickerStyle>{props.text}</StickerStyle>
    );
}

export default Sticker;