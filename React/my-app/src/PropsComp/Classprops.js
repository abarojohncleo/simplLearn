import React, { PureComponent } from 'react'

class Classprops extends PureComponent {
  render() {
    return (
      <div>
      <h1>This is Props {this.props.name} from {this.props.place}</h1>
      <p> {this.props.children} </p>
      </div>
    )
  }
}

export default Classprops;
