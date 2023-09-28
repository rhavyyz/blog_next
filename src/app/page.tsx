import React from "react";
import PostTile from "./components/post_tile";
import style from "./style.module.css"

export default async function Home() {
  
  const res : Resp<Post>[] = (await(await fetch( "http://localhost:1337/api/posts", {cache : "no-store"})).json())["data"];
  
  console.log(res);

  return (
    <div className={style.container}>
      { res.map(item => 
          <PostTile key={item.id}
                    title={item.attributes.title} 
                    description={item.attributes.description} 
                    id={item.id}  
          />
        )
      } 
    </div>
  )
}
