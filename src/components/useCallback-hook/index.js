import React, { useState, useCallback } from 'react';
import Title from './Title';
import Label from './Label';
import Button from './Button';

function ParentComponent(props) {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(10000)

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Label name="age" value={age} />
      <Button onClickHandler={incrementAge} > Increment Age</Button>
      <Label name ="salary" value={salary} />
      <Button onClickHandler={incrementSalary}> Increment Salary </Button>
    </div>
  );
}

export default ParentComponent;