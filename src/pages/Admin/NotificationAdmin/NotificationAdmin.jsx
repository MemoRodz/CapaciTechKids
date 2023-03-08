import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox
} from '@mui/material';
import { TableSortLabel } from '@mui/material';
import axios from 'axios';
import emailjs from 'emailjs-com';
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

    /*
Para probar sobre correos de Administradores
    */
/*   
    const [advUsers, setAdvUsers] = useState([]);
    useEffect(() => {
        async function fetchAdvUsers() {
            const response = await axios.get(`${baseUrl}/users/advusers`);
            setAdvUsers(response.data);
        }
        fetchAdvUsers();
    }, []);
*/
    const handleSort = (column) => {
        const isAsc = orderBy === column && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(column);
    };

    //Para ordenar columna de la tabla
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

    //Formulario para envio de notificaciones
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

    const [emailList, setEmailList] = useState([])

    const fieldsEmail = {
        email: "",
        asunto: "",
        mensaje: "",
    }
    function validate(formData) {
        let errores = {};
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

    function handleSubmit(e) {
        e.preventDefault();

        try {
            let correos = '';
            if (emailList.length !== 0) {
                emailList.forEach(email => {
                    if (emailList.length === 1) {
                        correos = email;
                    } else {
                        correos = correos + ',' + email;
                    }
                });
            }
            fieldsEmail.email = correos;
            fieldsEmail.mensaje = e.target.mensaje.value;
            fieldsEmail.asunto = e.target.asunto.value;

            emailjs.send(serviceEmail, templateComunicado, fieldsEmail, userId)
                .then(function (response) {
                    swal("Noficación enviada", "¡Los alumnos ya están notificados!", "success");
                    setFormData(formDataInitialState);
                    e.target.reset;
                    console.log('VAMOO!', response.status, response.text);
                }, function (error) {
                    console.log('Qué pasó?...', error);
                });

        } catch (error) {
            console.log(error);
        }
    };

    // function handleCheck(e) {
    //     console.log("Qué es e: ", e);
    //     if (emailList.includes(e)) {
    //         let index = emailList.indexOf(e);
    //         emailList.splice(index, 1);
    //     } else {
    //         emailList.push(e);
    //     }
    //     fieldsEmail.email = emailList;
    //     if (emailList.length !== 0) activeSendUsr = true;
    //     console.log('En el Check, emailList:', emailList);
    // }

    function handleCheck(e) {
        let value = e.target.value
        if (e.target.checked) {
            setEmailList([...emailList, value])
        } else {
            setEmailList(emailList.filter((val) => val !== value))
        }
        console.log('En handleCheck:', emailList);
    }


    function handleInputChange(e) {
        const { name, value } = e.target;
        // console.log(`name: ${name}, value: ${value}`);
        // console.log('Que estamos validando:', validacion);
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors(
            validate({
                ...formData,
                [name]: value,
            })
        );

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
                                        <TableCell>
                                            <Checkbox
                                                value={student.Email}
                                                checked={emailList.includes(student.Email)}
                                                onChange={(e) => handleCheck(e)} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div >
                        <br />
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
                        <p>{errors.asunto}</p>
                    </div>
                    <br />
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
                    <p>{errors.mensaje}</p>
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