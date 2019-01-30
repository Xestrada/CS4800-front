import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logo from '../../images/rekit-logo.svg';
import './header.scss';


export default class Header extends React.Component{
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className = "navHolder">
        <Navbar color="transparant" light expand="md">
          <img src={logo} alt="cs4600-front" className='logo' />
          <NavbarToggler onClick={this.toggle} className = "mr-2"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m2-auto nav-bar" navbar>
              <NavItem className = "navItem">
                <NavLink href="/" className = "nav-link">Home</NavLink>
              </NavItem>
              <NavItem className = "navItem">
                <NavLink href="/meetings" className = "nav-link">Meetings</NavLink>
              </NavItem>
              <NavItem className = "navItem">
                <NavLink href="about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
