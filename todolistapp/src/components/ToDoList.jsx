import ToDoItem from "./ToDoItem";
import { useState } from "react";
import "../App.css";

function TodoList(props) {

    const [todos, setTodos] = useState(props.data);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [editId, setEditId] = useState(null);

    function handleSubmit() {

        if (!title || !description) return;

        if (editId !== null) {

            const updatedTodos = todos.map((item) =>
                item.id === editId
                    ? {
                        ...item,
                        title,
                        description,
                    }
                    : item
            );

            setTodos(updatedTodos);

            setEditId(null);

        } else {

            const newTodo = {
                id: Date.now(),
                title,
                description,
                completed: false,
            };

            setTodos([...todos, newTodo]);
        }

        setTitle("");
        setDescription("");
    }

    function markAsComplete(id) {

        const updatedTodos = todos.map((item) =>
            item.id === id
                ? { ...item, completed: true }
                : item
        );

        setTodos(updatedTodos);
    }

    function deleteTodo(id) {

        const filteredTodos = todos.filter(
            (item) => item.id !== id
        );

        setTodos(filteredTodos);
    }

    function editTodo(id) {

        const selectedTodo = todos.find(
            (item) => item.id === id
        );

        setTitle(selectedTodo.title);
        setDescription(selectedTodo.description);

        setEditId(id);
    }

    return (

        <div className="todo-layout">


            <div className="todo-left">


                <table className="todo-table">

                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todos.length === 0 ? (

                            <tr>
                                <td colSpan="4" className="empty-message">
                                    No todos available.
                                </td>
                            </tr>
                        ) : (
                            todos.map((item) => (

                            <ToDoItem
                                key={item.id}
                                itemData={item}
                                onComplete={markAsComplete}
                                onDelete={deleteTodo}
                                onEdit={editTodo}
                            />
                            )
                        ))}

                    </tbody>

                </table>

            </div>


            <div className="todo-right">

                <h2>
                    {editId !== null
                        ? "Edit Todo"
                        : "Add Todo"}
                </h2>

                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <textarea
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />

                <button onClick={handleSubmit} className="complete-btn">

                    {editId !== null
                        ? "Update"
                        : "Submit"}

                </button>

            </div>

        </div>
    );
}

export default TodoList;