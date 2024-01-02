import React from "react";
import { Text, StyleSheet, Button } from 'react-native'

export default class NewLifeCycle extends React.Component {

  state = {
    n: this.props.n
  }

  static getDerivedStateFromProps(props, state) {
    console.log("🚀 ~ file: NewLifeCycle.js:11 ~ NewLifeCycle ~ getDerivedStateFromProps ~ props, state:", props, state)
    return {
      n: props.n
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("🚀 ~ file: NewLifeCycle.js:17 ~ NewLifeCycle ~ getSnapshotBeforeUpdate ~ prevProps, prevState", prevProps, prevState)
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("🚀 ~ file: NewLifeCycle.js:22 ~ NewLifeCycle ~ componentDidUpdate ~ prevProps, prevState, snapshot", prevProps, prevState, snapshot)
  }

  render() {
    return (
      <>
        <Text>{this.state.n}</Text>
        <Button title="state n add 1" onPress={() => this.setState({ n: this.state.n + 1 })} />
      </>
    )
  }
}
