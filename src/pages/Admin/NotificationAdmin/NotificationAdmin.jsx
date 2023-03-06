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
    Switch
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import axios from 'axios';

function NotificaAdmin() {
    //Tabla para seleccionar Estudiantes
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
        // const apiEndpoint = isChecked ? `/users/${student.PK_User}/activate` : `/users/${student.PK_User}/delete`;
        // await axios.get(`http://localhost:3001${apiEndpoint}`);
        // const updatedStudents = await axios.get('http://localhost:3001/users/students');
        // setStudents(updatedStudents.data);

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

    //Formulario para envio de notifcaciones
    const formDataInitialState = {
        nombre: "",
        email: "",
        mensaje: "",
    };
    const [validacion, setValidacion] = React.useState("");
    const [formData, setFormData] = React.useState(formDataInitialState);
    const [errors, setErrors] = React.useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const [text, setText] = React.useState("");

    function handleTextChange(e) {
        setText(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        // console.log("Ya en submit, correo: ", e.target.email.value);
        for (const [key, value] of Object.entries(errors)) {
            if (value.length !== 0) setValidacion(value);
        }
        try {
            console.log(`Service: ${serviceEmail}, Template: ${templateContactUs}, userId: ${userId}`);
            emailjs.sendForm(serviceEmail, templateContactUs, e.target, userId).then(res => {
                swal("¡Gracias por tu comentario!", "¡Espera nuestra respuesta!", "success");
                setFormData(formDataInitialState);
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }
    };

    function handleInputChange(e) {
        const { name, value } = e.target;
        setErrors(
            validate({
                ...formData,
                [name]: value,
            })
        );
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <>
            <h2>Estudiantes a Notificar:</h2>
            <hr />
            <div>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
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
                                        <TableSortLabel active={orderBy === 'Active'} direction={orderBy === 'Active' ? order : 'asc'} onClick={() => handleSort('Active')}>
                                            Active
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell>
                                        Select
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortData(students).map((student) => (
                                    <TableRow key={student.PK_User}>
                                        <TableCell>{student.Name}</TableCell>
                                        <TableCell>{student.Email}</TableCell>
                                        <TableCell>
                                            <Switch defaultChecked={student.Active} onChange={(e) => handleToggle(e, student)} />
                                        </TableCell>
                                        <TableCell><Checkbox /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="form-group">
                        <label><b>Mensaje: </b></label>
                        <textarea type="text" style={{
                            width: "338px",
                            height: "210px",
                        }}
                            id="mensaje"
                            name="mensaje"
                            placeholder='Deja tu mensaje de hasta 1,500 caracteres.'
                            required
                            value={text} onChange={handleTextChange}
                        />
                        <p>{text.length}/1500</p>

                    </div>
                    {validacion ? <div>{validacion}</div> : null}
                    <button type="submit"
                        style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}
                        disabled={Object.keys(validate).length}
                    >Enviar notificación</button>
                </form>
            </div>
        </>
    )

}

export default NotificaAdmin;