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
import swal from 'sweetalert';
import { baseUrl } from '../../../models/baseUrl';
import styles from './NotificationAdmin.module.css'

const serviceEmail = import.meta.env.VITE_EMAILJS_SERVICE;
const templateComunicado = import.meta.env.VITE_EMAILJS_TEMPLATE_COMUNICADO;
const userId = import.meta.env.VITE_EMAILJS_USERID;

function NotificaAdmin() {
    //Tabla para seleccionar Estudiantes
    const [students, setStudents] = useState([]);
    const [orderBy, setOrderBy] = useState('Name');
    const [order, setOrder] = useState('asc');
    
    useEffect(() => {
        async function fetchStudents() {
            const response = await axios.get(`${baseUrl}/users/students`);
            setStudents(response.data.map(student => ({ ...student, active: student.Active })));
        }
        fetchStudents();
    }, []);

    const handleSort = (column) => {
        const isAsc = orderBy === column && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(column);
    };


    const emailList = [];
    
    // const handleToggle = async (event, student) => {
    //     const isChecked = event.target.checked;
    //     // const apiEndpoint = isChecked ? `/users/${student.PK_User}/activate` : `/users/${student.PK_User}/delete`;
    //     // await axios.get(`http://localhost:3001${apiEndpoint}`);
    //     // const updatedStudents = await axios.get('http://localhost:3001/users/students');
    //     // setStudents(updatedStudents.data);

    // };

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
        asunto: "",
        mensaje: "",
    };

    const [validacion, setValidacion] = React.useState("");
    const [formData, setFormData] = React.useState(formDataInitialState);
    const [errors, setErrors] = React.useState({
        asunto: "",
        mensaje: "",
    });
    const fieldsEmail = {
        email: "",
        mensaje: "",
    }
    function validate(formData) {
        let errores = {};
        // let result =false;
        try {
            if (formData.asunto.length === 0) {
                errores.asunto = 'El asunto del comunicado no puede estar vacío.';
            } else if (formData.asunto.length > 75) {
                errores.asunto = 'El asunto no puede superar los 75 caracteres.'
            } else if (formData.asunto.length < 10) {
                errores.asunto = 'El asunto debe ser mayor a 10 caracteres.'
            } else if (formData.mensaje.length === 0) {
                errores.mensaje = 'El mensaje no debe estar vacío.';
            } else if (formData.mensaje.length > 1500) {
                errores.mensaje = 'El mensaje supera el máximo de 1,500 caracteres.';
            }
            console.log('En Try de function validate: ', errores);
            return errores;
        } catch (error) {
            console.log(error);
        }
    }

    let activeSendMsg = false;
    let activeSendUsr = false;
    // const [text, setText] = React.useState("");

    // function handleTextChange(e) {
    //     setText(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Ya en submit, mensaje: ", e.target.mensaje.value);
        console.log("En submit, emailList: ", emailList);

        try {

            console.log(`Service: ${serviceEmail}, Template: ${templateComunicado}, userId: ${userId}, e.target: ${e.target}`);
            console.log(fieldsEmail);
            // emailjs.sendForm(serviceEmail, templateContactUs, e.target, userId).then(res => {
            //     swal("¡Gracias por tu comentario!", "¡Espera nuestra respuesta!", "success");
            //     setFormData(formDataInitialState);
            //     console.log(res);
            // })
            //             emailjs.send(serviceEmail, templateComunicado, fieldsEmail, userId)
            //                 .then(function (response) {
            //     swal("Noficación enviada", "¡Los alumnos ya están notificados!", "success");
            //     setFormData(formDataInitialState);
            //                     console.log('VAMOO!', response.status, response.text);
            //                 }, function (error) {
            //                     console.log('Qué pasó?...', error);
            //                 });
        } catch (error) {
            console.log(error);
        }
    };

    function handleCheck(e) {
        if (emailList.includes(e)) {
            let index = emailList.indexOf(e);
            emailList.splice(index, 1);
        } else {
            emailList.push(e);
        }

        if (emailList.length !== 0) activeSendUsr = true;
        console.log('emailList:', emailList);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        console.log(`name: ${name}, value: ${value}`);
        console.log('Que estamos validando:', validacion);
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
        for (const [key, value] of Object.entries(errors)) {
            if (value.length !== 0) setValidacion(value);
        }
    }

    return (
        <>
            <h2>Estudiantes a Notificar:</h2>
            <div className={styles.users_container}>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                }} className={styles.users_options}>
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
                                            <p>{student.Active ? 'Sí' : 'No'}</p>
                                        </TableCell>
                                        <TableCell><Checkbox onChange={(e) => handleCheck(student.Email)} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div >
                        <label><b>Asunto a notificar: </b></label>
                        <input type="text" style={{
                            width: "316px",
                            height: "30px",
                        }}
                            id="asunto"
                            name="asunto"
                            minLength='10'
                            maxLength='75'
                            placeholder='Asunto.'
                            required
                            value={formData.asunto}
                            onChange={handleInputChange}
                        />
                    </div>
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
                            value={formData.mensaje} onChange={handleInputChange}
                        />
                        <p>{formData.mensaje.length}/1500</p>

                    </div>
                    {validacion ? <div>{validacion}</div> : null}
                    <button type="submit"
                        style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}
                        disabled={(activeSendMsg || activeSendUsr) ? (activeSendMsg && activeSendUsr) : (activeSendMsg && activeSendUsr)}
                    >Enviar notificación</button>
                </form>
            </div>
        </>
    )

}

export default NotificaAdmin;