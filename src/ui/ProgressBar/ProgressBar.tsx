import React from 'react';

export interface ProgressBarProps {
  progress: number;
  width: string;
  height: string;
}

const ProgressBar = ({ progress, width, height }: ProgressBarProps) => {
  const barWidth = `${width}*${progress / 100}`;
  return (
    <div className="bg-gray-200 text-right relative" style={{ width, height }}>
      <span
        className="absolute right-1 top-0 h-full"
        style={{
          lineHeight: height,
        }}
      >
        {progress}%
      </span>
      <div
        className="bg-yellow-400 h-full"
        style={{ width: `calc(${barWidth})` }}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  progress: 0,
  width: '0px',
  height: '0px',
} as ProgressBarProps;

export default ProgressBar;
