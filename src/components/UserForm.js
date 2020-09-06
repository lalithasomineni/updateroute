
import React, { Component } from 'react';
import Update from './update';
import Success from './success';

export class UserForm extends Component {
  state = {
    step: 1,
    openingtime: '',
    closingtime: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { openingtime,closingtime } = this.state;
    const values = { openingtime,closingtime };

    switch (step) {
      case 1:
        return (
          <Update
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;