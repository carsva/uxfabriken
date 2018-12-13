import React, { Component } from 'react';
import styled from "styled-components";
import posed from 'react-pose';
import Sticker from '../components/sticker';
import './../normalize.css';
import './../index.css';
import lottie from './../lottie';
import burst from '../animations/burst';

import { MainContext } from "../components";

const H1 = styled.h1`
  color: #0d2b3e;
`;

const P = styled.p`
  color: #7b7c7d;
`;

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
    margin-top: 10em;
    
  }
`;

const ArrowStyle = styled.img`
@media (min-width: 100px) {
  width: 25%;
  margin-top: 15em;
  margin-left: 30%;
  position: absolute;
  animation: 1s infinite beatHeart
  
}

@keyframes beatHeart {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}
  

@media (min-width: 1000px) {
    width: 8%;
    margin-top: 9em;
    margin-left: 12%;
    position: absolute;
    animation: 1s infinite beatHeart
    
  }
  
  @keyframes beatHeart {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
  }
`;

const StickerBlockStyle = styled.div`

@media (max-width: 1000px) {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin-top: 6rem;
  
}

  @media (min-width: 1000px) {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 4rem;

  }

`;

const BubbleTextStyle = styled.div`

@media (max-width: 1000px) {
  
  
}

  @media (min-width: 1000px) {
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: center;
  width: 8rem;
  height: 5rem;
  color: black;
  position: absolute;
  margin-top: 2.8rem;
  pointer-events: none; 
  text-align: center;


  }

`;

//Media query example: max-width: 600px; will set these mediaqueries for devices below 600px width

class Index extends Component {

  constructor () {
  super();
  this.state = {
    color: "",
    activeText: "Hej  :)",
    count: 0,
    arrow: "visable",
    bubbleInfo: [
      { 
        text: ""
      },
        
      { 
        text: "Är du en nyfiken person?"
      },
      { 
        text: "Det tror jag eftersom du tryckte på bubblan igen?"
      },
      { 
        text: "Vad händer när din webbsida väcker nyfikenhet?"
      },
      { 
        text: "Då kommer kunderna tillbaka."
      },
      { 
        text: "Nu har du tryckt fem gånger på bubblan"
      },
      { 
        text: "Det är precis vad UX handlar om?"
      },
      { 
        text: "Att genom design skapa en tydlig användarresa"
      },
      { 
        text: "Vill du ta en kaffe? Skriv ett mail eller slå en pling!"
      },
      { 
        text: "Ta nu ett djupt andetag..."
      },
      { 
        text: "...Du är värdefull" 
      },
    ]
  }

  }

  animationSetup = (order) => {
    var container = document.getElementById('bodymovin');

    if (container.innerHTML = !"") {
      container.innerHTML = ""
    }
    var animationdata = burst();
    
    // Set up our animation
    var animData = {
     container: container,
     renderer: 'svg',
     animationData: animationdata
      
    };
    var anim = lottie.loadAnimation(animData);
    anim.setSpeed(0.5);
    
    if (order) {
      anim.playSegments([0,20], true);
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

      arrowVisable = () => {
        if(this.state.arrow === "visable") {
          return <ArrowStyle src={`/static/img/test.svg`} />
        }
         
        
        }

      textSwitcher = () => {
        let number = this.state.count + 1;

        if(number <= 10) {
          let newText = this.state.bubbleInfo[number].text;
          this.setState({
            activeText: newText,
            count: number
          }) 
          
          if (number === 10) {
            this.setState({
              arrow: "invisible",
              })
          }


            
        }
        
        // if(number === 11) {
        //   
      
        
        }

  componentDidMount() {
    this.randomBackground()
    this.animationSetup()
  };

quote = () => {
  this.randomBackground()
  this.textSwitcher()
  this.animationSetup('svenne')

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
      <MainContext.Consumer>
        {stateData => {
          const { activeText } = stateData.state;
          return (
            <div>
               <BodyStyle>
         <LogoStyle src={`/static/img/uxfabriken_logo.svg`} />
         <div id="bodymovin"></div>
        
         <Bubble onClick={this.quote}/>
         {this.arrowVisable()}
         <BubbleTextStyle>
           <div>{this.state.activeText}</div>
         </BubbleTextStyle>
         
         <StickerBlockStyle>
            <Sticker text="+46 704 991 702" color={this.state.color} rotation="rotate(6deg)"/>
            <Sticker text="carl@tocco.se" color={this.state.color} rotation="rotate(2deg)"/>
            <Sticker text="Slottsbacken 8, Gamla Stan, Stockholm" color={this.state.color} rotation="rotate(-3deg)"/>
            <Sticker text=":)" color={this.state.color} rotation="rotate(4deg)"/>
         </StickerBlockStyle>
         
      </BodyStyle>
            </div>
          );
        }}
      </MainContext.Consumer>
     

    );
  }
}

export default Index;
