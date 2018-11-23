import React, { Component } from 'react';
import styled from "styled-components";

const BodyStyle = styled.body`
  background: #00183C;
  display: flex;
  width: 100vw;
  height: 100vh;
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
      <div>
         <LogoStyle src={`/static/img/uxfabriken_logo.svg`} />
      </div>
      </BodyStyle>

    );
  }
}

export default Index;
