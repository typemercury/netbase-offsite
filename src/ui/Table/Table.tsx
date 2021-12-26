import React from 'react';
import classes from './Table.module.css';

export interface ColDef {
  displayName: string;
  field: string;
  customRenderer?: (colVal: any) => JSX.Element;
}

export interface TableProps {
  colDefs: ColDef[];
  dataSource: any[];
}

const Table = ({ colDefs, dataSource }: TableProps) => {
  return (
    <table className={`w-full ${classes['head-body-gap']}`}>
      <thead className="border-solid border-b-2 border-gray-300 mb-1">
        <tr>
          {colDefs &&
            colDefs.map((def) => (
              <th
                key={def.displayName}
                className="first:text-left first:pl-2 last:text-right text-xs font-medium uppercase"
              >
                {def.displayName}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {dataSource &&
          dataSource.map((data) => (
            <tr key={data.name}>
              {colDefs &&
                colDefs.map((def) => (
                  <td
                    key={def.displayName}
                    className="first:text-left last:text-right p-2 font-bold"
                  >
                    {def.customRenderer
                      ? def.customRenderer(data[def.field])
                      : data[def.field]}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
