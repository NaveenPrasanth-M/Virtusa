import {Component} from 'react';

const App = () => {
  const user = 'Guest';

  return (
    <Message user={user} />
  );
}

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({display: !this.state.display});
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        {this.state.display && <h1>Welcome {this.props.user}!</h1>}
      </div>
    );
  }
};

export default App;