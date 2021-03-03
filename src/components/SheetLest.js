import { useState } from "react";

function SheetLest() {
    const [text, setText] = useState([]);
    return (
        <div className="YorText">
            <ul><li> Aplle </li></ul>
            <input onInput={(event) => setText(event.target.value)} />
            <button>add</button>
        </div>
    );
}
export default SheetLest;