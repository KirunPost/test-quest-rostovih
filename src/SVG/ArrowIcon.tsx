// Компонент для отрисовки SVG кнопочки назад
import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface ArrowIconProps {
  size?: number;
  color?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ size = 24, color = 'white' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 12H19M5 12L12 5M5 12L12 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowIcon;