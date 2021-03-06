import React from 'react'
import { Button } from 'reactstrap'

const Welcome = ({handleContinue}) => {
  return (
    <div className='welcome card text-center'>
      <h2 className='card-header'>Witam w aplikacji Straż Pożarna</h2>
      <div className='card-body'>
        <div className='card-text'>
          <p>Aplikacja służy do prezentacji danych o czasie dojazdu straży pożarnej do miejsca akcji.</p>
          <p>Kliknij Dalej, aby kontynuować.</p>
          <div className='form-group'>
            <Button color='primary' onClick={handleContinue}>Dalej</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
