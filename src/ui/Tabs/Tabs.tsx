import React, { useState } from 'react';
export interface TabsProps {
  tabs: string[];
  active: string;
  onTabChange?: (activeTab: string) => void;
  children: React.ReactNode;
}

export const Tabs = ({ onTabChange, children, tabs, active }: TabsProps) => {
  const [isShowHeader, setIsShowHeader] = useState(true);
  const [activeTab, setActiveTab] = useState(active);
  const getActiveTabClass = (t: string) =>
    t === activeTab ? 'bg-white text-gray-500' : '';

  const tabClickHandler = (tab: string) => {
    return () => {
      setActiveTab(tab);
      onTabChange && onTabChange(tab);
    };
  };

  return (
    <div className="h-full">
      {isShowHeader && (
        <div className="bg-gray-500 grid grid-cols-8 text-white text-base font-bold uppercase">
          <div className="col-span-7 flex gap-2 items-center justify-center">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer p-1 ${getActiveTabClass(tab)}`}
                onClick={tabClickHandler(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div
            className="col-span-1 border-solid border-l-[1px] flex justify-center items-center cursor-pointer"
            onClick={() => setIsShowHeader((isShow) => !isShow)}
          >
            <span>Hide</span>
          </div>
        </div>
      )}
      <div className="w-full h-full overflow-y-hidden">{children}</div>
    </div>
  );
};
