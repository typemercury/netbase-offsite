import React, { useState } from 'react';
import CardFooter from './CardFooter';
import CardHeader1 from './CardHeader1';
import CardHeader2 from './CardHeader2';

export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  const [isShowHeader2, setIsShowHeader2] = useState(true);
  return (
    <div className="w-[400px] max-w-[400px] h-[300px] max-h-[300px] border-solid border-[1px] flex flex-col">
      <CardHeader1 />
      {isShowHeader2 && (
        <CardHeader2 onHide={() => setIsShowHeader2((isShow) => !isShow)} />
      )}
      <div className="flex-auto w-full overflow-y-hidden">{children}</div>
      <CardFooter />
    </div>
  );
};

export default Card;
