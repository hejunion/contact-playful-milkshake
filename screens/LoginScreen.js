
import React from 'react'


import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    FlatList,
    SectionList,
    TextInput,
  } from 'react-native'

import {login} from '../api'

export default class LoginScreen extends React.Component {
    static navigationOptions = ( (navigation)=>
    {
        return {
            headerTitle:  'Login'
        }
    });


    state = {
        username: '',
        password:'',
        err:'',
    }

    updateUsername = value => {
        this.setState( {username: value })
    }

    updatePassword = value => {
        this.setState( {password: value })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Please login</Text>
                <Text>{this.state.err}</Text>
                <TextInput placeholder="username" value={this.state.usernmae} onChangeText={this.updateUsername} autoCapitalize='none'/>
                <TextInput placeholder="password" value={this.state.password} onChangeText={ this.updatePassword } autoCapitalize='none' secureTextEntry='true' />

                <Button title='Press to login' onPress={this._login}></Button>

            </View>
        )
    }


    _login =async ()=> {
        try{
        const status = await login(this.state.username, this.state.password);
        if ( status) this.props.navigation.navigate('main')
        }catch(err) {
            console.error( err.message )
            this.setState({err: err.message})
        }
    }
}

const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            flex: 1,
        },
        text: {
            textAlign: 'center'
        }

    }
)