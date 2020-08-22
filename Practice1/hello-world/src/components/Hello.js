import React from 'react';

// Functional component using arrow func 
// func component should always return a JSX element 
// Here <div> is JSX element. Note that it is not a html, but a JSX element.
const Hello = () => {

   // uncomment/comment below code to have/ignore JSX type implementation L# 9 --> L# 13
    return(
        <div>
            <h1>Hello Recat!</h1>
        </div>
    )

    //JSX is just a syntactical sugar to call 'React' create element

    // Below code is to do the same without using JSX syntax // for undertstanding purpose
    // param1 -> html element // div here
    // param2 -> properties ( optional )
    // param3 -> element to display ( which is again a html component 'h1', so we have to 
    // use React.createElement again here
/*
    return React.createElement(
        'div', null, React.createElement('h1', null, 'Hello React!')
    )
    */

}

export default Hello;