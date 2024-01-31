import React, { useState } from 'react';
import './BroccoliTest.css'

function Test () {
  const [eatenBroccoli, setEatenBroccoli] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  
  return (
    <div className='test-container'>
      <div className='target'>
      </div>
    </div>
  )
}

export default Test;