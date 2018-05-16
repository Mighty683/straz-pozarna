import React, { Component } from 'react'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import Welcome from './Welcome.js'
import MainForm from './MainForm.js'
import DataPanel from './DataPanel.js'
import NavBar  from './NavBar.js'

class Main extends Component {
  static propTypes: {
    history: PropTypes.object.isRequired
  }
  constructor () {
    super()
    this.state = {
      JSON: ''
    }
    this.handleContinue = this.handleContinue.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
  }

  handleContinue () {
    this.props.history.push('/form')
  }

  handleDataChange (preparedData) {
    this.setState({
      ...preparedData
    })
    this.props.history.push('/datapanel')
  }

  render () {
    return (
      <AlertProvider template={AlertTemplate} {... {
        position: 'bottom center',
        timeout: 3000,
        transtition: 'scale',
        offset: '30px'
      }}>
        <div className='main container text-center'>
          <header>
            <h1 className='App-title'>Straż Pożarna</h1>
            <NavBar />
          </header>
          <Switch>
            <Route exact={true} path='/' render={() => (
              <Welcome handleContinue={this.handleContinue} />
            )} />
            <Route path='/form' render={() => (
              <MainForm {... {handleDataChange: this.handleDataChange, JSON: this.state.JSON}} />
            )} />
            <Route path='/datapanel' render={() => (
              <DataPanel {... {JSON: this.state.JSON}} />
            )} />
          </Switch>
          <footer className='text-muted'>Made by Tomasz Szarek 2018</footer>
        </div>
      </AlertProvider>)
  }
}

export default withRouter(Main)
