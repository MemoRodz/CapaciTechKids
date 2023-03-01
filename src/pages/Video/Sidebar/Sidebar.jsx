import * as React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import styles from "../Sidebar/Sidebar.module.css";

export default function BarraLateral({ setCurrentModule }) {

  const handleModuleClick = (module) => {
    setCurrentModule(module);
  }

  return (    
    <Sidebar>
      <Menu className={styles.sidebar}>
        <MenuItem onClick={() => handleModuleClick(1)}>Modulo 1</MenuItem>
        <MenuItem onClick={() => handleModuleClick(2)}>Modulo 2</MenuItem>
        <MenuItem onClick={() => handleModuleClick(3)}>Modulo 3</MenuItem>       
        <MenuItem onClick={() => handleModuleClick(4)}>Modulo 4</MenuItem>       
        <MenuItem onClick={() => handleModuleClick(5)}>Modulo 5</MenuItem>       
      </Menu>
    </Sidebar>    
  );
};
