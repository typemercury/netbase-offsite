import React from 'react';
import { useGetTermsQuery } from '../services/term/termAPI';
import Card from '../ui/Card/Card';
import Table, { ColDef } from '../ui/Table/Table';

const colDefs: ColDef[] = [
  {
    displayName: 'Terms',
    field: 'name',
  },
  {
    displayName: '% of total posts',
    field: 'count',
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
        <div>
          <h1 className="uppercase">Top Terms</h1>
          {!error && !isLoading && (
            <Table colDefs={colDefs} dataSource={data || []} />
          )}
        </div>
      </Card>
    </div>
  );
};

export default Term;
