import React from 'react';
import PropTypes from 'prop-types';
// Componentes Material Ui
import {AppBar, Tabs, Tab, Typography, Box, Card, CardContent} from '@material-ui/core/';
// Peticiones Http
import axios from 'axios';
// EndPoint
import dataEur from '../../api/eur.js';
//import dataUsd from '../../api/usd.js';
//import dataGbp from '../../api/gbp.js';
// Imagenes
import euro from '../../assets/img/euro.png';

//-------------------------------------------------------//
// Metodo para obtener datos en Euros                    //
//-------------------------------------------------------//
function getEurCurerency(){

    // Log de seguimiento
    console.log('TabPanelComponents.js - Metodo getEurCurerency');

    axios.get(dataEur.endpoint)
        .then( res => {
            if(res.data){
            this.modenaEur = res.data['bpi'].EUR;
            console.log(this.modenaEur);
        }
    });
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function TabPanelComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabpanel">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card className="root">
        <CardContent>
            <img src={euro} />
            <Typography className="title" color="textSecondary" gutterBottom>
                {getEurCurerency()}
            </Typography>
        </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}