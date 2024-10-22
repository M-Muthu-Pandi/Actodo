const TodoItem = (props) => {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const handleDelete = (removeId)=> {
        let tempArr = activityArr.filter((item)=>{
            
            if (item.id === removeId) {
                return false
            } else {
                return true
            }
        })
        setActivityArr(tempArr)
    }

    return (
        <li className="flex justify-between">
            <p key={props.index}>{props.index + 1}. {props.activity}</p>
            <button className="text-red-500" onClick={()=>{handleDelete(props.id)}}>Delete</button>
        </li>
    )
}

export default TodoItem;