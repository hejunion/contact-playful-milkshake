import React from 'react'
import AddContactForm  from '../components/AddContactForm.js'

export default class AddContactScreen extends React.Component {

    static navigationOptions = {
        headTitle: 'Add New Contact'
    }

    handleSubmit = formState => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList')
    }

    handleGoBack = () => {
        console.log('Go Back?')
        this.props.navigation.goBack()
        //this.props.navigation.navigate('ContactList')

    }

    render () {
        console.log( 'Called from '+ this.props.navigation.getParam('callFrom', 'Unknown'))
        console.log( 'This '+ this.props.navigation.state.key)
        return <AddContactForm onSubmit={this.handleSubmit} handleGoBack ={this.handleGoBack} ></AddContactForm>
    }
}