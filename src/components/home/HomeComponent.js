import React, {Component} from 'react';
// Peticiones Http
//import axios from 'axios';
// EndPoint
//import url from '../../api/endpoint';

class HomeComponent extends Component{
    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("HomeComponent.js - Metodo componentWillMount");  
    }
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('HomeComponent.js - Metodo render()');

        return(
            <div>
                <h1>Home component</h1>
            </div>
        );
    }
}

export default HomeComponent;