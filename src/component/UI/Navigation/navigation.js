import React from "react";
import classes from "./navigation.module.css";
import Toggle from "./Toggle/toggle";
import Menu from "./Menu/menu";

import { Component } from "react";
class Navigation extends Component {
  state = {
    visible: false
  };
  toggleClickHandler = () => {
    console.log("toggle clicked : " + this.state.visible);
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <div className={classes.Navigation}>
        <Toggle clicked={this.toggleClickHandler} />
        <Menu
          visible={this.state.visible}
          clicked={ele => this.props.click(ele)}
        />
      </div>
    );
  }
}

export default Navigation;
