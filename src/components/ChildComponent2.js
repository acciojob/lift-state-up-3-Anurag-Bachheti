import React from 'react'

const ChildComponent2 = ({handleSelectOption}) => {

  return (
    <div style={{backgroundColor:'yellow', width:'50%'}}>
        <h2>Child Component 2</h2>
        <button onClick={()=> handleSelectOption('Option 2')}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;