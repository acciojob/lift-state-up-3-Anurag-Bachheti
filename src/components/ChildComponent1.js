import React from 'react'

const ChildComponent1 = ({handleSelectOption}) => {

  return (
    <div style={{backgroundColor:'burlywood', width:'50%'}}>
        <h2>Child Component 1</h2>
        <button onClick={()=> handleSelectOption('Option 1')}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;