import { useEffect } from "react";
import styles from "../Styles/Posts.module.css"
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/root-store-context";

const Posts = observer(() => {
    // const { posts, getPostsAction } = postsStore
    const { post } = useStores()
    useEffect(() => {
        post.getPostsAction()
    }, [])
    console.log(post.posts)
    if(!post.posts){
        return null
    }

    return post.posts.case({
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