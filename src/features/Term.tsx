import React from 'react';
import { useGetTermsQuery } from '../services/term/termAPI';
import Card from '../ui/Card/Card';
import ProgressBar from '../ui/ProgressBar/ProgressBar';
import Table, { ColDef } from '../ui/Table/Table';

const colDefs: ColDef[] = [
  {
    displayName: 'Terms',
    field: 'name',
  },
  {
    displayName: '% of total posts',
    field: 'count',
    customRenderer: (colVal) => (
      <ProgressBar progress={colVal} width="200px" height="25px" />
    ),
  },
  {
    displayName: '# of posts',
    field: 'count',
  },
];

const Term = () => {
  const { data, error, isLoading } = useGetTermsQuery();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card>
        <div className="p-2">
          <h1 className="uppercase text-gray-400 text-sm font-bold mb-1">
            Top Terms
          </h1>
          {!error && !isLoading && (
            <Table colDefs={colDefs} dataSource={data || []} />
          )}
        </div>
      </Card>
    </div>
  );
};

export default Term;
