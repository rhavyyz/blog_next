export default async function Page({params} : any)
{   
    const res : Resp<Post> = (await(await fetch( "http://localhost:1337/api/posts/" + params.path, {cache : "no-store"})).json())["data"];

    return (
        <div>
            {res.attributes.content}
        </div>
    )
}