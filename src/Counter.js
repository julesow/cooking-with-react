import React, { Component } from "react";
import {ThemeContext} from "./App";

class Counter extends Component {
  state = {
    count: this.props.initialState
  };

  decrementCount = () => {
    this.setState(prevState=> {return { count: prevState.count - 1 }});
  };
  incrementCount = () => {
    this.setState(prevState=> {return { count: prevState.count + 1 }});
  };
  render() {
    return (
      <ThemeContext.Consumer>
          {style => {
              return (<>
                  <button style={style} onClick={this.decrementCount}>-</button>
                  <span> {this.state.count} </span>
                  <button style={style} onClick={this.incrementCount}>+</button>
                  </>
              )
          }}
        
      </ThemeContext.Consumer>
    );
  }
}

export default Counter;
