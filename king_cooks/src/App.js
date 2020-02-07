import React from 'react';
import { Grid } from 'semantic-ui-react';
import Nav from './Components/Nav'
function App() {
  return (
    <div className="App">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        {/* <Grid.Column style={{ maxWidth: 450 }}> */}
         <Nav />
        {/* </Grid.Column> */}
      </Grid>
    </div>
  );
}

export default App;
// culinary comforts
// chess king 