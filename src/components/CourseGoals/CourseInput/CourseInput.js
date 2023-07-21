import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     // border: 1px solid #ccc;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

// //when we used props in styled components we don't need this anymore

// // &.invalid input {
//   //   border-color: red;
//   //   background: #ffd7d7;
//   // }

// //same here

//   // &.invalid label {
//   //   color: red;
//   // }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // trim cuts the white space at the beginning and end
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid'}> */}
      {/* <FormControl invalid={!isValid}> */}
      {/* when using css modules you don't need formcontrol anymore */}
      {/* dynamic classes with css modules */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

/*

Note:
<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
<input
          style={{ borderColor: !isValid ? "red" : "#ccc", background: !isValid ?  'salmon' : 'transparent' }}
          type="text"
          onChange={goalInputChangeHandler}
        />

I'm not 100% happy with the inline styles

because they take a very high priority

and you can certainly always find ways of making it work.

But I personally would prefer to not set inline styles.

So let's have a look at an alternative. 

*/
