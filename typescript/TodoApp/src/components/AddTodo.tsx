import { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type AddTodoProps = {
    addTodoHandler: (todoText: string) => void;
}

const AddTodo = ({ addTodoHandler }: AddTodoProps) => {

    const [text, setText] = useState<string>("");

    const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        addTodoHandler(text);
        setText("")
    }

    return (
        <form onSubmit={submitHandler} className="flex items-center gap-4">
            <Input 
            onChange={changeEventHandler} 
            value={text}
            type="text" 
            placeholder="Write a new todo" 
            className="w-fit" />
            <Button type="submit"> Add Todo</Button>
        </form>
    )
}

export default AddTodo