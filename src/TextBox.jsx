import React, {useState} from "react";


function TextCapture() {
    const [textValue, setTextValue] = useState('')

    const eventHandler = (e) => {
        setTextValue(e.target.textValue);
        console.log(e.target.value);
    };

    return (
        <>
            <input type="text" 
                value={textValue}
                placeholder="enter some text... "
                onChange={eventHandler}
            />
        </>
    )
}


export default TextCapture;