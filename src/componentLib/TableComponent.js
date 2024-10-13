import React, { useState, useEffect } from 'react';

const TableComponent = ({ initialData }) => {
  const defaultData = [
    { id: 1, testA: 'Value A1', testB: 'Value B1', testC: 'Value C1', testD: 'Value D1' },
    { id: 2, testA: 'Value A2', testB: 'Value B2', testC: 'Value C2', testD: 'Value D2' },
    { id: 3, testA: 'Value A3', testB: 'Value B3', testC: 'Value C3', testD: 'Value D3' },
  ];

  const [tableData, setTableData] = useState(initialData || defaultData);

  useEffect(() => {
    if (initialData) {
      setTableData(initialData);
    }
  }, [initialData]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Test A</th>
          <th>Test B</th>
          <th>Test C</th>
          <th>Test D</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.testA}</td>
            <td>{row.testB}</td>
            <td>{row.testC}</td>
            <td>{row.testD}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
