import React, { Component } from "react";
import { MainContext } from "./MainContext";

class Provider extends Component {
  state = {
    bubbleInfo: [
      { 
        text: "Calle"
      },
      { 

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
