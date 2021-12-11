import React, { useState } from 'react';
import Handel from '../Handel/Handel';




const Btn = () => {
    const [data, setData] = useState([])
    let arr = []
    const clickHandel = (num) =>{
      const newNum = num + 1;
    //   arr = [...arr, newNum]
        arr.push(newNum)
        let newArr = arr;
        console.log(arr)
      setData(newArr)
    }
    console.log(data)

    return (
        <div>
            <Handel clickHandel = {clickHandel}></Handel>
        </div>
    );
};

export default Btn;