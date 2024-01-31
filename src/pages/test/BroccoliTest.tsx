import React, { useState } from 'react';
import './BroccoliTest.css'

function Test () {
  // 먹은 브로콜리 수와 애니메이션 횟수를 상태로 관리
  const [eatenBroccoli, setEatenBroccoli] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  
  // 브로콜리를 클릭했을 때 실행되는 함수
  const eatBroccoli = () => {
    // 애니메이션 횟수가 5 미만일 때 애니메이션 실행
    if( animationCount < 5) {
      setAnimationCount(animationCount + 1);  // 애니메이션 횟 수 증가
    }
  }

  const onAnimationEnd = () => {
    // 애니메이션이 5번 실행된 후 브쿠롤리 수를 증가시키고 애니메이션 횟수 초기화
    if (animationCount === 5) {
      setEatenBroccoli(eatenBroccoli + 1); // 먹은 브로콜리 수 증가
      setAnimationCount(0); // 애니메이션 횟수 초기화
    } 
  }

  return (
    <div className='test-container'>
      <div className='target'>
      </div>
    </div>
  )
}

export default Test;