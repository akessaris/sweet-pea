import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const FlatListNicknames = props => (
  <FlatList renderItem={renderItem} data={props.nicknames} />
)

FlatListNicknames.propTypes = {
  nicknames: PropTypes.array,
}

export default FlatListNicknames
