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

import all_contacts, { compareNames } from './contacts.js';
import Row from './Row.js';
import ContactList from './SectionContactList.js'
import AddContactForm from './components/AddContactForm.js'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default class App extends React.Component {
  //State
  state = {
    showContacts: true,
    contacts: all_contacts,
    showAddForm: false
  };

  // Variable of function
  toggleContacts = () => {
    this.setState((preState) => ({
      showContacts: !preState.showContacts,
      contacts: preState.contacts,
    }));
    //console.log( this.state.contacts)
  };

  toggleAddForm = () => {
    this.setState((preState) => ({
      showAddForm: !preState.showAddForm
    }));
    //console.log( this.state.contacts)
  };


  renderItem = (obj) => {
    <Row contact={obj.item}></Row>;
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
    if ( this.state.showAddForm)
      return (
        <AddContactForm onSubmit={ this.addContact}/>
      )

    return (
      <View style={styles.container}>
        <Button title="Contact Show" onPress={this.toggleContacts}></Button>
        <Button title="Sort" onPress={this.sort}></Button>
        <Button title="Add"  onPress={this.toggleAddForm}></Button>
        
        {
            /*  this.state.showContacts && (
          <FlatList 
          renderItem= { obj =>  <Row contact={obj.item}></Row> }
          data ={this.state.contacts}>
          </FlatList>
          ) 
          */
          /*
            this.state.showContacts && (
              <SectionList
                renderItem={(obj) => <Row contact={obj.item}></Row>}
                renderSectionHeader={(obj) => <Text> {obj.section.title}</Text>}
                sections={[
                  { title: 'Contacts', data: this.state.contacts },
                ]}></SectionList>
            ) 
            */
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
