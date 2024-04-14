import { makeAutoObservable, runInAction } from "mobx";
import { IPost } from "../hooks/getPosts";
import axios from "axios";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";


const getPosts = async () => (await axios.get("https://jsonplaceholder.typicode.com/posts")).data

class PostsStore{
    // posts?: IPromiseBasedObservable<Array<IPost>>

    // constructor(){
    //     makeAutoObservable(this)
    // }

    // getPostsAction(){
    //     this.posts = fromPromise(fetchPosts())
    // }

    posts?: IPromiseBasedObservable<IPost[]>

    constructor(){
        makeAutoObservable(this)
    }
    getPostsAction = () => {
        this.posts = fromPromise(getPosts())
    }
}

export default new PostsStore()