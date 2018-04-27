import React, { Component } from 'react'
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
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
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
                <NavLink onClick={()=>{
                  this.props.history.push('/')
                }}>Strona powitalna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>{
                  this.props.history.push('/form')
                }}>Formularz</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>{
                  this.props.history.push('/datapanel')
                }}>Panel Danych</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(NavBar)
