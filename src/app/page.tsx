import Header from "@/components/Header/header";
import MainHome from "@/components/MainHome/mainhome";
import Link from "next/link";
import style from "./page.module.css"

export default function Home() {
  return (
    <main className={style.main}>
      <Header>
        <Link href={"/"}>
          <h2>TManager</h2>
        </Link>

        <nav>
          <Link href={"/login"}>Login</Link>
          <Link href={"/cadastro"}>Cadastro</Link>
        </nav>
      </Header>

      <MainHome />

      <div>buceta</div>
    </main>
  )
}
