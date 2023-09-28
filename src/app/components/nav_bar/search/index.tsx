'use client'

import style from "./style.module.css"
import Image from "next/image"
import lupa from "../../../../../public/search.ico"
import { useState } from "react"

export default function Search()
{
    const [text, setText] = useState("");
    return (
        <section className={style.search}>
            <input 
                value={text} 
                onChange={e => setText(e.target.value)}
                className={`background_transition_maintain ${style.search_field}`} type="text" placeholder="Posts..."
            />
            
            <button 
                className={`background_transition ${style.search_button} border_left_none`} 
                onClick={e => console.log(text)}            
            > 
                <Image className="background_transition_image"
                        src={lupa} 
                        alt="search icon"
                        objectFit="contain"
                />
            </button>
        </section>
    )
}