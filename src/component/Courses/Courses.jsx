import Course from "../Course/Course";
import styles from "./Courses.module.css";

export default function Courses() {
    let curso=
    [{
        id:1,
        image:'https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png' ,
        title:"Javascript",
        desc:"Programacion flexible",
        fecha_inicio:"14-02-2023",
        fecha_fin:"15-02-2023",
        profesor:"Ricardo Menendez",
        puntuacion:5
    },
    {
        id:2,
        image:'https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-html5-circle-512.png',
        title:"HTML5",
        desc:"Hola Mundo",
        fecha_inicio:"14-02-2023",
        fecha_fin:"15-02-2023",
        profesor:"Manuel López",
        puntuacion:4
        
    },
    {
        id:3,
        image:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
        title:"CSS3",
        desc:"Maneja los Estilos",
        fecha_inicio:"13-02-2023",
        fecha_fin:"18-02-2023",
        profesor:"Ricardo Maya",
        puntuacion:5
        
    },
    ]
  return (
    <div className={styles.courses}>
      {curso.map((c) => {
        return (
          <Course
            key={c.id}
            id={c.id}
            image={c.image}
            title={c.title}
            desc={c.desc}
            profesor={c.profesor}
            fecha_inicio={c.fecha_inicio}
            fecha_fin={c.fecha_fin}
            //onClose={() => props.onClose(c.id)}
          />
        );
      })}
    </div>
  );
}