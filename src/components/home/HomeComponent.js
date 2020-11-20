import React, {Component} from 'react';

import {Paper, Tabs, Tab, Card} from '@material-ui/core/';
// Peticiones Http
//import axios from 'axios';
// EndPoint
//import url from '../../api/endpoint';

class HomeComponent extends Component{
    state = {
        value: 0
    }
    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("HomeComponent.js - Metodo componentWillMount");  
    }
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
      };
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('HomeComponent.js - Metodo render()');

        return(
            <div>
                <h1>Home component</h1>
                    <Tabs indicatorColor="primary" textColor="primary" centered value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Item One" value={0} index={0}/> Hola 
                        <Tab label="Item Two" value={1} index={1}/> Adios
                        <Tab label="Item Three" value={2} index={1} /> bienvenido
                    </Tabs>
                <Card value={this.state.value} index={0}>
                    Item One
                </Card>    
                <Card value={this.state.value} index={1}>
                    Item Dos
                </Card> 
                <Card value={this.state.value} index={2}>
                    Item Res
                </Card>                                 
            </div>
        );
    }
}

export default HomeComponent;