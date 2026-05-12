import { FaEdit, FaTrash } from "react-icons/fa";
import "../App.css";
function ToDoItem(props) {

    const { itemData } = props;

    return (
        <tr>

            <td>{itemData.title}</td>

            <td>{itemData.description}</td>

            <td>
                {itemData.completed
                    ? <a style={{color:"green"}}>Completed</a>
                    : <a>Pending</a>}
            </td>

            <td>
                <div className="action-buttons">

                    <button
                        onClick={() => props.onComplete(itemData.id)}
                        className="complete-btn"
                    >
                        Complete
                    </button>

                    <button
                        onClick={() => props.onEdit(itemData.id)}
                        className="edit-btn"
                    >
                        <FaEdit />
                    </button>

                    <button
                        onClick={() => props.onDelete(itemData.id)}
                        className="delete-btn"
                    >
                        <FaTrash />
                    </button>

                </div>
            </td>

        </tr>
    );
}

export default ToDoItem;