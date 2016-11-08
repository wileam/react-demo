import React from 'react';
import ReactDOM from 'react-dom';

// have state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 64,
      green: 64,
      blue: 64
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }
  render() {
    return (
      <div>
        ({this.state.red},{this.state.green},{this.state.blue})
        <hr/>
        <Slider ref="red" update={this.update} />
        <br/>
        <Slider ref="green" update={this.update} />
        <br/>
        <Slider ref="blue" update={this.update} />
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range"
             min="0"
             max="128"
             onChange={this.props.update}
      />
    )
  }
}

ReactDOM.render(
  <App txt="this is the props text" />,
  document.getElementById('app')
);

export default App;