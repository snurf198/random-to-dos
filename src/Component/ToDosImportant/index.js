import React, {useState} from 'react';

const ToDosImportant = () => {
    const [important, setImportant] = useState("");
    const [importantList, setImportantList] = useState([]);

    const changeImportant = ({target: {value}}) => {
        setImportant(value);
    }

    const addImportant = () => {
        setImportantList(prev=>[...prev, important]);
        setImportant("");
    }
    
    return (
        <>
            <div>
                ToDosImportant
            </div>
            <input type="text" placeholder="write down important todos" onChange={changeImportant} value={important}/>
            <button onClick={addImportant}>제출</button>
            <ul>
                {importantList.map(e=><li key={e}>{e}</li>)}
            </ul>
        </>
    )
}

export default ToDosImportant;