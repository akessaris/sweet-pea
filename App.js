import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { Constants } from 'expo';

import nicknames from './nicknames';
import Nickname from './components/Nickname'
import ScrollViewNicknames from './components/ScrollViewNicknames'
import FlatListNicknames from './components/FlatListNicknames'
import SectionListNicknames from './components/SectionListNicknames'

export default class App extends React.Component {
  state = {
    nicknames: nicknames,
    nickname: "",
    showFullList: false,
  }

  componentDidMount() {
    this.randNickname()
  }

  randNickname = () => {
      this.setState(prevState => ({
        nickname: this.state.nicknames[Math.floor(Math.random()*this.state.nicknames.length)]["nickname"]
      }))
   }

  toggleFullList = () => {this.setState(prevState => ({showFullList: !prevState.showFullList}))}
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sweet Pea</Text>
        <Text style={styles.paragraph}>Your nickname of the day is...</Text>
        <Nickname nickname={this.state.nickname}/>
        <Button title="New Nickname" onPress={this.randNickname} />
        <Button title="Toggle Full List" onPress={this.toggleFullList}/>
        {this.state.showFullList && <SectionListNicknames nicknames={this.state.nicknames} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffa0f7",
  },
  title: {
    margin: 30,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#56ff6a",
  },
  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
});