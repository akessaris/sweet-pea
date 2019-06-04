import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const SectionListNicknames = props => {
  const nicknamesByAdjective = props.nicknames.reduce((obj, nickname) => {
    const adjective = nickname.nickname.split(" ")[0].toUpperCase()
    return {
      ...obj,
      [adjective]: [...(obj[adjective] || []), nickname],
    }
  }, {})

  const sections = Object.keys(nicknamesByAdjective).sort().map(adjective => ({
    data: nicknamesByAdjective[adjective],
    title: adjective,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}

SectionListNicknames.propTypes = {
  nicknames: PropTypes.array,
}

export default SectionListNicknames
