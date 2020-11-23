import React, {Component} from 'react';
// Componentes
import TabPanelComponent from '../tabpanel/TabPanelComponent';

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
                <TabPanelComponent />                              
            </div>
        );
    }
}

export default HomeComponent;