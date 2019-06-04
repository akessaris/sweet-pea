import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Nickame = props => (
  <View>
    <Text style={styles.nickname}>{props.nickname}</Text>
  </View>
)

const styles = StyleSheet.create({
  nickname: {
    fontSize: 30,
    color: "#56ff6a",
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  }
})

export default Nickame