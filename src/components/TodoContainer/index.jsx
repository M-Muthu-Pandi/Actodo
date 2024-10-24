import Header from "./Header";
import Card from "./Card";
import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";
import { useState } from "react";

function Todo() {
    const [activityArr, setActivityArr] = useState([
        // { id: 1, activity: "Go for a walk" },
        // { id: 2, activity: "Have Breakfast" }
    ])

    return (
        <div className="bg-black p-5 sm:p-16 min-h-screen">
            <main className="bg-[#efefef] p-7 sm:p-10 border rounded-md">
                {/* Header */}
                <Header />

                {/* Card */}
                <section className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                </section>

                {/* Todo Container */}
                <section className="flex flex-wrap gap-5">
                    <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
                    <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
                </section>
            </main>
        </div>
    );
}

export default Todo;
