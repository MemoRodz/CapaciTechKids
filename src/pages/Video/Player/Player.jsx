import React, { useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import styles from "../Player/Player.module.css"
import ReactPlayer from 'react-player/youtube'

function Player() {
  const [currentModule, setCurrentModule] = useState(1);

  const handleNextModule = () => {
    
      setCurrentModule(currentModule + 1);
    
    }

  return (  
    <div className={styles.player}>
      <Sidebar setCurrentModule={setCurrentModule}/>
      <main className={styles.reproductor}>
        {currentModule === 1 && 
          <div >
            <h2>Titulo del Módulo 1</h2>
            <h3>Descripción del Módulo 1</h3>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=Ur-7KhSxEOo'
              //url='https://youtu.be/Ur-7KhSxEOo' 
              controls
              //  / > 
              playing
              volume={1}
            />
            <button onClick={handleNextModule}>Siguiente</button>
          </div>
        }
        {currentModule === 2 && 
          <div >
            <h2>Titulo del Módulo 2</h2>
            <h3>Descripción del Módulo 2</h3>
            <ReactPlayer 
              url='https://youtu.be/Ur-7KhSxEOo' 
              playing 
              volume={1}
            />
            <button onClick={handleNextModule}>Siguiente</button>
          </div>
        }
        {currentModule === 3 && 
          <div >
            <h2>Titulo del Módulo 3</h2>
            <h3>Descripción del Módulo 3</h3>
            <ReactPlayer 
              url='https://youtu.be/Ur-7KhSxEOo' 
              playing 
              volume={1}
            />
            <button onClick={handleNextModule}>Siguiente</button>
          </div>
        }
        {currentModule === 4 && 
          <div >
            <h2>Titulo del Módulo 4</h2>
            <h3>Descripción del Módulo 4</h3>
            <ReactPlayer 
              url='https://youtu.be/Ur-7KhSxEOo' 
              playing 
              volume={1}
            />
            <button onClick={handleNextModule}>Siguiente</button>
          </div>
        }
        {currentModule === 5 && 
          <div >
            <h2>Titulo del Módulo 5</h2>
            <h3>Descripción del Módulo 5</h3>
            <ReactPlayer 
              url='https://youtu.be/Ur-7KhSxEOo' 
              playing 
              volume={1}
            />
            <Link to="/player">Deja un Comentario</Link>
          </div>
        }

      </main>        
    </div>
  )
}

export default Player;
