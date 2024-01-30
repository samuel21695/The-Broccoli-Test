import React, { useState } from 'react';
import './Slider.css'; // 슬라이더의 CSS 스타일링 파일

const SliderComponent: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className={`slider-container broccoli-${value}`}>
      <input 
        type="range" 
        min={1} 
        max={4} 
        value={value} 
        onChange={handleChange} 
        className="slider" 
      />
      <span className="value">{value}</span>
      {/* 페이지 변화 등을 위한 로직 */}
    </div>
  );
};

export default SliderComponent;
