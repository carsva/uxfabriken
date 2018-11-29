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
  width: 14%;
  margin-top: 16em;
`;



class Index extends Component {

  componentDidMount() {
    function random_bg_color() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   console.log(bgColor);
    
      document.body.style.background = bgColor;
      }
  
  random_bg_color();
  };

test = () => {
  console.log('hello');
}



  render() {

    const Box1 = posed.img({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

const Img = styled(Box1)`
width:95%;
`;


const Example1 = () => <Box1 onClick={this.test} className="pratbubbla" src={`/static/img/pratbubbla.svg`} />

  
    
    return (
      <BodyStyle>
         <LogoStyle src={`/static/img/uxfabriken_logo.svg`} />
         <Example1 onClick={this.test}/>
         
      </BodyStyle>

    );
  }
}

export default Index;
