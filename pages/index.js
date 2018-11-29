import React, { Component } from 'react';
import styled from "styled-components";
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import './../normalize.css';
import './../index.css';

const BodyStyle = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const LogoStyle = styled.img`
  width: 50%;
  margin-top: 16em;
`;

const Box = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

const Example = () => <Box className="box" />



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

  render() {

  
    
    return (
      <BodyStyle>
         <LogoStyle src={`/static/img/uxfabriken_logo.svg`} />
         <Example />
      </BodyStyle>

    );
  }
}

export default Index;
