import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import DataAnalyzer from './DataAnalyzer.js'

class MainForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      textArea: '{"miasta" : [ { "nazwa" : "A", "ma_jednostke" : true }, { "nazwa" : "B","ma_jednostke" : true},{"nazwa" : "C","ma_jednostke" : false},{"nazwa" : "D","ma_jednostke" : false }, { "nazwa" : "E", "ma_jednostke" : true }],"drogi" : [{"miasta" : ["A", "B"],"czas_przejazdu" : 2},{"miasta" : ["A", "C"],"czas_przejazdu" : 3},{"miasta" : ["A", "D"],"czas_przejazdu" : 4},{"miasta" : ["A", "E"],"czas_przejazdu" : 1}],"max_czas_przejazdu" : 10}'
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
      <form onSubmit={this.handleSubmit} className='main-input form-group flex-row justify-content-lg-center'>
        <div className='col-lg-12 form-group row'>
          <label>Wprowadź dane:</label>
          <textarea id='textarea' className='form-control col-lg-12' value={this.state.textArea} onChange={this.handleTextAreaChange} />
        </div>
        <button id='submit' type='submit' className='form-control btn btn-primary col-md-3 col-xs-12'>Zatwierdź</button>
      </form>
    )
  }
}

export default withAlert(MainForm)
