import React from 'react';
import {Text, SectionList} from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row.js';

const SectionContactList = (props) => {


  // Each section with the 1st letter of contacts
  //  key - Object array
  const contactsByLetter = props.contacts.reduce(
    (result, contact) => {
      const firstLetter = contact.name[0].toUpperCase()

      return {
        ...result,
        [firstLetter]: [...(result[firstLetter] || []), contact],
      }
    }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => (
    {
      title: letter,
      data: contactsByLetter[letter]
    }
  ))

  /*
  return (
    <SectionList
      renderItem={(obj) => <Row contact={obj.item}></Row>}
      renderSectionHeader={(obj) => <Text> {obj.section.title}</Text>}
      sections={[{ title: 'Contacts', data: props.contacts }]}></SectionList>
  );
  */

  return (
    <SectionList
      renderItem={(obj) => <Row contact={obj.item} onSelectContact ={ props.onSelectContact } ></Row>}
      renderSectionHeader={(obj) => <Text> {obj.section.title}</Text>}
      sections={sections}></SectionList>
  );


};

SectionContactList.prototype = {
  contacts: PropTypes.Array,
};

export default SectionContactList;
