import { useState } from "react";

function Switch1() {
    const [state, setState] = useState(true);
    return (
        <div className="Switch">
            <h1>{state ? "On" : "Off"}</h1>
            <button onClick={() => setState(!state)}>Toggle</button>
        </div>
    );
}
export default Switch1;