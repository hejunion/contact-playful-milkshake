
import React from 'react'
import { connect } from 'react-redux'
import { logInUser} from '../redux/actions'
import {PropTypes} from 'prop-types'
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

class LoginScreen extends React.Component {

    static propTypes = {
        err: PropTypes.string,
        token: PropTypes.string,
        logInUser: PropTypes.func
    }

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
                <Text>{this.props.err}</Text>
                <TextInput placeholder="username" value={this.state.usernmae} onChangeText={this.updateUsername} autoCapitalize='none'/>
                <TextInput placeholder="password" value={this.state.password} onChangeText={ this.updatePassword } autoCapitalize='none' secureTextEntry='true' />

                <Button title='Press to login' onPress={this._login}></Button>

            </View>
        )
    }



    _login =async ()=> {

        // Using function in dispatch
        this.props.logInUser(this.state.username , this.state.password)

        /*
        try{
        const status = await login(this.state.username, this.state.password);
        if ( status) this.props.navigation.navigate('main')
        }catch(err) {
            console.error( err.message )
            this.setState({err: err.message})
        }*/
    }

    componentWillReceiveProps(newProps){
        if ( newProps.token){
            this.props.navigation.navigate('main')
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

const mapStateToProps = state => (
    {
        err: state.user.loginErr,
        token: state.user.token
    }
)

export default connect(mapStateToProps, {logInUser})(LoginScreen)
