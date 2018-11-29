import React, { Component } from 'react';
import styled from "styled-components";
import posed from 'react-pose';
import Sticker from '../components/sticker';
import './../normalize.css';
import './../index.css';

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoStyle = styled.img`
  width: 15%;
  margin-top: 16em;
`;

const StickerBlockStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 10rem;
`;



class Index extends Component {

  constructor () {
  super();
  this.state = {
    color: ""
  }

  }

  

  randomBackground = () => {
    
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
      document.body.style.background = bgColor;
      this.setState({
        color: bgColor
      })
      }

  componentDidMount() {
    this.randomBackground()
  };

quote = () => {
  this.randomBackground()
}



  render() {

  const BubbleAnimation = posed.img({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

// const Img = styled(Box1)`
// width:95%;
// `;


const Bubble = () => <BubbleAnimation onClick={this.quote} className="pratbubbla" src={`/static/img/pratbubbla.svg`} />

  
    
    return (
      <BodyStyle>
         <LogoStyle src={`/static/img/uxfabriken_logo.svg`} />
         <Bubble onClick={this.quote}/>
         <StickerBlockStyle>
            <Sticker text="0704 991 702" color={this.state.color} rotation="rotate(6deg)"/>
            <Sticker text="carl@tocco.se" color={this.state.color} rotation="rotate(2deg)"/>
            <Sticker text="Slottsbacken 8, Gamla Stan, Stockholm" color={this.state.color} rotation="rotate(-3deg)"/>
            <Sticker text=":)" color={this.state.color} rotation="rotate(4deg)"/>
         </StickerBlockStyle>
         
      </BodyStyle>

    );
  }
}

export default Index;
