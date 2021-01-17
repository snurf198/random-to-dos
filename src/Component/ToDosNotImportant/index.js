import React, {useState} from 'react';

const ToDosNotImportant = () => {
    const [notImportant, setNotImportant] = useState("");
    const [notImportantList, setNotImportantList] = useState([]);

    const changeNotImportant = ({target: {value}}) => {
        setNotImportant(value);
    }

    const addNotImportant = () => {
        setNotImportantList(prev=>[...prev, notImportant]);
        setNotImportant("");
    }

    return (
        <>
            <div>
                ToDosNotImportant
            </div>
            <input type="text" placeholder="write down Not important todos" onChange={changeNotImportant} value={notImportant}/>
            <button onClick={addNotImportant}>제출</button>
            <ul>
                {notImportantList.map(e=><li key={e}>{e}</li>)}
            </ul>
            
        </>
    )
}

export default ToDosNotImportant;