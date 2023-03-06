import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Switch,
  NativeSelect
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import axios from 'axios';

function Students() {
  const [students, setStudents] = useState([]);
  const [orderBy, setOrderBy] = useState('Name');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    async function fetchStudents() {
      const response = await axios.get('http://localhost:3001/users/students');
      setStudents(response.data.map(student => ({ ...student, active: student.Active })));
    }
    fetchStudents();
  }, []);

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(column);
  };

  const handleToggle = async (event, student) => {
    const isChecked = event.target.checked;
    const apiEndpoint = isChecked ? `/users/${student.PK_User}/activate` : `/users/${student.PK_User}/delete`;
  await axios.get(`http://localhost:3001${apiEndpoint}`);
    const updatedStudents = await axios.get('http://localhost:3001/users/students');
    setStudents(updatedStudents.data);
  };

  const handleUserType = async (event, student) => {
    const newUserType = event.target.value;
    await axios.put(`http://localhost:3001/users/putusers`, { PK_User:student.PK_User, UserType: newUserType })
    const updatedStudents = await axios.get('http://localhost:3001/users/students');
    setStudents(updatedStudents.data);
  };



  const sortData = (data) => {
    const sortedData = data.sort((a, b) => {
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
      <h2>Lista de Estudiantes:</h2>
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
          {sortData(students).map((student) => (
            <TableRow key={student.PK_User}>
              <TableCell>{student.Name}</TableCell>
              <TableCell>{student.Email}</TableCell>
              <TableCell>{student.Register_Date}</TableCell>
              <TableCell>
  <Switch defaultChecked={student.Active} onChange={(e) => handleToggle(e, student)} />
</TableCell>
              <TableCell><NativeSelect defaultValue={"Student"} onChange={(e) => handleUserType(e, student)}>    
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


export default Students