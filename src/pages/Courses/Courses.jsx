import Course from "../../component/Course/Course";
import styles from "./Courses.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Courses() {
  const [Character, setCharacter] = useState([]) 
 
  useEffect(() => {
    fetch(`http://localhost:3001/courses`)
      .then((response) => response.json())
      .then((char) => {
        
          setCharacter(char);
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter([]);
  }, []);
  
  console.log(Character);
 

  return (
    <div className={styles.courses}>
      {Character.map((c) => {
        return (
          <Course
            key={c.id}
            id={c.id}
            Image={c.Image}
            Category={c.Category}
            Title={c.Title}
            Description={c.Description}
            score={c.score}
            Start_Date={c.Start_Date}
            End_Date={c.End_Date}
            Duration={c.Duration}
            //onClose={() => props.onClose(c.id)}
          />
        );
      })}
    </div>
  );
}

 /*  let curso=
    [
      {   
          Title: "JavaScript Basics for Beginners",
          Description : "JavaScript - Master the Fundamentals in 6 Hours",
          Category :'Development' ,
          Start_Date : "2023-02-14",
          End_Date: "2023-03-03",
          Image: "https://stackify.com/wp-content/uploads/2018/10/JavaScript-Tutorials-for-Beginners-881x441.jpg",
          Duration: 21600,
          score:3
      },
      {   
          Title: "Aprende Javascript, HTML5 y CSS3",
          Description : "Aprende los principales lenguajes que dominan internet: JavaScript, HTML5 y CSS3",
          Category :['Design','Development','Marketing'] ,
          Start_Date : "2023-02-14",
          End_Date: "2023-02-20",
          Image: "https://vaguefoundation.com/wp-content/uploads/2020/06/Connect-4.png",
          Duration: 259200,
          score:3
      },
      {   
          Title: "Node: De cero a experto",
          Description : "Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node",
          Category :['Development','Other'] ,
          Start_Date : "2023-04-14",
          End_Date: "2023-04-23",
          Image: "https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png",
          Duration: 36000,
          score:3
      },
      {   
          Title: "React.JS, Guía desde 0 (Actualizado 2022)",
          Description : "Aprende a crear sitios web de forma rápida y sencilla con React Js",
          Category :['Design','Development','Other'] ,
          Start_Date : "2023-05-05",
          End_Date: "2023-05-20",
          Image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
          Duration: 54000,
          score:3
      },
      {   
          Title: "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
          Description : "Aprende CSS3, Maquetación web, Responsive Web Design, SASS, LESS, Flexbox, CSS Grid, Bootstrap 4 y 5 desde cero",
          Category :['Design','Development','Marketing'] ,
          Start_Date : "2023-06-14",
          End_Date: "2023-06-20",
          Image: "https://res.cloudinary.com/practicaldev/image/fetch/s--lyTFtvJ5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kncmnrczdkyunzqwa56o.png",
          Duration: 72000,
          score:3
      },
      {   
          Title: "SCRUM 2023: Gestión Ágil de Proyectos con SCRUM desde CERO",
          Description : "Aprende a implementar Scrum: Scrum Master, Product Owner, Equipo de Desarrollo. Product Backlog, Kanban, Sprint y Daily",
          Category :['Development','Business','Other'] ,
          Start_Date : "2023-12-28",
          End_Date: "2023-12-28",
          Image: "https://agilescrum.com.mx/wp-content/uploads/2022/01/logo_AS_266x78-01.png",
          Duration: 14400,
          score: 4
      },
      {   
          Title: "Aprende diseño de interfaz (UI) con Figma",
          Description : "Curso UX/UI. Aprende a utilizar Figma con este curso práctico. Diseña una app y crea un prototipo navegable y animado.",
          Category :['Design','Marketing','Other'] ,
          Start_Date : "2023-08-14",
          End_Date: "2023-08-15",
          Image: "https://assets.stickpng.com/thumbs/62c6bc3deee9410fe137d920.png",
          Duration: 28800,
          score:3
      },
      {   
          Title: "GIT y GITHUB desde cero!",
          Description : "Maneja los repositorios más actuales del mercado",
          Category :['Development','Business','Other'] ,
          Start_Date : "2023-10-08",
          End_Date: "2023-10-08",
          Image: "https://pythonforundergradengineers.com/posts/git/images/git_and_github_logo.png",
          Duration: 7200,
          score:4
      },
      ] */ 