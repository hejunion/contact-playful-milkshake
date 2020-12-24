import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

import {createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import all_contacts, { compareNames } from './contacts.js';



import AddContactScreen from './screens/AddContactScreen.js';
import ContactDetailScreen from './screens/ContactDetailScreen.js';
import ContactListScreen from './screens/ContactListScreen';


import LoginScreen from './screens/LoginScreen.js'
import SettingsScreen from './screens/SettingsScreen.js'
// or any pure javascript modules available in npm

import Ionicons from 'react-native-vector-icons/Ionicons'

const ContactNavigator = createStackNavigator ( {
  AddContact : AddContactScreen,
  ContactList : ContactListScreen,
  ContactDetail: ContactDetailScreen,

}, {
    initialRouteName: 'ContactList',
})

ContactNavigator.navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
        <Ionicons
          name={`ios-contacts${focused?'':'-outline'}`}
          size={25}
          color={tintColor}
        ></Ionicons>
    )
}



const MainNavigator = createBottomTabNavigator(
   {
    ContactTab: ContactNavigator,
    SettingTab: SettingsScreen,

   },
   {
     tabBarOptions: {
       activeTintColor: "#a41034",
       activeTabColor: "#a61034"
     }
   }
)


const AppNavigator = createSwitchNavigator (
  {
     main: MainNavigator,
     login: LoginScreen,
  }, {
    initialRouteName: 'login',
  }
)


export default class App extends React.Component {
  //State
  state = {
    contacts: all_contacts,
  };



  sort = () => {
    this.setState((preState) => ({
      showContacts: preState.showContacts,
      contacts: preState.contacts.sort(compareNames),
    }));
  };

  addContact = newContact => {
     console.log('Add...' + newContact)
     this.setState( preState=> ( { showAddForm: false, contacts: [ ...preState.contacts, newContact ]}))
  }
  // Render

  render() {


    return (
        <AppNavigator screenProps={ {
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}></AppNavigator>
    );
  }
}

//export default createAppContainer(AppNavigator);
