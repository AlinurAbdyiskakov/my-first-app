import { useState } from "react";

function Name() {
    const [name, setName] = useState("");
    return (
        <div className="YourName">
            <h1>Your name is "{name}"</h1>
            <input onInput={(event) => setName(event.target.value)} />
        </div>
    );
}
export default Name;