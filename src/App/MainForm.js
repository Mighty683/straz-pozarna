import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import DataAnalyzer from './data/DataAnalyzer.js'
import jsonSchema from './data/jsonSchema.json'
import { Button } from 'reactstrap'
import djv from 'djv'

class MainForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      textArea: 'Dzwoń po JSONA!'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
  }

  handleSubmit (values) {
    let parsedObject
    values.preventDefault()
    // TODO: Refactor
    try {
      parsedObject = JSON.parse(this.state.textArea)
      let env = new djv()
      env.addSchema('test', jsonSchema)
      if (env.validate('test', parsedObject)) {
        throw {
          msg: 'Brak wymaganych danych!'
        }
      }
      parsedObject = DataAnalyzer.prepareData(parsedObject)
    } catch (err) {
      console.log(err)
      if (typeof err.msg === 'string') {
        this.props.alert.error(err.msg)
      } else {
        this.props.alert.error('Zły format danych, wprowadź poprawny JSON!')
      }
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
