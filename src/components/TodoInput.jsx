import { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    // Check if Enter key was pressed
    if (e.key === "Enter" || e.keyCode === 13) {
      if (inputText.trim() !== "") {
        props.addList(inputText);
        setInputText("");
      }
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress} />
    <button className="add-btn"
        onClick={()=>{
            props.addList(inputText);
            setInputText("");
        }}>+</button>
    </div>
  );
}
export default TodoInput;
