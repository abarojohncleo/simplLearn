import React, { PureComponent } from 'react'

class RegComp extends PureComponent {
  render() {
    console.log('regular component render')
    return (
      <div>
        I'm a regular component!!
        {this.props.name}
      </div>
    )
  }
}

export default RegComp
