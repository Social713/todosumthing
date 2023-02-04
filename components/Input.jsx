import { useState } from "react";

export default function Input({ addTask }) {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
       setUserInput(e.currentTarget.value)
   }
   const handleSubmit = (e) => {
       e.preventDefault();
       addTask(userInput);
       setUserInput("");
   }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
            <button>Add</button>
        </form>
    )
}
