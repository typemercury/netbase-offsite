import React from 'react';

export interface ColDef {
  displayName: string;
  field: string;
}

export interface TableProps {
  colDefs: ColDef[];
  dataSource: any[];
}

const Table = ({ colDefs, dataSource }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {colDefs &&
            colDefs.map((def) => (
              <th key={def.displayName}>{def.displayName}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {dataSource &&
          dataSource.map((data) => (
            <tr key={data.name}>
              {colDefs &&
                colDefs.map((def) => (
                  <td key={def.displayName}>{data[def.field]}</td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
