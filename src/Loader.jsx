import { useState } from "react"
import './index.css'


const LoadingButton = (props) => {
    return (
        <>
            <button onClick={props.onClick} type="button">
                {props.loading ? <div className="loader"></div> : props.label}
            </button>
        </>
    )
}


function Loader() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <LoadingButton 
                label="wait"
                loading={isLoading}
                onClick={() => setIsLoading(!isLoading)}

            
            />
        </>
    )
}

export default Loader;