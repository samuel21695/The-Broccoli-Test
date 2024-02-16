import React, { useState, useEffect } from 'react';

import ConditionOne from './results/ConditionOne';
import ConditionTwo from './results/ConditionTwo';
import ConditionThree from './results/ConditionThree';
import ConditionFour from './results/ConditionFour';
import ConditionFive from './results/ConditionFive';

// Material UI
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import LinkIcon from '@mui/icons-material/Link';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

import './BroccoliTest.css'

function Test () {
  // 먹은 브로콜리 수와 애니메이션 횟수를 상태로 관리
  const [eatenBroccoli, setEatenBroccoli] = useState(0);
  // 걀과 표시 상태 추가
  const [showResults, setShowResults] = useState(false); 
  const [animationKey, setAnimationKey] = useState('');

  useEffect(() => {
    // 페이지 로드 시 localStorage에서 eatenBroccoli 값을 가져와 상태로 설정합니다.
    const savedEatenBroccoli = localStorage.getItem('eatenBroccoli');
    if (savedEatenBroccoli !== null) {
      setEatenBroccoli(parseInt(savedEatenBroccoli));
    }
  }, []);

  
  // 브로콜리를 클릭했을 때 실행되는 함수
  const eatBroccoli = () => {
    // 애니메이션 횟수가 5 미만일 때 애니메이션 실행
    if( eatenBroccoli < 5) {
      setEatenBroccoli(eatenBroccoli + 1); // 먹은 브로콜리 수 증가
      setAnimationKey(Math.random().toString(36)); // 애니메이션 키 업데이트
    }
  }
  
  const handleAnimationEnd = () => {
    // 애니메이션이 끝나면 다시 클래스를 초기화
    const targetElement = document.querySelector('.target');
    if (targetElement) {
        targetElement.classList.remove(`animation-${eatenBroccoli}`);
    }
  };
    
  const handleReset = () => {
    // localStorage에서 eatenBroccoli 값을 제거하고 eatenBroccoli 상태를 초기화합니다.
    localStorage.removeItem('eatenBroccoli');
    setEatenBroccoli(0);
  };

  return (
    <div className='test-container'>
      <div className='broccoliContents'>
        {/* <h2>Would you eat raw broccoli?🤔</h2> */}
        <div className='broccoliStatus'>
          <p>🥦 X  {eatenBroccoli}</p>
          <button onClick={handleReset}>🔄️</button>        
        </div>
        <div 
          key={animationKey}
          className={`target animation-${eatenBroccoli+ 1}`}
          onClick={eatBroccoli} // 클릭 시 먹은 브로콜리 수를 증가시키고 애니매이션 횟수 증가
          onAnimationEnd={handleAnimationEnd}
        ></div>
        {/* 먹은 브로콜리 수 */}
      </div>
        {/* 결과 표시 상태에 따라 컴포넌트 렌더링 */}
        <button className = 'resultBtn' onClick={() => setShowResults(!showResults)}>
          Nope!
        </button>
      <div className='conditions '>
        {showResults && (
          <>
            {eatenBroccoli === 0 && <ConditionOne/>}
            {eatenBroccoli === 1 && <ConditionTwo/>}
            {eatenBroccoli === 2 && <ConditionThree/>}
            {eatenBroccoli === 3 && <ConditionFour/>}
            {eatenBroccoli > 4 && <ConditionFive/>}
            <Stack direction="row" spacing={1}>
              <IconButton>
                <SaveAltIcon color='success'/>
              </IconButton>
              <IconButton>
                <LinkIcon color='success'/>
              </IconButton>
            </Stack>
          </>
        )}
      </div>
    </div>
  )
}

export default Test;