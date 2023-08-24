import React, { useState } from 'react';

function ToDoItem({ title, description}) {
    const [completed, setCompleted] = useState(false);
    function handleChange(event) {
        setCompleted(event.target.checked);
    }

    return(
        <div className="question_item">
            <h2>{title}</h2>
            <p>{description}</p>
            <label>
                Completed?
                <input 
                    onChange={handleChange}
                    type="checkbox"
                    checked={completed}
                ></input>
            </label>
        </div>
    )
}

export default ToDoItem;