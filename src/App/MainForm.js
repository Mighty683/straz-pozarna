import React, { Component } from 'react';
import { withAlert } from 'react-alert'

class MainForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      textArea: 'JSON'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleSubmit (values) {
    let parsedObject;
    values.preventDefault();
    try {
      parsedObject = JSON.parse(this.state.textArea);
    }
    catch (err) {
      this.props.alert.error('Zły format danych, wprowadź poprawny JSON!')
      return;
    }
    this.props.alert.success('Załadowano dane!')
    this.props.handleDataChange(parsedObject)
  }

  handleTextAreaChange (event) {
    this.setState({
      textArea: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="main-input row justify-content-xs-center">
        <h2>Wprowadź dane:</h2>
          <textarea id="textarea" className="col-lg-12" value={this.state.textArea} onChange={this.handleTextAreaChange}></textarea>
          <button id="submit" type="submit" className="btn btn-primary col-md-3 col-xs-12">Zatwierdź</button>
        </form>
      </div>
    );
  }
}

export default withAlert(MainForm)
