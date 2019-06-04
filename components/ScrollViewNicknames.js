import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const ScrollViewNicknames = props => (
  <ScrollView>
    {props.nicknames.map(nickname => <Row {...nickname} />)}
  </ScrollView>
)

ScrollViewNicknames.propTypes = {
  nicknames: PropTypes.array,
}

export default ScrollViewNicknames