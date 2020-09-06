import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            className = "box2"
            maxWidth='sm'style={{opacity:.8}}
          >
            <AppBar title="Success"/>
            <br />
            <h1>Timings updated</h1>
            <br/>
            <br/>
            <Button className = "btn3"
              color="secondary"
              variant= "contained"
              onClick={this.continue}
            >Home</Button>
          </Dialog>
           
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;