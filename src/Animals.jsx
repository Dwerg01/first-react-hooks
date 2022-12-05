import React from "react";

const animals = [
    { id:1, name:"tiger 🐅" },
    { id:2, name:"lion 🦁" },
    { id:3, name:"elephant 🐘" },
    { id:4, name:"rhino 🦏" },
]


function Animals() {

    return (
        <>
            <ul>
                {animals && 
                animals.map(({id, name}) => {
                    return <li key={id}>{name}</li>
                }
                    )}
            </ul>
        </>
    )
} 




export default Animals;