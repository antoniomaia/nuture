import React, { useEffect , useState} from 'react';
import './style.css';

function RainbowSpan({deltaY, children} ) {

  return (
    <span style={{ backgroundPositionY: `-${deltaY}px` }}  className={`rainbow`}>
      {children}
    </span>
  );
}

export default RainbowSpan;
