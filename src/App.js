import React, { useState } from "react";
import "./App.css";

function App() {
    // State hook - `useState
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    // Helper functions

    function addItem() {
        if (!newItem) {
            alert("Enter an item");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        };

        setItems((oldList) => [...oldList, item]);

        setNewItem("");
    }

    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return ( <
        div className = "App" > { /* {1. Header} */ } <
        h1 > To Do List To Get Done < /h1> <
        h3 > Get after it! < /h3> { /* {2. Input (inout element and button)} */ } <
        div className = "addItem" >
        <
        input type = "text"
        placeholder = "Add an item..."
        value = { newItem }
        onChange = {
            (e) => setNewItem(e.target.value) }
        /> <
        button onClick = {
            () => addItem() } > ADD < /button> <
        /div>

        { /* {3. List of Items (unordered list with list items)} */ } <
        ul > {
            items.map(item => {
                return ( <
                    li key = { item.id } > < div className = "Task" > { item.value } < /div><button onClick={() => deleteItem(item.id)}>COMPLETED</button > < /li>
                )
            })
        } <
        /ul> <
        /div>
    );
}

export default App;