import React, { useState, useEffect } from 'react';
import { Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, NativeSelect} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../../../models/baseUrl';

function AdvUsers() {

  const [advUsers, setAdvUsers] = useState([]);
  const [orderBy, setOrderBy] = useState('Name');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    async function fetchAdvUsers() {
      const response = await axios.get(`${baseUrl}/users/advusers`);
      // const data = await response.json();
    //   console.log(response.data)
      setAdvUsers(response.data);
    }
    fetchAdvUsers();
  }, []);
  
const handleSort = (column) => {
  const isAsc = orderBy === column && order === 'asc';
  setOrder(isAsc ? 'desc' : 'asc');
  setOrderBy(column);
}

const handleToggle = async (event, advUser) => {
  const isChecked = event.target.checked;
  const apiEndpoint = isChecked ? `/users/${advUser.PK_User}/activate` : `/users/${advUser.PK_User}/delete`;
  await axios.put(`${baseUrl}${apiEndpoint}`);
  const updatedAdvUser = await axios.get(`${baseUrl}/users/advusers`);
  setAdvUsers(updatedAdvUser.data);
};

const handleUserType = async (event, advUser) => {
  const newUserType = event.target.value;
  await axios.put(`${baseUrl}/users/putusers`, { PK_User:advUser.PK_User, UserType: newUserType })
  const updatedAdvUsers = await axios.get(`${baseUrl}/users/advUsers`);
  setAdvUsers(updatedAdvUsers.data);
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
  <h2>Lista de Administradores:</h2>
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
            <TableCell>
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortData(advUsers).map((advUser) => (
            <TableRow key={advUser.PK_User}>
              <TableCell>{advUser.Name}</TableCell>
              <TableCell>{advUser.Email}</TableCell>
              <TableCell>{advUser.Register_Date}</TableCell>
              <TableCell>
  <Switch defaultChecked={advUser.Active} onChange={(e) => handleToggle(e, advUser)} />
</TableCell>
<TableCell><NativeSelect defaultValue={"AdvUser"} onChange={(e) => handleUserType(e, advUser)}>    
                <option value={"Student"}>Student</option>
                <option value={"Instructor"}>Instructor</option>
                <option value={"AdvUser"}>AdvUser</option></NativeSelect></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
  
}


export default AdvUsers
