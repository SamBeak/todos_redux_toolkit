import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function HomeComponent() {
    const todos = useSelector(state => state);
    const dispatchTodo = useDispatch();

    const [todo, setTodo] = React.useState("");

    const onChangeTodo = (e) => {
        setTodo(e.target.value);
    };
    const onSubmitTodo = (e) => {
        e.preventDefault();
        if(todo !== ""){
            dispatchTodo({type:"ADD", payload:todo});
        }
    };
    const onClickDelete = (e) => {
        e.preventDefault();
        dispatchTodo({type:"DELETE", id:e.target.id});
    }; 

  return (
    <div id="home">
        <div className="container">
            <div className="gap">
                <div className="title"></div>
                <div className="content">
                    <form method='post' id="todoForm" onSubmit={onSubmitTodo}>
                        <input type="text" placeholder='What to do ?' onChange={onChangeTodo}/>
                        <button type='submit'>ADD</button>
                    </form>
                    <ul className="todo__list">
                        {
                            todos.map( (item, idx) => {
                                return (
                                    <li key={idx}>
                                        <span>{item.text}</span>
                                        <button id={item.id} onClick={onClickDelete}>DELETE</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
