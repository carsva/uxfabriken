import React, { Component } from 'react';
import styled from "styled-components";
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
      </BodyStyle>

    );
  }
}

export default Index;
