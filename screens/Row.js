
import React from 'react'

import {View, Text, StyleSheet }  from 'react-native'

const stytles = StyleSheet.create(
  {
    row: { padding: 10}
  }
)


const Row = props => (
                    <View key={props.contact.key} style={stytles.row}>
              <Text>{props.contact.name}</Text>
              <Text>{props.contact.phone}</Text>
              </View>
)

export default Row
