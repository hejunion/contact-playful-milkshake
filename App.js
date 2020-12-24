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

import {createStackNavigator} from 'react-navigation';

import all_contacts, { compareNames } from './contacts.js';



import AddContactScreen from './screens/AddContactScreen.js';
import ContactListScreen from './screens/ContactListScreen';

// or any pure javascript modules available in npm

const AppNavigator = createStackNavigator ( {
  AddContact : AddContactScreen,
  ContactList : ContactListScreen,
}, {
    initialRouteName: 'ContactList',
})


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
