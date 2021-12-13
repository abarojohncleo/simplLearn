// my app 
/*import FunctionalComp from './Components/FunctionalComp'
import {ClassComp, ClassComp1} from './Components/ClassComp'
import Click from './Components/Click'
import Counter from './Components/Counter'
import ParentComp from './Components/ParentComp'

function App() {
  return (
    <div>
    <h1>Hello there !!</h1>
    <h2>This is a react component</h2>
    <FunctionalComp/>
    <ClassComp/>
    <ClassComp1/>
    <Click/>
    <Counter/>
    <ParentComp/>
    </div>
  );
}

export default App;*/

// my props
/*import React from 'react'
import Classprops from './PropsComp/Classprops';
import Funcionprops from './PropsComp/Functionprops'
class App extends React.Component {
  render() {
    return (
      <div>
        <Classprops name="Child-1" place ='Place X'>
          <p>Child Component</p>
        </Classprops>
        <Classprops name="Child-2"place ='Place Y'>
          <button>click</button>
        </Classprops>
        <Classprops name="Child-3"place ='Place Z'/>
        <Funcionprops name="Child-4"place ='PlaceA'/>
      </div>
    )
  }
}

export default App;*/

// my state
import React  from 'react'
import "./App.css"
import NewComp from './StateComp/NewComp'
class App extends React.Component {
  styles = {
    fontStyle:"bold",
    color:'teal'
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp/>
      </div>
    )
  }
}

export default App;
