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

//import store from '../redux/store'
import {connect} from 'react-redux'
// You can import from local files

// or any pure javascript modules available in npm
 class ContactListScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'List of Contacts',
      headerRight: <Button title='Add' onPress={ ()=>{

        navigation.navigate('AddContact', {
          'callFrom': 'Contact List Screen'
        })


      } }></Button>
    }
  }

  //State
  state = {
    showContacts: true,
  };

  // Variable of function
  toggleContacts = () => {
    this.setState((preState) => ({
      showContacts: !preState.showContacts,
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

/*
  addContact = newContact => {
     console.log('Add...' + newContact)
     this.setState( preState=> ( { showAddForm: false, contacts: [ ...preState.contacts, newContact ]}))
  }

*/
  showAddScreen = () => {
     this.props.navigation.navigate('AddContact', {
       'callFrom': 'Contact List Screen'
     })
  }
  // Render


  render() {


    return (
      <View style={styles.container}>
        <Button title="Contact Show" onPress={this.toggleContacts}></Button>
        <Button title="Add" onPress={this.showAddScreen } ></Button>

        {

          this.state.showContacts && (
          <ContactList contacts={this.props.contacts}
              onSelectContact ={ ( contact )=>{
                 console.log('Going to detail')
                 this.props.navigation.navigate('ContactDetail', {
                    name: contact.name
                 })

              }}
          ></ContactList>
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


const mapStateToProps = state=> (
  {
    contacts: state.contacts
  })
export default connect( mapStateToProps) ( ContactListScreen)