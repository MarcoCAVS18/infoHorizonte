import React from 'react';
import '../index.css'; 

const Background = () => {
  return (
    <div className="background w-screen h-screen absolute top-0 left-0" style={{ backgroundColor: '#F3B53E', zIndex: -1 }}>
    </div>
  );
};

export default Background;
