import React from 'react'

const TrickData = ({ id, stance, name, obstacle, tutorial, }) => {
  return (
    <div>
      <p>{stance}{name}</p>
      <p>{`obstacle: ${obstacle}`}</p>
      <p>Link to Tutorial:</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default TrickData;
