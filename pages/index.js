import React, { Component } from 'react';
import styled, {keyframes} from "styled-components";
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
  margin-top: 5em;
  
}
  

@media (min-width: 1000px) {
    width: 20%;
    margin-top: 10em;
    
  }
`;

const ArrowStyle = styled.img`
@media (min-width: 100px) {
  width: 25%;
  margin-top: -18em;
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
    width: 5%;
    margin-top: 3em;
    margin-left: 8%;
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
  padding: 2rem;
  margin-top: -3em;
  font-size: 0.4em;
}

  @media (min-width: 1000px) {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  }

`;

const BubbleTextStyle = styled.div`
@media (max-width: 1000px) {

  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: center;
  width: 8rem;
  height: 6.5rem;
  color: black;
  position:absolute;
  margin-top: -24.8em;
  pointer-events: none; 
  text-align: center;
  font-family: 'roboto', sans-serif;
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
  margin-top: 0rem;
  pointer-events: none; 
  text-align: center;
  font-family: 'Titillium Web', sans-serif;


  }

`;

const CustomerTextStyle = styled.p`
@media (max-width: 1000px) {
  width: 70%;
  margin-top: 3em;
  margin-bottom: 3em;
  text-align: center;
  color: black;
}

  @media (min-width: 1000px) {
    color: black;
    
  }
  

`;

const CustomerLogoGroupStyle = styled.div`

@media (max-width: 1000px) {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  
}

  @media (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
    
    
    
  }

`;

const CustomerLogoStyle = styled.img`
@media (max-width: 1000px) {
  width: 40%;
  height: 40%
  margin-left: 0.8em;
  margin-right: 0.8em;
  margin-top: 2em;
}

  @media (min-width: 1000px) {
    width: 12%;
    height: 10%
    margin-left: 0.8em;
    margin-right: 0.8em;
    margin-top: 0.8em;
    
    
  }

`;

const BubbleWrapperAnimation = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

const BubbleWrapperStyle = styled.div`
  position: relative;
  width: 45%;
  margin-top: 2.5em;
  user-select: none;
  max-width: 200px;
`;

const PulsingArrowAnimation = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(0.9);
}

`;

const BubbleWrapperContentStyle = styled(BubbleWrapperAnimation)`
position: relative;
`;

const BubbleWrapperImageStyle = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const BubbleWrapperTextStyle = styled.div`
  position: absolute;
  color: black;
  top: 0;
  left: 0;
  bottom: 17%;
  right: 0;
  padding: 1em;
  display:flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const BubbleWrapperArrowStyle = styled.img`
  display: block;
  position: absolute;
  top: 70%;
  left: 110%;
  width: 50%;
  animation: 1s infinite ${PulsingArrowAnimation};
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
        text: "Hur är läget?"
      },
      { 
        text: "Det är bra här också tack!"
      },
      { 
        text: "Nu har du tryckt på bubblan tre gånger"
      },
      { 
        text: "Det är precis vad UX (User Experience) handlar om"
      },
      { 
        text: "Att skapa en tydlig användarresa..."
      },
      { 
        text: "...som känns intuitiv och skapar värde för besökaren"
      },
      { 
        text: "Då kommer besökaren tillbaka snart igen"
      },
      { 
        text: "Kom förbi Slottsbacken för en kaffe så bollar vi möjligheter"
      },
      { 
        text: "Trevlig dag önskar en liten fabrik med stora ambitioner"
      },
      { 
        text: "Tack för pratstunden!" 
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





// const Img = styled(Box1)`
// width:95%;
// `;






  
    
    return (
      <MainContext.Consumer>
        {stateData => {
          const { activeText } = stateData.state;
          return (
            <div>
               <BodyStyle>
         <LogoStyle src={`/static/img/uxfabriken_logo.svg`} />
         <div id="bodymovin"></div>
          <BubbleWrapperStyle>
            
            <BubbleWrapperArrowStyle src={`/static/img/test.svg`}/>
         {/* <Bubble onClick={this.quote}/>
         {this.ararowVisable()} */}
         <BubbleWrapperContentStyle onClick={this.quote}>
         <BubbleWrapperImageStyle src={`/static/img/pratbubbla.svg`}/>  
         <BubbleWrapperTextStyle>
           {this.state.activeText}
         </BubbleWrapperTextStyle>
         </BubbleWrapperContentStyle>

         
         </BubbleWrapperStyle>
          <CustomerTextStyle>Några varumärken vi hjälpt med vår design...</CustomerTextStyle>
          <CustomerLogoGroupStyle>
            <CustomerLogoStyle src={`/static/img/coop.svg`}/>
            <CustomerLogoStyle src={`/static/img/arla.svg`}/>
            <CustomerLogoStyle src={`/static/img/marabou.svg`}/>
            <CustomerLogoStyle src={`/static/img/aways.svg`}/>
            <CustomerLogoStyle src={`/static/img/kraft.svg`}/>
            <CustomerLogoStyle src={`/static/img/jta.svg`}/>
            <CustomerLogoStyle src={`/static/img/kobbs.svg`}/>
            <CustomerLogoStyle src={`/static/img/scan.svg`}/>
            <CustomerLogoStyle src={`/static/img/globen.svg`}/>
          </CustomerLogoGroupStyle>
          


         
         <StickerBlockStyle>
            <Sticker text="+46 704 991 702" color={this.state.color} rotation="rotate(6deg)"/>
            <Sticker text="hej@uxfabriken.com" color={this.state.color} rotation="rotate(2deg)"/>
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
