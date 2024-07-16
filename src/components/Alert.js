import React from 'react'

function Alert(props) {
    const capitalize=(str)=>{
        const low = str.toLowerCase();
        return low[0].toUpperCase() + low.slice(1);
    }
  return (
    <div className="container" style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
    </div>}
    </div>
  )
}
// If props.alert will be null then Alert function will not run 
export default Alert
