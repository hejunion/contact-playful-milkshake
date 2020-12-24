
import React from 'react'

import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const stytles = StyleSheet.create(
  {
    row: {padding: 10}
  }
)


const Row = props => (
  <TouchableOpacity key={props.contact.key} style={stytles.row} onPress={()=>{
       props.onSelectContact ( props.contact );
  } } >
    <Text>{props.contact.name}</Text>
    <Text>{props.contact.phone}</Text>
  </TouchableOpacity>
)

export default Row
