import React from 'react';

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
                  <td key={def.displayName}>
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
