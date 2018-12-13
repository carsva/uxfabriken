import React, { Component } from "react";
import { MainContext } from "./MainContext";

class Provider extends Component {
  state = {
    bubbleInfo: [
      { 
        text: "Hej"
      },
        
      { 
        text: "Yo"
      },
    ]
  };

  render() {
    return (
      <MainContext.Provider
        value={{
          state: this.state,
          actions: {}
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export { Provider };
