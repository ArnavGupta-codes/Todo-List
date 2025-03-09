import { useState } from "react";

export default function Todoinput({ handleAddTodos }) {
    const [todoValue, setTodoValue] = useState(""); // Fixed variable name

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Enter todo..."
            />
            <button
                onClick={() => {
                    if (todoValue.trim()) { // Ensures input is not empty
                        handleAddTodos(todoValue.trim());
                        setTodoValue(""); // Clears input after adding
                    }
                }}
            >
                Add
            </button>
        </header>
    );
}


// import { useState } from "react"

// export default function TodoInput(props) {
//     const { handleAddTodos, todoValue, setTodoValue } = props
//     return (
//         <header>
//             <input value={todoValue} onChange={(e) => {
//                 setTodoValue(e.target.value)
//             }} placeholder="Enter todo..." />
//             <button onClick={() => {
//                 handleAddTodos(todoValue)
//                 setTodoValue('')
//             }}>Add</button>
//         </header>
//     )
// }