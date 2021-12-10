// const data = [
//     {_id: '123', do: 'Walk dogs', done: false},
//     {_id: '234', do: 'Buy milk', done: false},
// ];
//
// const todosReducer = (state=data, action) => {
//     switch (action.type) {
//         case 'create-todo':
//             return [
//               ...state,
//                 {
//                     _id: (new Date()).getTime() + '',
//                     ...action.todo
//                     // do: 'New Todo',
//                     // done: false
//                 }
//             ]
//             break;
//         case 'delete-todo':
//             return state.filter(todo => todo !== action.todo)
//             break;
//         case 'update-todo':
//             break;
//         default:
//             return state;
//     }
// }
//
// export default todosReducer;