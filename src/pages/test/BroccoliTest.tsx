import React, { useState } from 'react';

import ConditionOne from './results/ConditionOne';
import ConditionTwo from './results/ConditionTwo';
import './BroccoliTest.css'

function Test () {
  // 먹은 브로콜리 수와 애니메이션 횟수를 상태로 관리
  const [eatenBroccoli, setEatenBroccoli] = useState(0);
  
  // 브로콜리를 클릭했을 때 실행되는 함수
  const eatBroccoli = () => {
    // 애니메이션 횟수가 5 미만일 때 애니메이션 실행
    if( eatenBroccoli < 5) {
      setEatenBroccoli(eatenBroccoli + 1); // 먹은 브로콜리 수 증가
    }
  }

  return (
    <div className='test-container'>
      {eatenBroccoli < 5 && (
        <div 
          className={`target animation-${eatenBroccoli+ 1}`}
          onClick={eatBroccoli} // 클릭 시 먹은 브로콜리 수를 증가시키고 애니매이션 횟수 증가
        ></div>
      )}
      {/* 먹은 브로콜리 수 */}
      <p>Eaten Broccoli: {eatenBroccoli}</p>
      {eatenBroccoli === 1 && (
        <ConditionTwo/>
      )}
      {eatenBroccoli === 2 && (
        <ConditionTwo/>
      )}
    </div>
  )
}

export default Test;