import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TableContainer from "@material-ui/core/TableContainer";
import { Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Paper, TablePagination } from '@material-ui/core';

import { fetchUsers, updateUsersAction } from '../../actions';
import TableBodyRow from './table-body-row';
import { getSmallDataUsers, getBigDataUsers } from '../../api';
import Loader from '../loader';
import ErrorBoundary from '../error-boundary';

const CustomTable = ({
  loadUsers,
  users,
  tableHeadCells,
  updateUsers,
  filterField,
  setUser,
  isSmallData,
  loading,
  error,
}) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [sortingParams, setSortingParams] = useState({
    directionUp: true,
    field: null,
  });

  const getData = isSmallData ? getSmallDataUsers : getBigDataUsers;

  useEffect(() => {
    loadUsers(getData);
    setPage(0);
    setUser({})
  }, [getData]);


  useEffect(() => {
    setPage(0);
  }, [filterField]);

  const filterArray = (arrayItem, searchString) => {
    return tableHeadCells.find(({name}) => {
      return ~arrayItem[name].toString().toLowerCase().indexOf(searchString.toLowerCase());
    }) ? true : false;
  };

  const filteredUsers = users.filter((item) => filterArray(item, filterField));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortTable = (array, field) => {
    const newDirection = sortingParams.field === field ? !sortingParams.directionUp : true;
    updateUsers(array.sort((a, b) => {
      if (newDirection) {
        return (a[field] > b[field]) ? 1 : -1
      } else {
        return (a[field] < b[field]) ? 1 : -1
      }
    }));
    setSortingParams({ directionUp: newDirection, field })
  }

const renderTableHeadeCell = ({name, title, id}) => {
  return (
    <TableCell onClick={() => handleSortTable(users, name)} key={id}>
      <TableSortLabel
        active={sortingParams.field === name}
        direction={sortingParams.directionUp ? "asc" : "desc"}>{title}</TableSortLabel>
    </TableCell>
  );
};

const renderTableBodyRow = (user, index) => {
  return (
    <TableBodyRow
      onClick={() => setUser(user)}
      key={user.phone}
      user={user}
      columns={tableHeadCells}
    />
  );
};

  return (
    <Paper style={{ marginTop: 20}}>
      {!loading && ! error && (<>
      <TableContainer className="table-container">
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>{tableHeadCells.map(renderTableHeadeCell)}</TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map(renderTableBodyRow)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </>)}
      {loading && (<div className="table-loading"> 
        <Loader />
      </div>
      )}
      {error && <ErrorBoundary />}
    </Paper>
  );
};

const mapStateToProps = (state) => {
    return {
      users: state.users,
      tableHeadCells: state.tableHeadCells,
      error: state.error,
      loading: state.loading,
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (func) => fetchUsers(func, dispatch),
    updateUsers: (users) => dispatch(updateUsersAction(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);