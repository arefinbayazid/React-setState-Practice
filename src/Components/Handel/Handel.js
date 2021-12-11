import React from 'react';

const Handel = (props) => {
    return (
        <div>
            <button onClick= {()=>props.clickHandel(1)}>Click Me</button>
        </div>
    );
};

export default Handel;