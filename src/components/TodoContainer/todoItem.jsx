import Delete from '../assets/bin.png'

const TodoItem = (props) => {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const handleDelete = (removeId) => {
        let tempArr = activityArr.filter((item) => {

            if (item.id === removeId) {
                return false
            } else {
                return true
            }
        })
        setActivityArr(tempArr)
    }

    return (
        <li className="flex justify-between pb-1 mb-1 border-b-2 border-black">
            <p>{props.index + 1}. {props.activity}</p>
            <button className="text-red-500" onClick={() => { handleDelete(props.id) }}><img className='min-w-6' src={Delete} alt="Delete" /></button>
        </li>
    )
}

export default TodoItem;