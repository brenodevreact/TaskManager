'use client'
import React from 'react'
import style from "./style.module.css"
import { useForm, SubmitHandler } from 'react-hook-form';
import FormCadastro from '@/components/Form/FormCadastro/FormCadastro';
import Link from 'next/link';
import Header from '@/components/Header/header';
import LottieAnimation from '@/components/LottieRegister';

type Inputs = {
  email: string,
  name: string,
  password: string,
  confirmPassword: string,
  img: string,
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
          <Link href={"/login"}>Login</Link>
          <Link href={"/"}>Home</Link>
        </nav>
      </Header>

      <FormCadastro onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro</h2>
        <input type="email" {...register("email")} placeholder='Email...' />
        <input type="text" {...register("name")} placeholder='Nome...' />
        <input type="password" {...register("password")} placeholder='Senha...' />
        <input type="password" {...register("confirmPassword")} placeholder='Confirme sua senha...' />
        <input type="text" {...register("img")} placeholder='Imagem de perfil...' />
        <button type="submit">Continuar</button>

        <Link href={"/login"} className={style.link}>Já possui cadastro?</Link>

      </FormCadastro>
      <div>
        <LottieAnimation />
      </div>
    </div>
  )
}

export default page
