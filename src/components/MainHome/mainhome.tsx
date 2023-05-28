import Link from 'next/link'
import React from 'react'
import style from "./style.module.css"

const MainHome = () => {
    return (
        <div className={style.mainHome}>
            <h2>Task Manager</h2>

            <h3>A sua ferramenta de organização de tarefas. Seja para o seu trabalho ou vida pessoal.</h3>

            <Link href={"/login"}>
                <button>Começar</button>
            </Link>
        </div>
    )
}

export default MainHome
