import React, { useState } from 'react';
import { useGetTermsQuery } from '../services/term/termAPI';
import Card from '../ui/Card/Card';
import ProgressBar from '../ui/ProgressBar/ProgressBar';
import Table, { ColDef } from '../ui/Table/Table';
import { Tabs } from '../ui/Tabs/Tabs';

const Term = () => {
  const { data, error, isLoading } = useGetTermsQuery();
  const [activeTab, setActiveTab] = useState('all');

  const colDefs: ColDef[] = [
    {
      displayName: 'Terms',
      field: 'name',
    },
    {
      displayName: '% of total posts',
      field: 'count',
      customRenderer: (colVal) => (
        <ProgressBar progress={colVal} width="180px" height="25px" />
      ),
    },
    {
      displayName: '# of posts',
      field: 'count',
    },
  ];

  const tabs = ['all', 'tw', 'fb', 'ig', 'yt'];

  const tabChangeHandler = (activeTab: string) => {
    setActiveTab(activeTab);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card>
        <Tabs tabs={tabs} active={activeTab} onTabChange={tabChangeHandler}>
          {activeTab === 'all' && (
            <div className="p-2 w-full h-full">
              <h1 className="uppercase text-gray-400 text-sm font-bold mb-1">
                Top Terms
              </h1>
              <div className="w-full h-full overflow-y-scroll pr-2 pb-16">
                {!error && !isLoading && (
                  <Table colDefs={colDefs} dataSource={data || []} />
                )}
              </div>
            </div>
          )}
        </Tabs>
      </Card>
    </div>
  );
};

export default Term;
