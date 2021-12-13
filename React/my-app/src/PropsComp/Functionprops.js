import React from 'react';

function Functionprops (props){
  return (
    <div>
      <h3>this is a func props</h3>,
      <h3>Hello {props.name} from {props.place} props</h3>
    </div>
  )
}

export default Functionprops;