import {useState} from "react";
import {toast} from 'react-hot-toast'

function HelloMessage() {
  const [text, setText] = useState("Hello World");

  const handleText = () => {
    toast("Hello World")
    setText("text changed");
  }

  return (
    <div className="bg-gray-800 text-white p-10">
      <h1>{text}</h1>
      <button onClick={() => handleText()} className="bg-indigo-700 px-2 py-1">Change</button>
    </div>
  );
}

export default HelloMessage;
