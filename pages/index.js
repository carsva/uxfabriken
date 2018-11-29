import React, { Component } from 'react';
import styled from "styled-components";
import posed from 'react-pose';
import './../normalize.css';
import './../index.css';

const BodyStyle = styled.div`
  background: palevioletred;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const LogoStyle = styled.img`
  width: 60%;
  margin-top: 16em;
`;

class Index extends Component {
  render() {
    return (
      <BodyStyle>
         <LogoStyle src={`/static/img/uxfabriken_logo.svg`} />
      </BodyStyle>

    );
  }
}

export default Index;
