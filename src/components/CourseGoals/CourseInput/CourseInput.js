import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

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
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
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
