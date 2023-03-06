import React, { useState, useEffect } from 'react';
import { Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, NativeSelect } from '@mui/material';
import { TableSortLabel } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../../../models/baseUrl';

function Instructors() {

  const [instructors, setInstructors] = useState([]);
  const [orderBy, setOrderBy] = useState('Name');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    async function fetchInstructors() {
      const response = await axios.get(`${baseUrl}/users/instructors`);
      // const data = await response.json();
      // console.log(response.data)
      setInstructors(response.data);
    }
    fetchInstructors();
  }, []);

const handleSort = (column) => {
  const isAsc = orderBy === column && order === 'asc';
  setOrder(isAsc ? 'desc' : 'asc');
  setOrderBy(column);
}

const handleToggle = async (event, instructor) => {
  const isChecked = event.target.checked;
  const apiEndpoint = isChecked ? `/users/${instructor.PK_User}/activate` : `/users/${instructor.PK_User}/delete`;
  await axios.get(`${baseUrl}/${apiEndpoint}`);
  const updatedInstructors = await axios.get(`${baseUrl}/users/instructors`);
  setInstructors(updatedInstructors.data);
};

  const handleUserType = async (event, instructor) => {
    const newUserType = event.target.value;
    await axios.put(`${baseUrl}/users/putusers`, { PK_User:instructor.PK_User, UserType: newUserType })
    const updatedInstructors = await axios.get(`${baseUrl}/users/instructors`);
    setInstructors(updatedInstructors.data);
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
  <h2>Lista de Instructores:</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel active={orderBy === 'Name'} direction={orderBy === 'Name' ? order : 'asc'} onClick={() => handleSort('Name')}>
                Nombre
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel active={orderBy === 'Email'} direction={orderBy === 'Email' ? order : 'asc'} onClick={() => handleSort('Email')}>
                Email
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel active={orderBy === 'Register_Date'} direction={orderBy === 'Register_Date' ? order : 'asc'} onClick={() => handleSort('Register_Date')}>
                Fecha de Registro
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel active={orderBy === 'Active'} direction={orderBy === 'Active' ? order : 'asc'} onClick={() => handleSort('Active')}>
                Activo
              </TableSortLabel>
            </TableCell>
            <TableCell>
              Editar Rol
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortData(instructors).map((instructor) => (
            <TableRow key={instructor.PK_User}>
              <TableCell>{instructor.Name}</TableCell>
              <TableCell>{instructor.Email}</TableCell>
              <TableCell>{instructor.Register_Date}</TableCell>
              <TableCell>
  <Switch defaultChecked={instructor.Active} onChange={(e) => handleToggle(e, instructor)} />
</TableCell>
              <TableCell><NativeSelect defaultValue={"Instructor"} onChange={(e) => handleUserType(e, instructor)}>    
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


export default Instructors
