import { useState } from "react";

function Inputs() {
    const [text, setText] = useState("");
    return (
        <div className="Inputs">
            <input value={text} onInput={(event)=> setText(event.target.value)}/>
            <input value={text} onInput={(event)=> setText(event.target.value)}/>
        </div>
    );
}
export default Inputs;