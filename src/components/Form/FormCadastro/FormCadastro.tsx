'use client'
import React, { ReactNode } from 'react';
import style from "../style.module.css"

type Props = {
    children: ReactNode;
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  };

const FormCadastro = ({children, onSubmit }: Props) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
       {children} 
    </form>
  )
}

export default FormCadastro
