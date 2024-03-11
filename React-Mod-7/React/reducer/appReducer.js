export function appReducer(state, action){
    if(action.type === "delete"){
        return {
            ...state, 
            todos: state.todos.filter((todo) => todo.id !== action.id),
        }
        
    }
    
    if(action.type === "finish"){
        return {
            ...state, 
            todos: state.todos.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo,
                    done: true,
                };
            }),
        };
        
    }

    if(action.type === "add"){
        return {isFormShown: false, todos: [
            ...state.todos,
            {
                name: action.newTodoName,
                done: false,
                id: Math.random(),
            },
        ]}
    }

    if(action.type === "open_form"){
        return{
            ...state,
            isFormShown: true,
        }
    }
    
    
}