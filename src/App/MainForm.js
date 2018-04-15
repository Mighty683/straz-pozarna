import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import DataAnalyzer from './DataAnalyzer.js'
import { Button } from 'reactstrap'

class MainForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      textArea: '{"miasta" : [ { "nazwa" : "A", "ma_jednostke" : false }, { "nazwa" : "B","ma_jednostke" : true},{"nazwa" : "C","ma_jednostke" : false},{"nazwa" : "D","ma_jednostke" : false }, { "nazwa" : "E", "ma_jednostke" : true }],"drogi" : [{"miasta" : ["A", "B"],"czas_przejazdu" : 20},{"miasta" : ["A", "C"],"czas_przejazdu" : 3},{"miasta" : ["A", "D"],"czas_przejazdu" : 4},{"miasta" : ["A", "E"],"czas_przejazdu" : 11}],"max_czas_przejazdu" : 10}'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
  }

  handleSubmit (values) {
    let parsedObject
    values.preventDefault()
    try {
      parsedObject = JSON.parse(this.state.textArea)
      try {
        parsedObject = DataAnalyzer.prepareData(parsedObject)
      } catch (err) {
        this.props.alert.error(err)
        return
      }
    } catch (err) {
      this.props.alert.error('Zły format danych, wprowadź poprawny JSON!')
      return
    }
    this.props.alert.success('Załadowano dane!')
    this.props.handleDataChange(parsedObject)
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
