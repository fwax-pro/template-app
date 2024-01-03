import { DatePicker, List } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import { TodoType } from "./Todo";
import DayJS from 'dayjs/locale/*'

type TodoItemProps = {
    todo: TodoType;
    remove: (index: number) => void;
    setDate: (index: number, date:Date, dateString:string) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, remove, setDate }) => {
    const handleDateChange = (date:DayJS, dateString:string) => {
        setDate(todo.index, date, dateString);
    }
    
    return (
        <List.Item
            actions={[
                <DatePicker
                    format="MM/DD/YYYY"
                    onChange={handleDateChange}
                    value={todo.date}
                />,
                <CloseCircleFilled 
                    onClick={() => remove(todo.index)}
                />
            ]}
        >
            {todo.title}
        </List.Item>
    )
}
