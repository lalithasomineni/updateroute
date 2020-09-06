import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../update.css';



export class Update extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider className="pickup">
        <>
        <h1 className = "heading">Update Timings</h1>
          <Dialog className = "box"
            open
            fullWidth
            maxWidth= 'xs'
          >
            <AppBar title="Update timings" />
            <h1 className="heading2">Details</h1>
            <TextField
              placeholder="enter your shop openingtime"
              label="Openingtime"
              onChange={handleChange('openingtime')}
              defaultValue={values.openingtime}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField 
              placeholder="enter your shop closingtime"
              label="Closingtime"
              onChange={handleChange('closingtime')}
              defaultValue={values.closingtime}
              margin="normal"
            />
            <br />
            <br />
            <Button className = "btn btn1"
              color="primary"
              variant= "contained"
              onClick={this.continue}
            >Continue</Button>
            <br />
            <Button className = "btn btn2"
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            <br/>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Update;