import { observer } from "mobx-react-lite";
import styles from "../Styles/Counter.module.css"
import counterStore from "../stores/counter-store";
import { useState } from "react";



const Counter = observer(() => {
    const { count, decrement, increment, doubleCounter, setCounter } = counterStore;
    const [valueCounter, setValueCounter] = useState<number>(0)
    return (
        <>
            <div className={styles.container}>
                <button onClick={decrement} className={styles.button}>-</button>
                <h1>{count}</h1>
                <button onClick={increment} className={styles.button}>+</button>

            </div>
            <label className={styles.label}>
                <span>Set counter: </span>
                <input onSubmit={() => setCounter(valueCounter)} value={valueCounter} onChange={e => setValueCounter(Number.parseInt(e.target.value))} placeholder="30" type="number"/>
                <button onClick={() => setCounter(valueCounter)} className={styles.button}>apply</button>
            </label>
            <h3 className={styles.label}>Double counter: {doubleCounter}</h3>
        </>
    );
})
 
export default Counter;