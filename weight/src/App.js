import React, { Component } from 'react';
import {Route,Redirect} from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";

class App extends Component {

  constructor(){
    super();
    this.state = {editID : "", viewID : "",redirect_home: false}
  }

  edit = (id) => {
    this.setState({editID : id})
  }

  view = (id) => {
    this.setState({viewID: id})
  }

  delete = (id) => {
    axios.get("http://localhost:3001/delete/"+id)
    .then((ambilData) => {
      if (ambilData.data === "true")
        {
          this.setState({redirect_home : true});
        }
      })
  }

  render() {

    const {redirect_home} = this.state;

    if (redirect_home) {
        this.setState({redirect_home: false});
        return (
        <Redirect to='/home'/>
        )
      }

    return(
      <div>
        <Route path = "/home" render = {() => <Home Edit={this.edit} Delete={this.delete} View={this.view}/>}/>
        <Route path = "/add" render = {() => <Add/>}/>
        <Route path = "/edit/:id" render = {() => <Edit id = {this.state.editID}/>}/>
        <Route path = "/view/:id" render = {() => <View id = {this.state.viewID}/>}/>
      </div>
    )
  }
}

export default App;
