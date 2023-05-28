'use client'
import React from 'react'
import style from "./style.module.css"
import { useForm, SubmitHandler } from 'react-hook-form';
import FormCadastro from '@/components/Form/FormCadastro/FormCadastro';
import Link from 'next/link';
import Header from '@/components/Header/header';

type Inputs = {
    email: string,
    password: string,
};

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data, event) => {
      event?.preventDefault()
      console.log(data)
    }

  return (
    <div className={style.mainCadastro}>
        <Header>
        <Link href={"/"}>
          <h2>TManager</h2>
        </Link>

          <nav> 
            <Link href={"/cadastro"}>Cadastro</Link>
            <Link href={"/"}>Home</Link>
          </nav>
        </Header>

        <FormCadastro onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
            <input type="email" {...register("email")} placeholder='Email...'/>
            <input type="password" {...register("password")} placeholder='Senha...'/>
            <button type="submit">Continuar</button>
            <Link href={"/cadastro"}>Ainda não possui cadastro?</Link>
        </FormCadastro>
        <div>
          <h2>Espaço para lottie</h2>
        </div>
    </div>
  )
}

export default page
