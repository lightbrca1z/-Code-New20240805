import type {Todo} from "./Example";

type TastListProps = {
    todos: Todo[]
}
const TaskList:React.FC<TastListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>{todo.text}</li>
            })}
        </ul>
    )
}

export default TaskList;