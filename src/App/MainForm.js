import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import jsonSchema from './data/jsonSchema.json'
import { Button } from 'reactstrap'
import djv from 'djv'

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
    let parsedObject
    values.preventDefault()
    try {
      parsedObject = JSON.parse(this.state.textArea)
      let env = new djv()
      env.addSchema('test', jsonSchema)
      if (env.validate('test', parsedObject)) {
        throw new Error ('Brak wymaganych danych!')
      }
    } catch (err) {
      console.log(err)
      if (err instanceof SyntaxError) {
        this.props.alert.error('Zły format danych, wprowadź poprawny JSON!')
      } else {
        this.props.alert.error(err.message)
      }
      return
    }
    this.props.alert.success('Załadowano dane!')
    this.props.handleDataChange({
      JSON: this.state.textArea
    })
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
