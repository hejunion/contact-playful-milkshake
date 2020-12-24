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

//import  { compareNames } from './contacts.js';
import Row from './Row.js';
import ContactList from './SectionContactList.js'

// You can import from local files

// or any pure javascript modules available in npm

export default class ContactListScreen extends React.Component {
  //State
  state = {
    showContacts: true,
    contacts: this.props.screenProps.contacts,
  };

  // Variable of function
  toggleContacts = () => {
    this.setState((preState) => ({
      showContacts: !preState.showContacts,
      contacts: preState.contacts,
    }));
    //console.log( this.state.contacts)
  };


  renderItem = (obj) => {
    <Row contact={obj.item}></Row>;
  };

  /*
  sort = () => {
    this.setState((preState) => ({
      showContacts: preState.showContacts,
      contacts: preState.contacts.sort(compareNames),
    }));
  };
*/

  addContact = newContact => {
     console.log('Add...' + newContact)
    this.setState( preState=> ( { showAddForm: false, contacts: [ ...preState.contacts, newContact ]}))
  }


  showAddScreen = () => {
     this.props.navigation.navigate('AddContact')
  }
  // Render


  render() {


    return (
      <View style={styles.container}>
        <Button title="Contact Show" onPress={this.toggleContacts}></Button>
        <Button title="Add" onPress={this.showAddScreen } ></Button>

        {

          this.state.showContacts && (
          <ContactList contacts={this.state.contacts}></ContactList>
          )

        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 5,
  },
});
