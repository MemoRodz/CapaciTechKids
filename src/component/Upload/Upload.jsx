import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import styles from './Upload.module.css'

const SubiendoImagenes = ({cambiarImagen}) => {

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "IMAGES");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dbbmgnhqf/upload",
            {
                method: "POST",
                body: data,

            }

        )
        const file = await res.json();
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",file.url)
        setImage(file.secure_url)
        cambiarImagen(file.secure_url); // Aquí se llama a setImageProp en lugar de setImage
        setLoading(false);
    }
    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <FormGroup>
                    {loading ? (<h3>Cargando Imagenes</h3>) : (<img src={image} style={{ width: "300px" }} />)}
                    <div className={styles.inp}>
                        <Input
                            type="file"
                            name="file"
                            placeholder='Sube tu Imagen Aqui'
                            onChange={uploadImage}
                        />
                    </div>
                </FormGroup>
            </Container>
        </div>
    );
}

export default SubiendoImagenes;