import { useState } from "react";

function Text() {
    const [text, setText] = useState("");
    return (
        <div className="YorText">
            <h1>The text in the input "{text}"</h1>
            <input onInput={(event) => setText(event.target.value)} />
        </div>
    );
}
export default Text;