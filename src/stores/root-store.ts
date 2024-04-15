import counterStore from "./counter-store";
import postsStore from "./posts-store";

class RootStore{
    post = postsStore
    counter = counterStore
}

export default RootStore