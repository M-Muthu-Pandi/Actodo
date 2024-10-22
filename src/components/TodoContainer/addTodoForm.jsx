import { useState } from "react";

const AddTodoForm = (props) => {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;
    const [input,setInput] = useState("");

    const handleChange = (e)=> {
        setInput(e.target.value)
    }

    const handleAdd = ()=> {
        setActivityArr([...activityArr,{id:activityArr.length+1, activity:input}])
        setInput("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" value={input} onChange={handleChange} className="border border-black bg-transparent p-1" placeholder="Next Activity ?" />
                <button onClick={handleAdd} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )
}

export default AddTodoForm;