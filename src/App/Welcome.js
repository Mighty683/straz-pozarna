import React, { Component } from 'react';
import '../index.css';

class Welcome extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="welcome text-center">
        <h2>Witam w aplikacji Straż Pożarna</h2>
        <p>Aplikacja służy do prezentacji danych o czasie dojazdu straży pożarnej do miejsca akcji.</p>
        <p>Kliknij Dalej, aby kontynuować.</p>
        <button type="button" className="btn btn-primary col-md-3 col-xs-12" onClick={this.props.handleContinue}>Dalej</button>
      </div>
    );
  }
}

export default Welcome;
