import React, {Component} from 'react'

export class NewComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hit the button to subscribe!",
       sub: "Subscribe"
    }
  };

  styles = {
    fontStyle:"italic",
    color:'purple'
  };

  ButtonChange = () =>{
    this.setState({
      message: 'Hit the bell button for updates!',
      sub:'Thanks for subscribing!!'
    })
  }
  
  render() {
    return (
      <div className="App">
        <h3 style = {this.styles}>
          {this.state.message}
        </h3>
        <button onClick={this.ButtonChange}>
          {this.state.sub}
        </button>
      </div>
    )
  };
};

export default NewComp
