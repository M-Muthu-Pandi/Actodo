import TodoItem from "./todoItem";

const TodoList = (props) => {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    return (
        <div className="bg-[#bdb4ea] border rounded-md p-3 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length === 0 ? <p>You Haven't added any activity yet</p> : ""}
            <ol>
                {
                    activityArr.map((item, index) => {
                        return (
                            <TodoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default TodoList;