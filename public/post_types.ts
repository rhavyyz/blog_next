type Post = {
    title : string,
    description: string,
    content : string
}

interface Resp<type>
{
    id: number,
    attributes : type
}