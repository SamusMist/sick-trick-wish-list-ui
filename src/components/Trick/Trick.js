import React from 'react'
import TrickData from '../TrickInfo/TrickInfo.js'

const Trick = ({ trickInfo }) => {
console.log(trickInfo)
const singleTrick = trickInfo.map(trick => {
      return (
        <TrickData
          id={trick.id}
          stance={trick.stance}
          name={trick.name}
          obstacle={trick.obstacle}
          tutorial={trick.tutorial}
        />
      )
    })
  return (
    <div className='trickCard'>
      { singleTrick }
    </div>
  )
}

export default Trick;
