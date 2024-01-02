import React from "react";
import {Text,StyleSheet, Button} from 'react-native'

export default class OldLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
    };
    console.log('constructor', "A new componect has been constructed");
  }

  // Warning: componentWillMount has been renamed, and is not recommended for use.
  // See https://reactjs.org/link/unsafe-component-lifecycles for details
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount', "The component will mount");
  }

  componentDidMount() {
    console.log('componentDidMount', "The component has been mounted");
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => this.setState({n: json.id}))
  }

  // Warning: componentWillReceiveProps has been renamed, and is not recommended for use.
  // See https://reactjs.org/link/unsafe-component-lifecycles for details
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps', "The component will receive props");
    console.log('nextProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', "The component should update");
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    const res = !(nextProps.n === this.props.n && nextState.n === this.state.n);
    console.log("🚀 ~ file: OldLifeCycle.js:50 ~ OldLifeCycle ~ shouldComponentUpdate ~ res:", res)
    return res
  }

  // Warning: componentWillUpdate has been renamed, and is not recommended for use.
  // See https://reactjs.org/link/unsafe-component-lifecycles for details
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('UNSAFE_componentWillUpdate', "The component will update");
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', "The component did update");
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', "The component is about to be unmounted");
  }

  render(){
    console.log('render', "The component is about to be rendered");
    return (
      <>
        <Text style={styles.text}>OldLifeCycle</Text>
        <Text style={styles.text}>Props n: {this.props.n}</Text>
        <Text style={styles.text}>State n: {this.state.n}</Text>
        <Button title="state n add 1" onPress={() => this.setState({n: this.state.n + 1})}/>
      </>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  }
})

