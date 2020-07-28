import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const TableBodyRow = ({ user, columns, onClick}) => {

    return (
      <TableRow hover onClick={onClick}>
        {columns.map(({ name, id }) => (
          <TableCell key={id}>{user[name] !== undefined ? user[name] : ""}</TableCell>
        ))}
      </TableRow>
    );
};

export default TableBodyRow;
