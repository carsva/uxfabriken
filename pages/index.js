import React, { Component } from 'react';
import styled from "styled-components";
import posed from 'react-pose';
import Sticker from '../components/sticker';
import './../normalize.css';
import './../index.css';
import lottie from './../lottie';
import burst from '../animations/burst';


const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 567px) {
    
    
  }

`;

const LogoStyle = styled.img`
@media (min-width: 100px) {
  width: 70%;
  margin-top: 8em;
  
}
  

@media (min-width: 1000px) {
    width: 20%;
    margin-top: 16em;
    
  }
`;

const StickerBlockStyle = styled.div`

@media (min-width: 100px) {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 6rem;
  
}

  @media (min-width: 1000px) {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 10rem;

  }

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
    var animationdata = burst();
    
    
    var container = document.getElementById('bodymovin');
    // Set up our animation
    var animData = {
     container: container,
     renderer: 'svg',
     autoplay: false,
     loop: true,
     animationData: animationdata
      
    };
    var anim = lottie.loadAnimation(animData);
    
    anim.addEventListener('DOMLoaded',firstLoop);
    
    function firstLoop() {
      anim.playSegments([0,6], true);
    };
    function transition() {
       anim.playSegments([6,13], true);
       anim.removeEventListener('loopComplete');
       anim.addEventListener('loopComplete', secondLoop );
    };
    function secondLoop() {
        anim.playSegments([0,6], true);
        anim.removeEventListener('loopComplete');
    };
    
    container.addEventListener('click', function(event) {
         anim.addEventListener( 'loopComplete', transition );
    });
    
    anim.setSubframe(false);
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
         <div id="bodymovin"></div>
         <StickerBlockStyle>
            <Sticker text="+46 704 991 702" color={this.state.color} rotation="rotate(6deg)"/>
            <Sticker text="carl@tocco.se" color={this.state.color} rotation="rotate(2deg)"/>
            <Sticker text="Slottsbacken 8, Gamla Stan, Stockholm" color={this.state.color} rotation="rotate(-3deg)"/>
            <Sticker text=":)" color={this.state.color} rotation="rotate(4deg)"/>
         </StickerBlockStyle>
         
      </BodyStyle>

    );
  }
}

export default Index;
