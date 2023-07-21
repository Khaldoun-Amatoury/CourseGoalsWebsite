//Now we're gonna try CSS modules
import React from 'react';

// import styled from 'styled-components';

// import './Button.css';
//importing css for css modules
//also you need to rename your css file from Button.css to Button.module.css
import styles from './Button.module.css';

//styled-components package
//styled is an object we're importing from styled-components and there we can access the button method,it's just a special kind of method you can say,instead of being a method which you call like this with paranthesis, you add these strange back ticks after it  
// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     @media (min-width: 768px) {
//       width: auto;
//     }
  

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

// `; //tagged template literal

//without styled components package
//but we'll use this for css modules


const Button = props => {
  return (
    // <button type={props.type} className="button" onClick={props.onClick}>
    // we'll apply dynamic things to the className with css modules
    // the styles thing here is imported from the css file and it is an object and in that object you'll have every class you defined in the css file as a property like the button property
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

/*
Note:

what this package does in the end is

it looks at the styles we set up here.

And then it wraps these styles into generated class names

where it guarantees that every class name is unique.

So that it can't spill over to other components of the app.

And it will then add these classes as global CSS.

But now since we have unique class names

for every styled-component,

the style setup here will never be able

to affect another component in the app.

Because these unique class names are

really, well, unique per styled component.

So that's how the styling is applied here

and that's how styled components work.
*/

/*
Note:
What CSS Modules does

or what this concept of CSS Modules does.

What the build process does under the hood

is it takes those CSS classes and a CSS file

is it takes those CSS classes and a CSS file

and basically changes those class names

to be unique.

to be unique.

That's the core thing it does.

For every component it changes the class names

off the classes you're importing here.

So off the CSS file you were importing to be unique.

So off the CSS file you were importing to be unique.

So if you import from the CSS file here

in the button component,

it will create unique classes, unique worshens

of all those styles and classes here for this component.

of all those styles and classes here for this component.

And for data it generates brand new class names

that look like this.

Inside of these class names, your styles will be

so it will just keep your styles.

It will not touch those

but wrapped into this new class name.

but wrapped into this new class name.

You can see this if you expand the head section here

in the rendered Dom.

There you will see a bunch of style texts.

And if we now search for the one here,

here at this for the button

we see that's this newly generated class name.

Here we have our button styles

and that newly generated class name is also used

on the focus style on the hover and on the active style.

And with that, does CSS Modules concept ensures

that the CSS styles we set up in a CSS file

are a scoped Q and a component

we import this file into.

For (mumbles) we need to work with CSS classes here

because we then access those classes

as properties on the imported styles object.

This is how we basically make the connection

between these dynamically generated class names,

which we as a developer don't know in advance

and our components here.

And that's also what you see here in the official docs.

That's in the end, all that's to it.

That's in the end, all that's to it.

This is how you can use CSS Modules.

*/