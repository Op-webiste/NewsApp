import React from 'react'
import loading2 from './loading2.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={loading2} alt="Not loaded" />
    </div>
  )
}
