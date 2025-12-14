import axios from 'axios';
import React, { Component } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0, users: null, user: null };
  }

  render() {
    console.log("🚀 ~ ClassComponent ~ render ~ render:")
    const { count } = this.state;

    const increment = () => {
      // this.setState({ count: this.state.count + 1 });
      this.num++
      console.log("🚀 ~ ClassComponent ~ increment ~ this.num:", this.num)
    }

    return (
      <>
        <h1>ClassComponent</h1>
        <h2>state count - {count}</h2>
        <h2>instance variable num {this.num}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>update State</button>
        <button onClick={increment}>Click Me</button>
      </>
    )
  }

  async componentDidMount() {
    const response = await axios.get(URL);
    const data = response.data;
    // this.setState({ users: data });
    console.log("🚀 ~ ClassComponent ~ componentDidMount ~ data:", data)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🚀 ~ ClassComponent ~ shouldComponentUpdate ~ shouldComponentUpdate:")
    return true;
  }

  async componentDidUpdate() {
    console.log("🚀 ~ ClassComponent ~ componentDidUpdate ~ componentDidUpdate:");
    const { data } = await axios.get(`${URL}/${this.state.count}`);
  }

  componentWillUnmount() {
    console.log("🚀 ~ ClassComponent ~ componentWillUnmount ~ componentWillUnmount:");
  }


}

export default ClassComponent;