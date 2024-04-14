import { useEffect } from "react";
import styles from "../Styles/Posts.module.css"
import postsStore from "../stores/posts-store";
import { observer } from "mobx-react-lite";

const Posts = observer(() => {
    const { posts, getPostsAction } = postsStore
    useEffect(() => {
        getPostsAction()
    }, [])
    console.log(posts)
    if(!posts){
        return null
    }

    return posts.case({
        pending: () =>  <h1>Loading...</h1>,
        rejected: () => <h1>Error</h1>,
        fulfilled: (value) => (
            <ul className={styles.list}>
                {
                    value.slice(0, 10).map((todo, i) => (
                        <li key={i}>{todo.title}</li>
                    ))
                }
            </ul>
        )
    })

})
 
export default Posts;