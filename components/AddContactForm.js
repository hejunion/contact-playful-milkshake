import React from 'react';
import { TextInput, View, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { Constants } from 'expo'

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: propTypes.func,
  };

  state = {
    name: '',
    phone: '',
    isFormValid:false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
      this.validateForm()
    }
  }



  validateForm= () => {
    console.log('valding')
    this.setState({isFormValid: true})
    console.log( this.state.isFormValid)
  }

  //
  getHandler = key => val => {
    this.setState({[key]: val})
  }


 handleNameChange = this.getHandler("name")
 handlePhoneChange = this.getHandler("phone")
  /*
  handleNameChange = (name) => {
    this.setState({ name: name });
    this.validateForm()
  };

  handlePhoneChange = (phone) => {
    this.setState({ phone: phone});
    this.validateForm()
  };
  */

  handleSubmit = () => {
    this.props.onSubmit( {name: this.state.name, phone: this.state.phone})
  }

  handleGoBack = () => {
    this.props.handleGoBack()
  }

  render() {
    return (
      <View style={ styles.container}>
        <TextInput
          stytle={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}></TextInput>
        <TextInput
          stytle={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          keyboardType="numberic"></TextInput>
        <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} ></Button>
        <Button title="Go Back" onPress={ this.handleGoBack } ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})
