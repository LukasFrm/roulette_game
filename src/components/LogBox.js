import React from 'react'

function LogBox(props) {
  const { logs } = props
  return (
    <React.Fragment>
      <h4>Log</h4>
      <pre id="log_box">
        {logs.map(item => {
          return item 
        })}
      </pre>
    </React.Fragment>
  )
}

export default LogBox
