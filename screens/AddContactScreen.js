import React from 'react'
import AddContactForm  from '../components/AddContactForm.js'
import store from '../redux/store'
import {addContact} from '../redux/actions'

export default class AddContactScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Add New Contact'
    }

    handleSubmit = formState => {
        //this.props.screenProps.addContact(formState);
        store.dispatch(addContact(formState))
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