import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import { Button } from 'reactstrap'
import DataAnalyzer from './data/DataAnalyzer.js'

class MainForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      textArea: props.JSON || 'Dzwoń po JSONA!'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
  }

  handleSubmit (values) {
    values.preventDefault()
    let error = DataAnalyzer.validateJSON(this.state.textArea)
    if (error) {
      this.props.alert.error(error)
    } else {
      this.props.alert.success('Załadowano dane!')
      this.props.handleDataChange({
        JSON: this.state.textArea
      })
    }
  }

  handleTextAreaChange (event) {
    this.setState({
      textArea: event.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='main-input justify-content-lg-center'>
        <div className='form-group'>
          <label>Wprowadź dane:</label>
          <textarea id='textarea' className='form-control' value={this.state.textArea} onChange={this.handleTextAreaChange} />
          <Button color='primary' id='submit' type='submit' className='form-control' onClick={this.props.handleContinue}>Zatwierdź</Button>
        </div>
      </form>
    )
  }
}

export default withAlert(MainForm)
