import Link from "next/link"
import style from "./style.module.css"
import Search from "./search"

export default function NavBar()
{
    return (
        <nav className={style.NavBar}>
            <Link className={style.Link} href="/">
                <h1>All posts</h1>
            </Link>

            <Search/>

        </nav>
    )
}