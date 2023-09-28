import Link from "next/link"
import style from "./style.module.css"

export default function PostTile(props : any)
{
    return (
        <div key={props.id} className={`${style.container} background_transition`}>
                <Link href={"/blog_page/" + props.id}>
                    <h1 className={style.title} >{props.title}</h1>
                    <p className={style.description}>{props.description  }</p>
                </Link>
        </div>
    )
}