import React, { useState, useEffect } from 'react';
import { Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { TableSortLabel } from '@mui/material';
import axios from 'axios';

function BannedUsers() {

  const [bannedUsers, setBannedUsers] = useState([]);
  const [orderBy, setOrderBy] = useState('Name');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    async function fetchBannedUsers() {
      const response = await axios.get('http://localhost:3001/users/bannedusers');
      setBannedUsers(response.data);
    }
    fetchBannedUsers();
  }, []);
  
const handleSort = (column) => {
  const isAsc = orderBy === column && order === 'asc';
  setOrder(isAsc ? 'desc' : 'asc');
  setOrderBy(column);
}

const handleToggle = async (event, banneduser) => {
  const isChecked = event.target.checked;
  const apiEndpoint = isChecked ? `/users/${banneduser.PK_User}/activate` : `/users/${banneduser.PK_User}/delete`;
  await axios.get(`http://localhost:3001${apiEndpoint}`);
  const updatedBannedUsers = await axios.get('http://localhost:3001/users/bannedusers');
  setBannedUsers(updatedBannedUsers.data);
};

const sortData = (data) => {
  const sortedData = data.sort((a,b) => {
      if (order === 'asc') {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      } else {
        return a[orderBy] > b[orderBy] ? -1 : 1;
      }
    });
    return sortedData;
  };


  return (
<>
  <h2>Lista de Usuarios Bloqueados:</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel active={orderBy === 'Name'} direction={orderBy === 'Name' ? order : 'asc'} onClick={() => handleSort('Name')}>
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel active={orderBy === 'Email'} direction={orderBy === 'Email' ? order : 'asc'} onClick={() => handleSort('Email')}>
                Email
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel active={orderBy === 'Register_Date'} direction={orderBy === 'Register_Date' ? order : 'asc'} onClick={() => handleSort('Register_Date')}>
                Register Date
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel active={orderBy === 'Active'} direction={orderBy === 'Active' ? order : 'asc'} onClick={() => handleSort('Active')}>
                Active
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortData(bannedUsers).map((bannedUser) => (
            <TableRow key={bannedUser.PK_User}>
              <TableCell>{bannedUser.Name}</TableCell>
              <TableCell>{bannedUser.Email}</TableCell>
              <TableCell>{bannedUser.Register_Date}</TableCell>
              <TableCell>
  <Switch defaultChecked={bannedUser.Active} onChange={(e) => handleToggle(e, bannedUser)} />
</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
  
}


export default BannedUsers