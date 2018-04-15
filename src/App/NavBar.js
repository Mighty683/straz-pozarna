import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav } from 'reactstrap'

class NavBar extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div className='nav-bar'>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Witaj</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/'>Strona powitalna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/form'>Formularz</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/datapanel'>Panel Danych</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
