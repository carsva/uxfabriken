import React, { Component } from 'react';
import styled from "styled-components";
import posed from 'react-pose';
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



class Index extends Component {

  randomBackground = () => {
    
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   console.log(bgColor);
    
      document.body.style.background = bgColor;
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
         
      </BodyStyle>

    );
  }
}

export default Index;
