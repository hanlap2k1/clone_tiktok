import { useState,useEffect } from "react"

export default function Content(){
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then(res => res.json())
         .then(post => setPosts(post))
    })
    return (
        <div>
            {posts.body}
        </div>
    )
}