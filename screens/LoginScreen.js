
import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    FlatList,
    SectionList,
  } from 'react-native'

export default class LoginScreen extends React.Component {
    static navigationOptions = ( (navigation)=>
    {
        return {
            headerTitle:  'Login'
        }
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Please login</Text>
                <Button title='Press to login' onPress={this._login}></Button>

            </View>
        )
    }

    _login = ()=> {
        this.props.navigation.navigate('main')
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