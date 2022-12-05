import { useState } from "react";


function Stateful() {

    const [ count, setCount ] = useState(0)
    const [ prevCount, setPrevCount ] = useState(0)

    const handleClick = () => {
        setCount((prev) => {
            setPrevCount(prev);
        })


        setCount(count + 1)
    }
    
    
    
    return (
        <>
            <h3>Previous Count: {prevCount} </h3>
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>Button Pressly</button>
        </>
    )
}

export default Stateful;