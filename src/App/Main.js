import React, { Component } from 'react'
import Welcome from './Welcome.js'
import MainForm from './MainForm.js'
import DataPanel from './DataPanel.js'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      content: 'welcome',
      citiesData: {}
    }
    this.handleContinue = this.handleContinue.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
  }

  handleContinue () {
    this.setState({
      content: 'form'
    })
  }

  handleDataChange (preparedData) {
    this.setState({
      content: 'dataPanel',
      ...preparedData
    })
  }

  render () {
    const CONTENT = {
      welcome: <Welcome handleContinue={this.handleContinue} />,
      form: <MainForm handleDataChange={this.handleDataChange} />,
      dataPanel: <DataPanel {... {citiesData: this.state.citiesData, maxTime: this.state.maxTime}} />
    }

    return (
      <div className='main container'>
        <header className='text-center'>
          <h1 className='App-title'>Straż Pożarna</h1>
        </header>
        {CONTENT[this.state.content]}
      </div>
    )
  }
}

export default Main
