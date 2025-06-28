import React from 'react';

export function GridBackground({ children }) {
  return (
    <div className="relative h-full w-full bg-black">
      {/* Lines with reduced visibility */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Circle with reduced visibility */}
      <div className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb1a,#000)]"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}