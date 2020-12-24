
import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    FlatList,
    SectionList,
  } from 'react-native';

export default class ContactDetailScreen extends React.Component {

    static navigationOptions = ( (navigation)=>
    {
        return {
            headerTitle:  'Contact Details'
        }
    });

    render= ()=> {

        return (

            <View>
                <Text>Contact Details:</Text>
                <Text>Name: { this.props.navigation.getParam('name') }</Text>
            </View>
        )
    }
}