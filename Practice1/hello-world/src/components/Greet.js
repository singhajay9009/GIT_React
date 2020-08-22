
import React from 'react';

// function Greet () {

//     return <h1> hello js! </h1>;
// }

const Greet = props => {
    console.log(props)
    console.log( `Hello ${props.name} ${props.superhero}`);
    return (
    <div>
        <h1> Hello {props.name} {props.superhero}!</h1> 
        {props.children}
    </div>
    )   
}

export default Greet;