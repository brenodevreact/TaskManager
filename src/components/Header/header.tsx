import React, {ReactNode} from 'react'
import style from "./style.module.css"

type Children = {
    children: ReactNode;
}

const Header = ({children}: Children ) => {
  return (
    <header className={style.header}>
        {children}  
    </header>
  )
}

export default Header
