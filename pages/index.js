import React, { Component } from 'react';
import styled from "styled-components";
import './../normalize.css';
import './../index.css';

const BodyStyle = styled.div`
  background: #00183C;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoStyle = styled.img`
  width: 80%;
  margin-top: 0em;
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
