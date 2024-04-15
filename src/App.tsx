import Counter from "./components/Counter";
import Posts from "./components/Posts";
import RootStore from "./stores/root-store";
import { RootStoreContext } from "./stores/root-store-context";



const App = () => {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <Counter />
            <Posts />
        </RootStoreContext.Provider>
    );
}
 
export default App;