import { useEffect, useState } from "react"
import axios from "axios"

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const useGetPosts = () => {
    const [posts, setPosts] = useState<Array<IPost>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true)
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
                const data = res.data
                console.log(data)
            }catch(e){
                
            }finally{
                setIsLoading(false)
            }
        }
        getPosts()
    }, [])

    return {posts, isLoading}
}