//This is notes//

// JSX //

/*
 1. JSX is just a syntactical sugar for calling React.createElement
 2. thats why we need to import React from 'react;
 
 // JSX differences

 1. class --> className
 2. for --> htmlFor
    
 camelCase property naming conventions ----
    onclick --> onClick
    tabindex --> tabIndex
*/

 // props //

/*

 1. props is just an object which contains attribute and value which are 
   passed from parent to fucntional component 
 2. It is not mandatory to use the name 'props' only. we can in fact use any word for it
   but conventioanlly 'props' is used.
 3. We can only return one element to be rendered 
 4. If we have more than one then we need to wrap them in <div>
 as below-
   
 const Greet = props => {
    console.log(props)
    console.log( `Hello ${props.name} ${props.superhero}`);
    return (
    <div>
        <h1> Hello {props.name} {props.superhero}!</h1> 
        {props.children}
    </div>
    ) 
 5. When we are passing multiple elements from App.js to the functional component
    then we can use {props.children} to refer them like above
     App.js ( related content) --
        <Greet name='Clark' superhero='Supername' >
            <p>This is children prop1</p>
            <p> This is children prop2</p>
        </Greet>

  6. Here props.children will reflect both <p> tag elements
    */
  
}
