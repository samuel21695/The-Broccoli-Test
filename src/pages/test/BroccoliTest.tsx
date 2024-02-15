import React, { useState } from 'react';

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
  
  // 브로콜리를 클릭했을 때 실행되는 함수
  const eatBroccoli = () => {
    // 애니메이션 횟수가 5 미만일 때 애니메이션 실행
    if( eatenBroccoli < 5) {
      setEatenBroccoli(eatenBroccoli + 1); // 먹은 브로콜리 수 증가
    }
  }

  return (
    <div className='test-container'>
      <div className='broccoliContents'>
        <h1>Feeling hungry?🤔</h1>
        <div 
          className={`target animation-${eatenBroccoli+ 1}`}
          onClick={eatBroccoli} // 클릭 시 먹은 브로콜리 수를 증가시키고 애니매이션 횟수 증가
        ></div>
        {/* 먹은 브로콜리 수 */}
        <p>Eaten Broccoli: {eatenBroccoli}</p>        
      </div>
      <div className='conditions '>
        {/* 결과 표시 상태에 따라 컴포넌트 렌더링 */}
        <button className = 'resultBtn' onClick={() => setShowResults(!showResults)}>
          Nope!
        </button>
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