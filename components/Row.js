import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const Row = props => (
    <View style={styles.row}>
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
)

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: '#d6d7da',    
    backgroundColor: "#ffa0f7",
  },
  nickname: {
    fontSize: 15,
    color: "#56ff6a",
  },
})

export default Row