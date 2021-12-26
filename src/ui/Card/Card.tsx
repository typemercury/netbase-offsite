import React from 'react';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="w-[400px] max-w-[400px] h-[300px] max-h-[300px] border-solid border-[1px] flex flex-col">
      <CardHeader />
      <div className="flex-auto w-full overflow-y-hidden">{children}</div>
      <CardFooter />
    </div>
  );
};

export default Card;
