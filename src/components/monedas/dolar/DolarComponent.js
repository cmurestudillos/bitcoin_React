import React, {Component} from 'react';
// Peticiones Http
import axios from 'axios';
// EndPoint
import dataUsd from '../../../api/usd.js';
// Componentes Material Ui
import { Card, CardContent, Avatar, Chip, Grid} from '@material-ui/core/';
// Imagenes
import dolar from '../../../assets/img/dollar.png';

class DolarComponent extends Component{

    state = {
        monedaUsd: []
    }

    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("DolarComponent.js - Metodo componentWillMount");  

        // Obtenemos los datos del Dolar
        this.getUsdCurerency();
    }
//-------------------------------------------------------//
// Metodo para obtener datos en Dolares                  //
//-------------------------------------------------------//
getUsdCurerency(){

    // Log de seguimiento
    console.log('DolarComponent.js - Metodo getEurCurerency');

    axios.get(dataUsd.endpoint)
        .then( res => {
            if(res.data){
                this.setState({
                    monedaUsd: res.data['bpi'].USD
                })
        }
    });

}    
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//
    render(){

        return(
            <div>
                <Card className="card">
                    <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <img src={dolar} width="150" height="150" className="imagen" alt={this.state.monedaUsd.description} title={this.state.monedaUsd.description} />
                            <Chip avatar={<Avatar>$</Avatar>} label={this.state.monedaUsd.rate}  className="badge" clickable color="primary" variant="outlined" /> 
                        </Grid>
                    </Grid>
                    </CardContent>
                </Card>                            
            </div>
        );
    }
}

export default DolarComponent;