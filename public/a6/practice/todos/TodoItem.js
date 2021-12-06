const TodoItem = (todo) => {
  return(`
        <li style="background-color: ${todo.done ? 'green' : 'red'}">
            <input
                ${todo.done ? 'checked' : ''}
                    type="checkbox"/>
            ${todo.title} (${todo.status})
        </li>
    `);
}
export default TodoItem;
