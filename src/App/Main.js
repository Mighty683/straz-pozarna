import React, { Component } from 'react';
import Welcome from './Welcome.js';
import MainForm from './MainForm.js'

class Main extends Component {

  constructor () {
    super();
    this.state = {
      showWelcome: true,
      dataObject: {}
    }
    this.handleContinue = this.handleContinue.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
  }

  handleContinue () {
    this.setState({
      showWelcome: false
    })
  }

  handleDataChange (dataObject) {
    this.setState({
      dataObject: dataObject
    })
  }

  render () {
    const mainContent = this.state.showWelcome ?
      <Welcome handleContinue={this.handleContinue}/> :
      <MainForm handleDataChange={this.handleDataChange}/>
    return (
      <div className="main container">
        <header className="text-center">
          <h1 className="App-title">Straż Pożarna</h1>
        </header>
        {mainContent}
      </div>
    );
  }
}

export default Main;
