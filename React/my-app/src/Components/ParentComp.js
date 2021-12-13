import React, { PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'simpleLearn',
    }
  }
  componentDidMount(){
    setInterval(() =>{
      this.setState({
        name: 'simpleLearn'
      });
    }, 1000);
  }
  
  render() {
    console.log('Panrent component')
    return (
      <div>
        I'm parent component
        <RegComp name = {this.state.name} />
        <PureComp name = {this.state.name} />
      </div>
    )
  }
}

export default ParentComp
