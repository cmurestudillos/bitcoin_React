import React, {Component} from 'react';
// Imagenes
import logo from '../../../assets/img/logo.png';
// React-Material
import {AppBar, Toolbar }from '@material-ui/core';

class NavbarComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('NavbarComponent.js - Metodo render()');

        return(
          <div>
            <AppBar position="static">
              <Toolbar className="bg-custom">
                <img className="logo" src={logo} alt="BitCoin" title="BitCoin" />
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}

export default NavbarComponent;