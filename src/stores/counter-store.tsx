import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";

class CounterStore {
    count = 0;
    
    constructor(){
        // 1 - First way how to make state observable
        // makeObservable(this, {
        //     count: observable,
        //     increment: action,
        //     decrement: action,
        //     setCounter: action,
        //     doubleCounter: computed
        // })

        // 2 - Second way to make state observable
        makeAutoObservable(this)
    }

    get doubleCounter(){
        return this.count * 2;
    }

    setCounter = (value: number) => {
        this.count = value  
    }
    increment = () => {
        this.count += 1;
    }
    decrement = () => {
        this.count -= 1;
    }
}


export default new CounterStore()