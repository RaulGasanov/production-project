import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increase}>increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;