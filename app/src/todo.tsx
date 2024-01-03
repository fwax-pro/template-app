import { Input, List } from "antd";
import { useState } from 'react';
import { TodoItem } from "./todoItem";
import DayJS from 'dayjs/locale/*'
export interface TodoType {
    index: number,
    title: string,
    isCompleted: boolean
    date: DayJS | null,
    dateString: string
}

export function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<TodoType[]>([]);

    const handlePressEnter = () => {
        //const target = e.target as HTMLInputElement;
        console.log('hellooo', inputValue)
        const newTodo:TodoType = {
            index: todos.length,
            title: inputValue,
            isCompleted: false,
            date: null,
            dateString: ""
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
    }

    const setDate = (index: number, date:Date, dateString:string) => {
        const newTodos = [...todos];
        newTodos[index].date = date;
        newTodos[index].dateString = dateString;

        setTodos([...newTodos]);
    }
    
    const removeTodo = (_index: number) => {
        const filteredTodos = todos.filter(todo => todo.index !== _index);
        filteredTodos.forEach((todo,index) => todo.index = index);
        setTodos([...filteredTodos]);
    }

    return (
        <div className="todoContainer">
            <h1>Todo App</h1>
            <Input
                 value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What needs to be done?"
                onPressEnter={handlePressEnter}
            />
            <List 
                locale={{ emptyText: "No todo items" }}
                dataSource={todos}
                renderItem={item => (
                    <TodoItem todo={item} remove={removeTodo} setDate={setDate}/>
                )}
            />
        </div>
    )
}