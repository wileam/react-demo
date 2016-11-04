import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount() {
    console.log("mounting") // only called once
  }
  componentDidMount() {
    console.log("mounted") // only called once
  }
  render() {
    console.log("rendering")
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
  componentWillUnmount() {
    console.log("bye")
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById('app')
);

export default Wrapper;