import React, { Component } from 'react';
import styled from "styled-components";
import './../normalize.css';
import './../index.css';

const BodyStyle = styled.div`
  background: palevioletred;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const LogoStyle = styled.img`
  width: 40%;
  margin-top: 6em;
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
